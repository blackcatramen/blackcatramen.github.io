const projects = [
    {
    title: "Amplifier Repair",
    description: `Diagnosed and repaired a shorted component on an audio board that caused a PCB trace to burn out.
Isolated the faulty connection, removed the damaged component, and manually reconstructed the blown trace to restore full board functionality.`,
    images: [
      "images/repair_amplifier/1.jpg",
      "images/repair_amplifier/2.jpg"
    ]
  },
  {
    title: "Electric Fan Repair",
    description: `Repaired a malfunctioning electric fan by diagnosing and fixing the control board button.
Cleaned and degreased internal fan components.`,
    images: [
      "images/repair_fan/1.jpg",
      "images/repair_fan/2.jpg",
      "images/repair_fan/3.jpg",
      "images/repair_fan/4.jpg",
      "images/repair_fan/5.jpg"
    ]
  },
  {  
    title: "Electric Fan Triac Repair",
    description: `Replaced a failed triac.`,
    images: [
      "images/repair_fan_02/20241022_182128.jpg",	
      "images/repair_fan_02/20241022_190724.jpg",	
      "images/repair_fan_02/20241022_201358.jpg",
      "images/repair_fan_02/20241022_190538.jpg",	
      "images/repair_fan_02/20241022_190738.jpg"
    ]
  },
  {
    title: "Countertop Ice Maker Repair",
    description: `Troubleshot and fixed mechanical and electrical faults in countertop ice makers to restore proper ice production and machine reliability.`,
    images: [
      "images/repair_ice_maker/1.jpg"
    ]
  },
  {
    title: "M16 Amplifier Repair",
    description: `Replaced damaged drivers and rewiring connections to fix a short.`,
    images: [
      "images/repair_m16b_amp/1.png",
      "images/repair_m16b_amp/2.jpg",
      "images/repair_m16b_amp/3.jpg",
      "images/repair_m16b_amp/4.jpg",
      "images/repair_m16b_amp/5.jpg"
    ]
  },
  {
    title: "USB Battery Pack Repair",
    description: `description here`,
    images: [
      "images/repair_usb_battery_pack/1.jpg",
      "images/repair_usb_battery_pack/2.jpg",
      "images/repair_usb_battery_pack/3.jpg"
    ]
  },
  {
    title: "3D Printer Repair, Wiring and Tuning",
    description: `Added modifications, rewired damaged heating elements, and re-aligment`,
    images: [
      "images/repair_3D_printer/1.jpg"
    ]
  },
  {
    title: "Benchtop Powersupply Repair",
    description: `Repaired a short and a break-in traces.`,
    images: [
      "images/repair_bench_top_powersupply/1.jpg",
      "images/repair_bench_top_powersupply/2.gif"
    ]
  },
  {
    title: "Grundigg 5050 Repair",
    description: `Dignosing, researching the circuit for map out.`,
    images: [
      "images/repair_grundigg5050/1.jpg",
      "images/repair_grundigg5050/2.jpg",
      "images/repair_grundigg5050/3.png"
    ]
  },
  {
    title: "TV & Monitor Repair",
    description: `Replaced fuse and capacitors to restore backlight.`,
    images: [
      "images/repair_television/1.jpg",
      "images/repair_television/2.jpg",
      "images/repair_television/3.jpg"
    ]
  },
  {
    title: "Pontiac Radio Repair",
    description: `Fixed the shorted out fuse and lcd backlight.`,
    images: [
      "images/repair_pontiac_radio/1.jpg"
    ]
  },
  {
    title: "RIG600 Headphones Repair",
    description: `Repaired a severely damaged pair of RIG600 headphones, restoring to full functionality and audio quality.`,
    images: [
      "images/repair_head_phones/20250101_201350.jpg",	
      "images/repair_head_phones/20250104_214128.jpg",	
      "images/repair_head_phones/20250114_235323.jpg",	
      "images/repair_head_phones/20250913_114723.jpg",
      "images/repair_head_phones/20250103_095543.jpg",	
      "images/repair_head_phones/20250110_172104.jpg",	
      "images/repair_head_phones/20250115_001045.jpg",	
      "images/repair_head_phones/20250913_120310.jpg",
      "images/repair_head_phones/20250104_212325.jpg",	
      "images/repair_head_phones/20250110_173327.jpg",	
      "images/repair_head_phones/20250115_150452.jpg",
      "images/repair_head_phones/20250104_214004.jpg",	
      "images/repair_head_phones/20250110_183835.jpg",	
      "images/repair_head_phones/20250115_160548.jpg"
    ]
  },
  {
    title: "Truck Mirror Repair",
    description: `Diagnosed customer complaint mirror is not functional.`,
    images: [
      "images/repair_truck_mirror/20220905_173354.jpg",
      "images/repair_truck_mirror/20220905_173403.jpg",
      "images/repair_truck_mirror/20220905_173415.jpg"
    ]
  },
  {
    title: "Embedded 16 Character Bitbang",
    description: `Used data sheet to communicate without a library.`,
    images: [
      "images/embedded_16_char_bitbang/1.jpg",
      "images/embedded_16_char_bitbang/2.jpg"
    ]
  },
  {
    title: "Embedded NM Tech Matrix",
    description: `Modified and improved the New Mexico Tech matrix design.`,
    images: [
      "images/embedded_nm_tech_matrix/1.jpg"
    ]
  },
  {
    title: "Embedded PIC 16 Counter",
    description: `Simple embedded 16 bits counter.`,
    images: [
      "images/embedded_pic_16_counter/1.png"
    ]
  },
   {
    title: "Embedded Project Vex Communication",
    description: `Project to program Arduino interpreter between Arduino and VEX robotics system.`,
    images: [
      "images/embedded_project_vex_communication/1.jpg",
      "images/embedded_project_vex_communication/2.jpg",
    ]
  },
   {
    title: "Embedded SPI Bitbang",
    description: `Used data sheet to communicate without a library.`,
    images: [
      "images/embedded_spi_bitbang/1.jpg",
      "images/embedded_spi_bitbang/2.png"
    ]
  },
  {
    title: "Project Dim Bulb",
    description: `Built a dim bulb tester.`,
    images: [
      "images/project_dim_bulb/1.jpg"
    ]
  },
    {
    title: "Project First Etch",
    description: `First attempt at design and etching.`,
    images: [
      "images/project_first_etch/1.jpg",
      "images/project_first_etch/2.png"
    ]
  },
    {
    title: "Project SDR Mystery",
    description: `Learn to use SDR equipment and found an unidentified signal.`,
    images: [
      "images/project_sdr_mystery/1.png",
      "images/project_sdr_mystery/2.png"
    ]
  },
  {
    title: "Project Signal Tracer",
    description: `Created a signal tracer tool.`,
    images: [
      "images/project_signal_tracer/1.png",
      "images/project_signal_tracer/2.png",
      "images/project_signal_tracer/3.jpg",
      "images/project_signal_tracer/4.jpg",
      "images/project_signal_tracer/5.png"
    ]
  },
  {
    title: "Python AI Learning Project",
    description: `Used AI to learn Python programming.`,
    images: [
      "images/python_ai_learning_project/1.png",
      "images/python_ai_learning_project/2.png",
      "images/python_ai_learning_project/3.png",
      "images/python_ai_learning_project/4.jpg",
      "images/python_ai_learning_project/5.png"
    ]
  },
  {
    title: "Game Development Contributor",
    description: `Contribute to the improvement of code base of SS13 by adding functionalities, bug fixes, and refactoring.`,
    images: [
      "images/dm_lang_SS13/1.png"
    ]
  }
];

