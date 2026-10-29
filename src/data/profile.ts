// Everything on the home page that isn't a project lives here.

export const profile = {
  name: 'Joel Anthony',
  description:
    'Joel Anthony, electrical engineer in Indianapolis. Embedded hardware, STM32 firmware and FPGA projects.',

  // Left-hand title block on the home page.
  titleBlock: [
    { label: 'DISCIPLINE', lines: ['Electrical Engineer'] },
    { label: 'CURRENTLY', lines: ['Allison Transmission'] },
    { label: 'LOCATION', lines: ['Indianapolis, IN'] },
  ],
  education: {
    label: 'EDUCATION',
    primary: 'BSEE, Purdue, 2023',
    secondary: 'Pursuing Purdue MSECE, Spring 2027',
  },
  contact: [
    { text: 'janthony0328@gmail.com', href: 'mailto:janthony0328@gmail.com' },
    { text: 'github.com/joel0328', href: 'https://github.com/joel0328' },
    { text: 'LinkedIn', href: 'https://www.linkedin.com/in/joelanthony1' },
    { text: 'Resume PDF', href: '/resume.pdf' },
  ],

  notes: [
    "I own the pressure sensors and pressure switches in Allison Transmission's controls, from requirements and validation through root cause with suppliers.",
    'Before that, I wrote STM32 motor-controller firmware, designed boards in Altium and automated motor testing at Hydro-Gear.',
    "On my own time I design embedded hardware. Right now that's an STM32 + FPGA platform for robotics controls. My projects are below.",
  ],

  // Same groups as the resume.
  skills: [
    { label: 'EMBEDDED', items: 'C, STM32 (HAL, STM32CubeIDE, Keil µVision), CAN, UART/SPI/I2C, six-step motor control' },
    { label: 'HARDWARE', items: 'Altium Designer, KiCad, OrCAD Capture CIS, PSpice, Fusion 360, PCB bring-up and debug' },
    { label: 'FPGA / RTL', items: 'Verilog, Xilinx Vivado, Icarus Verilog, Basys 3 and Arty A7' },
    { label: 'TEST', items: 'LabVIEW, NI-XNET, Vehicle Spy / ValueCAN, Magtrol dynamometers, end-of-line test' },
    { label: 'PROCESS', items: 'DFMEA, PPAP, RFQ specifications, root-cause analysis, supplier development' },
    { label: 'SOFTWARE', items: 'Python, Git (GitHub, Bitbucket), Linux / Ubuntu, Raspberry Pi' },
  ],

  experience: [
    {
      date: '2024–',
      org: 'Allison Transmission',
      role: 'Controls Systems Electro-Mechanical Component Engineer',
      detail:
        'Primary responsible engineer for pressure sensors and pressure switches across conventional, hybrid and electrified transmissions. Requirements, validation, root cause on embedded control hardware failures, and supplier process improvements.',
    },
    {
      date: '2022–24',
      org: 'Hydro-Gear',
      role: 'Electrical Engineer; previously Product Engineering Intern',
      detail:
        'STM32G4 motor-controller firmware in Keil and STM32CubeIDE, including six-step control. CAN debugging with LabVIEW/NI-XNET and Vehicle Spy, automated motor efficiency testing on a Magtrol dyno, end-of-line test with NI hardware, Altium board design, and DFMEAs.',
    },
    {
      date: '2021–22',
      org: 'Applied Intelligence Corp.',
      role: 'Electrical Engineering Intern',
      detail: 'Built and wired control panels and custom harnesses from customer schematics.',
    },
    {
      date: '2019–21',
      org: 'Delphi Technologies / BorgWarner',
      role: 'Test and Manufacturing Engineering Intern',
      detail: 'LabVIEW data acquisition for the manufacturing test group, and debugging production test equipment.',
    },
  ],
};
