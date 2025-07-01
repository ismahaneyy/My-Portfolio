window.onload = function () {
  window.scrollTo(0, 0);
};


function toggleMenu() {
  const navigation = document.querySelector('.navigation');
  navigation.classList.toggle('active');
}


document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".navigation a");
  const navigation = document.querySelector(".navigation");

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      if (navigation.classList.contains("active")) {
        navigation.classList.remove("active");
      }
    });
  });





  const form = document.getElementById('contactForm');
  const thankYouMessage = document.getElementById('thankYouMessage');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const formData = new FormData(form);
      formData.append('_captcha', 'false');
      formData.append('_template', 'table');

      fetch("https://formsubmit.co/ajax/ismahanabdirizakk@gmail.com", {
        method: "POST",
        body: formData
      })
        .then(response => response.json())
        .then(data => {
          form.reset();
          thankYouMessage.style.display = "block";
          window.scrollTo({ top: 0, behavior: "smooth" });

        })
        .catch(error => {
          console.error("Form error:", error);
        });
    });
  }

  const skills = ["HTML", "CSS", "JavaScript", "React", "Ruby on Rails", "Python"];
  let skillIndex = 0;
  const skillSpan = document.getElementById("current-skill");
  if (skillSpan) {
    setInterval(() => {
      skillIndex = (skillIndex + 1) % skills.length;
      skillSpan.textContent = skills[skillIndex];
    }, 5000);
  }


  const aboutSkills = ["HTML", "CSS", "JavaScript", "React", "Ruby on Rails"];
  let aboutSkillIndex = 0;
  const aboutSkillSpan = document.getElementById("about-skill-rotator");
  if (aboutSkillSpan) {
    setInterval(() => {
      aboutSkillIndex = (aboutSkillIndex + 1) % aboutSkills.length;
      aboutSkillSpan.textContent = aboutSkills[aboutSkillIndex];
      aboutSkillSpan.classList.add('highlight');
    }, 2000);
  }
});

function toggleMoreAbout() {
  const section = document.getElementById('more-about');
  const btn = document.getElementById('toggleBtn');

  section.classList.toggle('show');

  if (section.classList.contains('show')) {
    btn.textContent = 'Show Less';
    setTimeout(() => {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 300);
  } else {
    btn.textContent = 'More About Me';
  }
}

function toggleBreakBuddyScreenshots() {
  const screenshots = document.getElementById('breakbuddy-screenshots');
  const btn = document.querySelector('.toggle-images-btn');
  if (screenshots.style.display === 'none' || screenshots.style.display === '') {
    screenshots.style.display = 'flex';
    btn.textContent = 'Hide Screenshots';
  } else {
    screenshots.style.display = 'none';
    btn.textContent = 'View Screenshots';
  }
}

AOS.init({
  duration: 800,
  easing: 'ease-in-out',
  once: true,
  delay: 100,
});

