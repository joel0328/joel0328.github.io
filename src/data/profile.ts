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
    // Add the resume by dropping resume.pdf into public/ and uncommenting:
    // { text: 'Resume PDF', href: '/resume.pdf' },
  ],

  notes: [
    "I own the pressure sensors and pressure switches in Allison Transmission's controls, from requirements and validation through root cause with suppliers.",
    'Before that, I wrote STM32 motor-controller firmware, designed boards in Altium and automated motor testing at Hydro-Gear.',
    "On my own time I design embedded hardware. Right now that's an STM32 + FPGA platform for robotics controls. My projects are below.",
  ],

  experience: [
    {
      date: '2024–',
      org: 'Allison Transmission',
      role: 'Controls Systems Electro-Mechanical Component Engineer',
    },
    {
      date: '2022–24',
      org: 'Hydro-Gear',
      role: 'Electrical Engineer; previously Product Engineering Intern',
    },
    {
      date: '2021–22',
      org: 'Applied Intelligence Corp.',
      role: 'Electrical Engineering Intern',
    },
    {
      date: '2019–21',
      org: 'Delphi Technologies / BorgWarner',
      role: 'Test and Manufacturing Engineering Intern',
    },
  ],
};
