---
title: CORDIC engine for Tiny Tapeout
order: 4
status: active
year: '2026'
summary: 16-bit fixed-point CORDIC core; passes CI through gate-level sim.
lede: A 16-bit fixed-point CORDIC core for the TTSKY26c Tiny Tapeout shuttle.
page: true
meta:
  - label: SHUTTLE
    lines:
      - text: Tiny Tapeout TTSKY26c
  - label: LANGUAGES
    lines:
      - text: Verilog, Python
  - label: TOOLS
    lines:
      - text: pytest, Tiny Tapeout CI
  - label: SOURCE
    lines:
      - text: ttsky_verilog_joel
        href: https://github.com/joel0328/ttsky_verilog_joel
      - text: GDS viewer
        href: https://joel0328.github.io/ttsky_verilog_joel/
updated: October 2026
---

## General notes

1. A 16-bit CORDIC core aimed at the TTSKY26c shuttle.
2. It runs in two modes: rotation (sine and cosine of an angle) and vectoring (magnitude and angle of a vector).
3. You talk to it through a small register map, one byte at a time, over the Tiny Tapeout pins.

## Specifications

| Parameter     | Value                                |
| ------------- | ------------------------------------ |
| Number format | `Q1.14 fixed point`                  |
| Datapath      | `19 bits internal, 3 guard bits`     |
| Angles        | `Binary radians, 16-entry atan table` |
| Modes         | `Rotation · vectoring`               |
| Interface     | `Byte-serial register map on TT pins` |

## Verification

The reference is a Python model with a pytest suite. The same test vectors run against the RTL and then the gate-level netlist, so the model, the Verilog and the gates all have to agree.

| CI workflow | Checks                    | Result   |
| ----------- | ------------------------- | -------- |
| `gds`       | Layout build              | `✓ pass` |
| `precheck`  | Tiny Tapeout design rules | `✓ pass` |
| `gl_test`   | Gate-level simulation     | `✓ pass` |
| `viewer`    | GDS viewer render         | `✓ pass` |

<figure>
  <a href="https://joel0328.github.io/ttsky_verilog_joel/" aria-label="Open the layout in the 3D GDS viewer">
    <img src="/images/cordic-gds.jpg" width="1280" height="800" loading="lazy" alt="3D render of the CORDIC tile layout: rows of standard cells with blue metal routing and vertical power straps" />
  </a>
  <figcaption>The hardened tile in the Tiny Tapeout GDS viewer. Click to explore it in 3D.</figcaption>
</figure>

<!--
## Where it stands

What happened, what you learned, and what's left to finish.
-->
