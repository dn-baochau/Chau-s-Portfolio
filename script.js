// document.addEventListener("DOMContentLoaded", function() {
//   const canvas = document.getElementById('Matrix');
//   const ctx = canvas.getContext('2d');
//   let columns, drops;
//   const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+-=[]{}|;:\'",.<>?/';
//   const fontSize = 16;
//   const charactersArray = characters.split('');
//   const fadeDuration = 3000; // Duration for the fade-out effect (2 seconds)
//   const startTime = Date.now(); // Track when the animation starts

//   function resizeCanvas() {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//       columns = Math.floor(canvas.width / fontSize); // Number of columns
//       drops = Array(columns).fill(1); // Initial drop position for each column
//   }

//   function drawMatrix() {
//       ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'; // Clear canvas with slight opacity
//       ctx.fillRect(0, 0, canvas.width, canvas.height);

//       ctx.fillStyle = '#4824ff'; // Set text color to green
//       ctx.font = `${fontSize}px monospace`;

//       drops.forEach((drop, index) => {
//           const text = charactersArray[Math.floor(Math.random() * charactersArray.length)];
//           ctx.fillText(text, index * fontSize, drop * fontSize);
//           if (drop * fontSize > canvas.height && Math.random() > 0.975) {
//               drops[index] = 0; // Reset drop position
//           }
//           drops[index]++;
//       });
//   }

//   function animate() {
//       const elapsed = Date.now() - startTime;
//       if (elapsed < fadeDuration) {
//           drawMatrix();
//           requestAnimationFrame(animate);
//       } else {
//           // Start fading out the preloader after the animation duration
//           const preloader = document.getElementById('preloader');
//           preloader.style.opacity = 0;
//           setTimeout(() => {
//               preloader.style.display = 'none';
//               document.getElementById('main-content').style.display = 'block';
//           }, 500); // Match this duration with the opacity transition duration
//       }
//   }

//   window.addEventListener('resize', resizeCanvas);
//   resizeCanvas();
//   animate();
// });

//MATRIX
$(document).ready(function() {
  const canvas = document.getElementById('Matrix');
  const ctx = canvas.getContext('2d');
  let columns, drops;
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+-=[]{}|;:\'",.<>?/';
  const fontSize = 16;
  const charactersArray = characters.split('');
  const animationDuration = 1200; // Matrix rain duration before transition

  function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      columns = Math.floor(canvas.width / fontSize);
      drops = Array(columns).fill(1);
  }

  function drawMatrix() {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#4824ff';
      ctx.font = `${fontSize}px monospace`;

      drops.forEach((drop, index) => {
          const text = charactersArray[Math.floor(Math.random() * charactersArray.length)];
          ctx.fillText(text, index * fontSize, drop * fontSize);
          if (drop * fontSize > canvas.height && Math.random() > 0.975) {
              drops[index] = 0;
          }
          drops[index]++;
      });
  }

  function startMatrixAnimation() {
      drawMatrix();
      requestAnimationFrame(startMatrixAnimation);
  }

  $('.nav a').on('click', function(event) {
      event.preventDefault(); // Prevent default link behavior

      const linkUrl = $(this).attr('href'); // Get the link URL
      $('#preloader').css('display', 'flex'); // Show preloader
      resizeCanvas(); // Resize the canvas
      startMatrixAnimation(); // Start the Matrix animation

      setTimeout(() => {
          window.location.href = linkUrl; // Redirect to the new page
      }, animationDuration); // After the Matrix animation duration
  });
  $('.navbar a').on('click', function(event) {
    event.preventDefault(); // Prevent default link behavior

    const linkUrl = $(this).attr('href'); // Get the link URL
    $('#preloader').css('display', 'flex'); // Show preloader
    resizeCanvas(); // Resize the canvas
    startMatrixAnimation(); // Start the Matrix animation

    setTimeout(() => {
        window.location.href = linkUrl; // Redirect to the new page
    }, animationDuration); // After the Matrix animation duration
});
});


//OPEN PAGE FADE IN
document.addEventListener('DOMContentLoaded', function() {
  const contentContainer = document.querySelector('.content-container');
  const contentFrame = document.querySelector('.content-frame');
  const workContainer = document.querySelector('.work-container');
  const phoneContainer = document.querySelector('.phone-container');


  // Add animation classes to trigger CSS animations
  contentContainer.classList.add('open-page-fade-in');
  contentFrame.classList.add('open-page-fade-in');
  workContainer.classList.add('open-page-fade-in');
  phoneContainer.classList.add('open-page-fade-in');

});




//SCROLL TRIGGER
gsap.registerPlugin(ScrollTrigger);


// cái dưới này là để cái scrollbar dọc
$(window).scroll(function() {
  var wintop = $(window).scrollTop(), docheight =

  $(document).height(), winheight = $(window).height();
  var scrolled = (wintop/(docheight-winheight))*100;

  $('.scroll-line').css('width', (scrolled + '%'));
});

