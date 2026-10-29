---
title: STM32 temperature and humidity monitor
order: 3
status: done
year: '2023'
dates: Mar–Aug 2023
summary: STM32G4 + BME280 board uploading to ThingSpeak over an ESP8266. Two board revisions.
lede: >-
  A temperature and humidity monitor for my house plants, taken from a Nucleo prototype to a custom
  board.
page: true
meta:
  - label: MCU
    lines:
      - text: STM32G431
  - label: LANGUAGES
    lines:
      - text: C
  - label: TOOLS
    lines:
      - text: Altium Designer, Nucleo dev kit, ThingSpeak
  # Add a SOURCE cell here when the repo is public:
  # - label: SOURCE
  #   lines:
  #     - text: repo-name
  #       href: https://github.com/joel0328/repo-name
updated: October 2026
---

## General notes

1. A small board that measures temperature and relative humidity and shows the readings on an LCD.
2. Readings go up to a ThingSpeak channel so I can check them remotely.
3. I built it to keep a better environment for my house plants.

<figure>
  <div class="figure-pair">
    <img src="/images/stm32-sensor-boards.jpg" width="599" height="800" loading="lazy" alt="Six assembled Rev B sensor boards, each with an STM32G4, ESP8266 module and connectors" style="flex: 0.749 1 0" />
    <img src="/images/stm32-sensor-layout.jpg" width="759" height="440" loading="lazy" alt="3D Altium render of the board, labeled LCD, SWD, USB and GPIO, with the STM32 in the center and the ESP8266 on the right" style="flex: 1.725 1 0" />
  </div>
  <figcaption>Rev B boards, built after Rev A turned up a few small design issues, and the layout in Altium.</figcaption>
</figure>

## Specifications

| Parameter | Value                            |
| --------- | -------------------------------- |
| MCU       | `STM32G431`                      |
| Sensor    | `Bosch BME280`                   |
| Display   | `I2C character LCD`              |
| Network   | `ESP8266 over UART → ThingSpeak` |
| Expansion | `Headers for external sensors`   |

## Revision history

| Rev     | Description                                                                                       |
| ------- | ------------------------------------------------------------------------------------------------- |
| `Proto` | Nucleo dev kit reading the BME280 and pushing data to ThingSpeak, as a proof of concept.          |
| `A`     | First Altium board putting the STM32G4, BME280, LCD connection and ESP8266 in one compact package. |
| `B`     | Fixed a few small Rev A design issues.                                                            |

## Next

- More external sensors.
- A Zigbee mesh so several boards can cover one space.
- An on-board I2C LCD backpack instead of an external one, to save space.
- Plots of how readings vary from sensor to sensor across a room.
