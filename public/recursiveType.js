const subHeading = document.querySelector(".typeWriter");
const texts = ["Terminal.", "CLI.", "Shell.","Command Line."];
let currentIndex = 0; 
let letterIndex = 0;  
let isDeleting = false; 
const typingSpeed = 80; 
const deletingSpeed = 40; 
const pause = 1000; 

function typeWriter() {
  const currentText = texts[currentIndex]; 

  if (!isDeleting) {
    subHeading.textContent += currentText[letterIndex]; 
    letterIndex++;

    if (letterIndex === currentText.length) {
      isDeleting = true;
      setTimeout(typeWriter, pause); 
      return;
    }
  } else {
    subHeading.textContent = currentText.substring(0, letterIndex - 1);
    letterIndex--;

    if (letterIndex === 0) {
      isDeleting = false;
      currentIndex = (currentIndex + 1) % texts.length; 
      setTimeout(typeWriter, pause);
      return;
    }
  }

  const delay = isDeleting ? deletingSpeed : typingSpeed;
  setTimeout(typeWriter, delay);
}

typeWriter();