// cái này là để typewriting effect
document.addEventListener('DOMContentLoaded', (event) => {
  // Define the text and elements for the typewriter effect
  const elements = [
      { element: document.getElementsByClassName("about-name")[0], text: "Name: Dinh Nguyen Bao Chau" },
      { element: document.getElementsByClassName("dob")[0], text: "D.o.B: 27.09.2005" },
      { element: document.getElementsByClassName("gender")[0], text: "Gender: Female" },
      { element: document.getElementsByClassName("species")[0], text: "Species: Human" },
      { element: document.getElementsByClassName("intro")[0], text: "Hi there, welcome to my portfolio! I'm Dinh Nguyen Bao Chau, currently pursuing a major in Digital Media at RMIT University. My passions extend beyond the classroom—I have a deep love for traveling, a keen interest in archery, and an unwavering affection for dogs. Art is a constant source of inspiration for me, and I enjoy exploring its many forms and expressions. Through this portfolio, I invite you to journey through my creative endeavors and discover the world as I see it." }
  ];

  // Set the typing speed
  const speed = 30;
  let elementIndex = 0; // To track which element we're typing

  // Function to type out each character
  function typeWriter() {
      const currentElement = elements[elementIndex].element;
      const currentText = elements[elementIndex].text;
      let i = 0;

      // Clear the current element's text before starting and make it visible
      currentElement.innerHTML = "";
      currentElement.style.visibility = "visible"; // Make the element visible

      // Recursive function to type each character
      function type() {
          if (i < currentText.length) {
              currentElement.innerHTML += currentText.charAt(i);
              i++;
              setTimeout(type, speed);
          } else {
              // Move to the next element after finishing the current one
              elementIndex++;
              if (elementIndex < elements.length) {
                  setTimeout(typeWriter, speed * 2); // Add a delay before starting the next element
              }
          }
      }

      type();
  }

  // Start the typewriter effect
  typeWriter();
});







// Scale the .tv element on scroll
gsap.to(".tv", {
  scale: 2.6,
  scrollTrigger: {
    trigger: ".scroll-tv",
    start: "top top",
    end: "bottom top",
    scrub: 1,
  }
});

// Animate .hi-there appearance when the TV is scaled
gsap.to(".hi-there", {
  opacity: 1,
  scale: 0.8,
  scrollTrigger: {
    trigger: ".scroll-tv",
    start: "top top",
    end: "bottom bottom",
    scrub: 1,
  }
});

// Scroll to the next section when the scaling animation is complete
ScrollTrigger.create({
  trigger: ".scroll-tv",
  start: "bottom bottom",
  end: "bottom bottom",
  onEnter: () => {
    gsap.to(window, {
      scrollTo: { y: ".old-tv", offsetY: 0 },
      duration: 1
    });
  },
});


//SHUFFLE
jQuery(document).ready(function($) {
  // Set effect velocity in ms
  var velocity = 60;
  
  var shuffleElement = $('.shuffle');
  
  $.each(shuffleElement, function(index, item) {
      $(item).attr('data-text', $(item).text());
  });

  // Function to shuffle the array of characters
  var shuffle = function(o) {
      for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
      return o;
  };

  var shuffleText = function(element, originalText) {
      var elementTextArray = [];
      var randomText = [];
      var extraCharacters = "!@#$%^&*()_+=-[]{};:'\"\\|,.<>?/"; // Add any characters you like

      // Split the original text into an array of characters
      for (var i = 0; i < originalText.length; i++) {
          elementTextArray.push(originalText.charAt([i]));
      }

      var repeatShuffle = function(times, index) {
          if (index == times) {
              element.text(originalText); // Final text
              return;
          } 

          setTimeout(function() {
              // Create a shuffled array with some extra random characters
              randomText = shuffle(elementTextArray.concat(extraCharacters.split('')));
              for (var i = 0; i < index; i++) {
                  randomText[i] = originalText[i];    
              }
              randomText = randomText.join('').substring(0, originalText.length); // Limit to original length
              element.text(randomText);
              index++;
              repeatShuffle(times, index);
          }, velocity);    
      }
      repeatShuffle(element.text().length, 0); // Doubled the shuffles for longer effect
  }

  shuffleElement.mouseenter(function() {
      shuffleText($(this), $(this).data('text'));
  });
});


