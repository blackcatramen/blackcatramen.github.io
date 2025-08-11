const projects = [
  {
    title: "Audio Board",
    description: `Diagnosed and repaired a shorted component on an audio board that caused a PCB trace to burn out.
Isolated the faulty connection, removed the damaged component, and manually reconstructed the blown trace to restore full board functionality.`,
    images: [
      "port/2018_12_20/20181220_154857.jpg",
      "port/2018_12_20/20181220_154902.jpg",
      "port/2018_12_20/20181220_161441.jpg",
      "port/2018_12_20/20181220_161441.jpg",
      "port/2018_12_20/20181220_161441.jpg"
    ]
  },
    {
    title: "Audio Board",
    description: `Diagnosed and repaired a shorted component on an audio board that caused a PCB trace to burn out.
Isolated the faulty connection, removed the damaged component, and manually reconstructed the blown trace to restore full board functionality.`,
    images: [
      "port/2018_12_20/20181220_154857.jpg",
      "port/2018_12_20/20181220_154902.jpg",
      "port/2018_12_20/20181220_161441.jpg",
      "port/2018_12_20/20181220_161441.jpg",
      "port/2018_12_20/20181220_161441.jpg"
    ]
  },
  {
    title: "Electric Fan",
    description: `Repaired a malfunctioning electric fan by diagnosing and fixing the control board button.
Cleaned and degreased internal fan components.`,
    images: [
      "images/cat_place_holder.jpg",
      "images/cat_paws.jpg",
      "port/fan/fan3.jpg",
      "port/fan/fan4.jpg",
      "port/fan/fan5.jpg"
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
