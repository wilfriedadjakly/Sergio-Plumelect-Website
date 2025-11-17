// Smooth scrolling for anchor links
document.addEventListener("DOMContentLoaded", function () {
  // Animate elements on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animated");
      }
    });
  }, observerOptions);

  // Observe all elements that should animate on scroll
  const animateElements = document.querySelectorAll(".animate-on-scroll");
  animateElements.forEach((el) => observer.observe(el));

  // Header scroll effect
  let lastScrollTop = 0;
  const header = document.querySelector(".header");

  window.addEventListener("scroll", function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop && scrollTop > 100) {
      // Scrolling down
      header.style.transform = "translateY(-100%)";
    } else {
      // Scrolling up
      header.style.transform = "translateY(0)";
    }

    lastScrollTop = scrollTop;
  });

  // Button click animations
  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    button.addEventListener("click", function (e) {
      // Create ripple effect
      const ripple = document.createElement("span");
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      ripple.style.width = ripple.style.height = size + "px";
      ripple.style.left = x + "px";
      ripple.style.top = y + "px";
      ripple.classList.add("ripple");

      this.appendChild(ripple);

      setTimeout(() => {
        ripple.remove();
      }, 600);
    });
  });

  // Service cards hover effect
  const serviceCards = document.querySelectorAll(".service-card");
  serviceCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-10px) scale(1.02)";
    });

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0) scale(1)";
    });
  });

  // Phone number click to call functionality
  const phoneNumbers = document.querySelectorAll(".phone, .contact-item p");
  phoneNumbers.forEach((phone) => {
    if (phone.textContent.includes("555")) {
      phone.style.cursor = "pointer";
      phone.addEventListener("click", function () {
        window.location.href = "tel:" + this.textContent.replace(/[^\d]/g, "");
      });
    }
  });

  // Email click functionality
  const emailElements = document.querySelectorAll(".contact-item p");
  emailElements.forEach((email) => {
    if (email.textContent.includes("@")) {
      email.style.cursor = "pointer";
      email.addEventListener("click", function () {
        window.location.href = "mailto:" + this.textContent;
      });
    }
  });

  // Parallax effect for hero section
  window.addEventListener("scroll", function () {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector(".hero");
    if (hero) {
      hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
  });

  // Contact icons rotation
  const contactIcons = document.querySelectorAll(".contact-item i");
  contactIcons.forEach((icon) => {
    icon.addEventListener("mouseenter", function () {
      this.style.transform = "rotateY(360deg) scale(1.1)";
      this.style.transition = "transform 0.6s ease";
    });

    icon.addEventListener("mouseleave", function () {
      this.style.transform = "rotateY(0deg) scale(1)";
    });
  });

  // Typewriter effect for hero title (optional)
  const heroTitle = document.querySelector(".hero-title");
  if (heroTitle) {
    const text = heroTitle.textContent;
    heroTitle.textContent = "";
    let i = 0;

    function typeWriter() {
      if (i < text.length) {
        heroTitle.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
      }
    }

    // Start typewriter effect after page load
    setTimeout(typeWriter, 1000);
  }

  // Add scroll-triggered animations to sections
  const sections = document.querySelectorAll("section");
  sections.forEach((section) => {
    section.classList.add("animate-on-scroll");
  });

  // Loading animation
  window.addEventListener("load", function () {
    document.body.style.opacity = "0";
    document.body.style.transition = "opacity 0.5s ease-in-out";

    setTimeout(() => {
      document.body.style.opacity = "1";
    }, 100);
  });

  // Emergency button pulse effect
  const emergencyButton = document.querySelector(".emergency-button");
  if (emergencyButton) {
    setInterval(() => {
      emergencyButton.style.animation = "pulse 1s ease-in-out";
      setTimeout(() => {
        emergencyButton.style.animation = "";
      }, 1000);
    }, 3000);
  }

  // Floating animation for service icons
  const serviceIcons = document.querySelectorAll(".service-icon i");
  serviceIcons.forEach((icon) => {
    setInterval(() => {
      icon.style.animation = "none";
      setTimeout(() => {
        icon.style.animation = "bounce 2s ease-in-out infinite";
      }, 10);
    }, 5000);
  });
});