//SVG DRAW
document.addEventListener('DOMContentLoaded', function() {
  gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

  // Create a timeline that controls the scroll-triggered animations
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#svg",
      scrub: true,
      start: "top 50%", // Adjust start position
      end: "bottom bottom", // Adjust end position
      // markers: true,
    }
  });

  // Get the total length of the path for stroke animation
  const pathLength = document.querySelector(".theLine").getTotalLength();

  // Animate the path drawing
  tl.fromTo(".theLine",
    { strokeDasharray: pathLength, strokeDashoffset: pathLength },
    { strokeDashoffset: 0, duration: 4, ease: "none" } // Adjusted duration
  );

  // Animate the ball along the path
  tl.to(".ball01", { autoAlpha: 1, scale: 1, duration: 0.5 }, "0")
    .to(".ball01", {
      motionPath: {
        path: ".theLine",
        align: ".theLine",
        alignOrigin: [0.5, 0.5],
        start: 0,
        end: 1
      },
      duration: 4, // Adjusted duration to match the path drawing
      ease: "none"
    }, "0");

      tl.fromTo(".ball02", 
    { scale: 0, autoAlpha: 0 }, 
    { scale: 1, autoAlpha: 1, duration: 0.5 }, 
    "0.8" // Adjust timing to when the path intersects line02
  );

  // Animate ball03 appearance
  tl.fromTo(".ball03", 
    { scale: 0, autoAlpha: 0 }, 
    { scale: 1, autoAlpha: 1, duration: 0.5 }, 
    "1.4" // Adjust timing to when the path intersects line03
  );

  // Animate ball04 appearance
  tl.fromTo(".ball04", 
    { scale: 0, autoAlpha: 0 }, 
    { scale: 1, autoAlpha: 1, duration: 0.5 }, 
    "1.9" // Adjust timing to when the path intersects line04
  );

// Animate image on scroll
  tl.fromTo("#mummification", { scale: 0, autoAlpha: 0 }, { scale: 1, autoAlpha: 1, duration: 0.8 }, "1") // Scale up and fade in text01
  tl.fromTo("#apotles", { scale: 0, autoAlpha: 0 }, { scale: 1, autoAlpha: 1, duration: 0.8 }, "1.5") // Scale up and fade in text01
  tl.fromTo("#pulse", { scale: 0, autoAlpha: 0 }, { scale: 1, autoAlpha: 1, duration: 0.8 }, "2")

// Animate text appearance on scroll
  tl.fromTo(".text01", { scale: 0, autoAlpha: 0 }, { scale: 1, autoAlpha: 1, duration: 0.5 }, "1") // Scale up and fade in text01
    .fromTo(".text02", { scale: 0, autoAlpha: 0 }, { scale: 1, autoAlpha: 1, duration: 0.5 }, "1.5") // Scale up and fade in text02
    .fromTo(".text03", { scale: 0, autoAlpha: 0 }, { scale: 1, autoAlpha: 1, duration: 0.5 }, "2"); // Scale up and fade in text03
});

// SLIDER IMAGE
$(document).ready(function () {
  $(".slider").slick({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1800,
    arrows: true,
  });
});

//MOUSE TRAIL
// Namespace for SVG elements
const SVGNS = 'http://www.w3.org/2000/svg';
const EASE = 0.7;

// Initial pointer position (center of the screen)
const pointer = {
  x: window.innerWidth / 2,
  y: window.innerHeight / 2
};

// Update pointer position on mouse move
function updatePointer(event) {
  pointer.x = event.clientX;
  pointer.y = event.clientY;
}

// Create an animated line that follows the leader
function createLine(leader) {
  const line = document.createElementNS(SVGNS, 'line');
  
  const get = gsap.getProperty(line);
  const set = gsap.quickSetter(line, 'attr');
  
  // Function to generate modifier for GSAP animation
  const genModifier = (prop) => {
    const pos2 = `${prop}2`;
    
    return () => {
      const linePos = get(prop); // Get current line position
      const leaderPos = leader(prop); // Get leader's position
      
      const linePosNext = linePos + (leaderPos - linePos) * EASE;
      
      set({[pos2]: leaderPos - linePosNext});
      
      return linePosNext;
    }
  };
  
  // Set initial position of the line
  gsap.set(line, pointer);
  
  // Animate the line with GSAP, following the leader
  gsap.to(line, {
    x: '+=1',
    y: '+=1',
    repeat: -1,
    ease: 'linear',
    modifiers: {
      x: genModifier('x'),
      y: genModifier('y')
    }
  });  
  
  return line;
}

// Create the trail effect with multiple lines
function createTrail(color, length = 10) {  
  const svg = document.createElementNS(SVGNS, 'svg');
  let leader = (prop) => prop === 'x' ? pointer.x : pointer.y;

  for (let i = 0; i < length; i++) {
    const line = createLine(leader);
    line.style.stroke = color;
    svg.appendChild(line);
    
    leader = gsap.getProperty(line);
  }
  
  // Append the SVG containing the trail lines to the document body
  document.body.appendChild(svg);
}

// Event listeners to update pointer position
window.addEventListener('pointerdown', updatePointer);
window.addEventListener('pointermove', updatePointer);

// Create trails with different colors and lengths
createTrail('cyan', 30);
createTrail('yellow', 20);
createTrail('orange', 10);
