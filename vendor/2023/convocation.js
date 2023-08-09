function animateElementsOnScroll() {
  // Get all elements with the class "animated-element"
  const animatedElements = document.querySelectorAll(".animated-element");

  // Create an intersection observer instance
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        // If the element is in the viewport, add the "animate" class to trigger the animation
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
          // Unobserve the element to avoid re-triggering the animation
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.5, // Adjust the threshold as needed, 0.5 means the element is 50% visible in the viewport
    }
  );

  // Observe each animated element
  animatedElements.forEach((element) => {
    observer.observe(element);
  });
}

// Call the function to animate the elements initially
animateElementsOnScroll();

// Re-animate the elements every time the user scrolls
window.addEventListener("scroll", () => {
  animateElementsOnScroll();
});

var finaltime = new Date("August 12 2023 11:00:00").getTime();
timer();
setInterval(timer, 1000);
function timer() {
  var now = new Date().getTime();
  var distance = finaltime - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  var box = document.querySelectorAll(".box h1");
  box[0].textContent = days;
  box[1].textContent = hours;
  box[2].textContent = minutes;
  box[3].textContent = seconds;
  for (var i = 1; i < 4; i++) {
    if (box[i].textContent.length == "1")
      box[i].textContent = "0" + box[i].textContent;
  }
}