const swiperInstances = [];
const projectsContainer = document.getElementById("projects");

function initSwipers() {
  // Destroy old swipers
  swiperInstances.forEach(swiper => swiper.destroy(true, true));
  swiperInstances.length = 0;

  // Clear HTML
  projectsContainer.innerHTML = "";

  // Build HTML
  projects.forEach((project, index) => {
    const imagesHTML = project.images.map(img => `
      <div class="swiper-slide">
        <img src="${img}" alt="${project.title}" 
          class="w-full h-48 sm:h-56 md:h-64 object-cover rounded-md" />
      </div>
    `).join("");

    projectsContainer.innerHTML += `
      <h3 class="text-2xl font-bold mt-8 mb-4 text-left">${project.title}</h3>
      <p>${project.description}</p>
      <div class="swiper project-swiper-${index} w-full mt-6">
        <div class="swiper-wrapper">${imagesHTML}</div>
        <div class="swiper-pagination mt-4"></div>
      </div>
    `;
  });

  // Init new swipers
  projects.forEach((_, index) => {
    const swiper = new Swiper(`.project-swiper-${index}`, {
      loop: false,
      pagination: {
        el: `.project-swiper-${index} .swiper-pagination`,
        clickable: true,
      },
      grid: { rows: 1, fill: 'row' },
      spaceBetween: 15,
      observer: true,
      observeParents: true,
      breakpoints: {
        0: { slidesPerView: 1 },
        1024: { slidesPerView: 5 },
      }
    });
    swiperInstances.push(swiper);
  });
}

// Init once
initSwipers();

// Re-init on resize
window.addEventListener("resize", initSwipers);
