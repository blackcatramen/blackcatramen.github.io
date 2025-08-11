const contactInfo = {
  email: "ortegataj@gmail.com",
  linkedin: "https://www.linkedin.com/in/sirolove/",
  github: "https://github.com/sirolove"
};

const aboutMe = "Hi, my name is Taj Ortega. I'm working toward my bachelor's degree in electrical engineering, with just one year left to go. Right now, I'm unable to return to school due to financial challenges, so I've been putting all my time into hands-on electronics repair, custom projects, and programming work.<br><br>Most days, you'll find me fixing and maintaining all kinds of equipments and home appliances like fans and countertop ice makers, audio gear from speakers to amplifiers and car systems, 3D printers, TVs, monitors, and power supplies. I also take on custom work, such as LED lighting builds, Arduino/ESP32-based control boards, and upgrades to vintage audio gear, including tube amplifiers.<br><br>Alongside hardware work, I write embedded firmware and enjoy programming projects including contributing code to the open-source game I play. These projects let me blend my electronics skills with software problem-solving, keeping me sharp on both sides of engineering.<br><br>I'm actively looking for opportunities where I can apply my repair experience, circuit knowledge, and programming abilities to create, improve, and maintain technology that works reliably in the real world."

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
      "port/fan/fan1.jpg",
      "port/fan/fan2.jpg",
      "port/fan/fan3.jpg",
      "port/fan/fan4.jpg",
      "port/fan/fan5.jpg"
    ]
  }
];


// const aboutContainer = document.getElementById("aboutContainer");
// aboutContainer.textContent = aboutMe;

document.querySelector(".aboutContainer").innerHTML = aboutMe;

// Email — works if it's <p> or <a>
document.querySelectorAll(".emailContainer").forEach(el => {
  if (el.tagName.toLowerCase() === "a") {
    el.href = `mailto:${contactInfo.email}`;
  }
  el.textContent = contactInfo.email;
});

// LinkedIn — always an <a>
document.querySelectorAll(".linkedinContainer").forEach(el => {
  el.href = contactInfo.linkedin;
  el.textContent = contactInfo.linkedin.replace(/^https?:\/\//, "");
});

document.querySelectorAll(".githubContainer").forEach(el => {
  el.href = contactInfo.github;
  el.textContent = contactInfo.github.replace(/^https?:\/\//, "");
}); 

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
