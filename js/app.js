const navbar = document.querySelector('#nav')
const navBtn = document.querySelector('#nav-btn')
const sidebar = document.querySelector('#sidebar')
const closeBtn = document.querySelector('#close-btn')
const date = document.querySelector('#date')
const skillsSection = document.querySelector('.skills')

// add fixed class to navbar
window.addEventListener('scroll', function () {
  if (window.pageYOffset > 80) {
    navbar.classList.add('navbar-fixed')
  } else {
    navbar.classList.remove('navbar-fixed')
  }
})

// show sidebar
navBtn.addEventListener('click', () => {
  sidebar.classList.add('show-sidebar')
})

closeBtn.addEventListener('click', () => {
  sidebar.classList.remove('show-sidebar')
})

// SKILLS BAR ANIMATION (Intersection Observer)
 // 3. Define the observer options
const options = {
    // Triggers when 10% of the element is visible in the viewport
    threshold: 0.1 
};

// 4. Create the observer callback function
const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
        // Check if the skills section is currently visible
        if (entry.isIntersecting) {
          // CRITICAL STEP: Add the ''visible-value'' class to trigger the CSS animation
          skillsSection.classList.add('visible-value')

          // Stop observing after the animation has been triggered once (saves resources)
          // observer.unobserve(skillsSection)
        } else {
          // Remove the class -> CSS shrinks the bars back to 0%
          // This resets them so they can animate again next time!
          skillsSection.classList.remove('visible-value')
        }
    });
}

// 5. Create the Intersection Observer instance
const observer = new IntersectionObserver(observerCallback, options);

// 6. Start watching the skills section
if (skillsSection) {
    observer.observe(skillsSection);
}



// set year
date.innerHTML = new Date().getFullYear()
