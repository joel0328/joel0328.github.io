---
title: STM32 + FPGA control platform
order: 1
status: active
year: '2026'
summary: >-
  Nucleo-G431KB and Basys 3 joined by a CRC-checked SPI register link: telemetry in, control
  math on the FPGA, motor commands out.
lede: >-
  An SPI register link between an STM32G431 and an Artix-7 FPGA, and the base of my robotics
  control platform.
page: true
meta:
  - label: BOARDS
    lines:
      - text: Nucleo-G431KB
      - text: Basys 3 (Artix-7)
  - label: LANGUAGES
    lines:
      - text: C, Verilog, Python, Tcl
  - label: TOOLS
    lines:
      - text: STM32CubeIDE, Vivado, Icarus Verilog, GitHub Actions
  - label: SOURCE
    lines:
      - text: g4-fpga-link
        href: https://github.com/joel0328/g4-fpga-link
      - text: MIT license
updated: October 2026
---

## General notes

1. This is the link layer for my robotics control platform. An STM32G431 reads and writes registers in an Artix-7 FPGA over SPI, with a CRC on every frame.
2. The FPGA also drives a loop tick and an interrupt line back to the STM32, so the MCU can run a fixed-rate control loop off FPGA timing.
3. The goal: telemetry comes in, the FPGA does the control math, and the STM32 drives the motors. The first robot on it will be a two-wheeled self-balancer.

## Block diagram

<div class="block-diagram">
  <div class="blk">
    <p class="k">MCU</p>
    <p class="blk-name">Nucleo-G431KB</p>
    <p class="blk-desc">Driver, self-test, status over USB serial</p>
  </div>
  <div class="wires">
    <p class="bus">SPI + CRC-8 &#8594;&#8592;</p>
    <p>&#8592; FPGA_IRQ</p>
    <p>&#8592; LOOP_TICK</p>
    <p>&#8592; FAULT_N</p>
    <p>FPGA_RST_N &#8594;</p>
  </div>
  <div class="blk">
    <p class="k">FPGA</p>
    <p class="blk-name">Basys 3 · Artix-7</p>
    <p class="blk-desc">SPI slave, register file, tick timer, IRQ logic</p>
  </div>
</div>

<p class="small">Wired through Pmod JA. Each board runs from its own USB.</p>

## Link specifications

| Parameter    | Value                                             |
| ------------ | ------------------------------------------------- |
| SPI mode     | `Mode 0, MSB first, GPIO chip select`             |
| Tested clock | `5.3 and 10.6 MHz`                                |
| Integrity    | `CRC-8/SMBUS (poly 0x07) on every frame`          |
| Frames       | `6-byte write · 7-byte read · bursts of 1–16 words` |
| Bad frames   | `Dropped, counted, FAULT_N pulses low`            |
| Bursts       | `All-or-nothing on both CRCs`                     |
| Loop tick    | `Programmable from the 100 MHz clock; 1 kHz default` |
| Versioning   | `VERSION register; driver refuses a mismatch`     |

## Register map — version 2

| Addr      | Name                    | Access  | Description                                 |
| --------- | ----------------------- | ------- | ------------------------------------------- |
| `0x00`    | `ID`                    | `RO`    | 0x47344650 ("G4FP")                         |
| `0x01`    | `VERSION`               | `RO`    | Protocol version                            |
| `0x02`    | `SCRATCH`               | `RW`    | Link test register                          |
| `0x03–05` | `LEDS · SWITCHES · SEG7` | `RW/RO` | Basys 3 board I/O                           |
| `0x06–07` | `TICK_DIV · TICK_COUNT` | `RW/RO` | Loop tick period and count                  |
| `0x08–09` | `IRQ_STATUS · IRQ_ENABLE` | `RW1C/RW` | Tick, input change and CRC-error interrupts |
| `0x0A–0B` | `FRAMES_OK · CRC_ERRS`  | `RO`    | Link health counters                        |
| `0x0C`    | `TIME_US`               | `RO`    | Free-running microsecond timestamp          |
| `0x10–1F` | `SCRATCH_RAM`           | `RW`    | 16 words for the burst self-test            |

<p class="small">Full map, frame formats and wiring in the <a href="https://github.com/joel0328/g4-fpga-link#readme">README</a>.</p>

## Verification

An Icarus Verilog testbench exercises the RTL, and a replay test builds the STM32 driver on a PC and runs it against the simulated FPGA. GitHub Actions runs both, plus the firmware build, on every push. On hardware, the STM32 runs a 10,000-pass self-test at startup and then reports ticks climbing at about 1,000 per second with zero CRC errors.

`make test` runs the RTL sim and driver replay locally.

## Next

- Run control algorithms built in MATLAB through the link: telemetry in, control on the FPGA, motor commands out.
- Add a gyro and motor drive, then build the self-balancing robot on it.
- Move to one board with an STM32G4, an Artix-7 and a gyro, possibly with CAN and ESC handling.
