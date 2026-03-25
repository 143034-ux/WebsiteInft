const toggle = document.getElementById('darkmodeToggle');
const body = document.body;

toggle.addEventListener('click', (e) => {
  body.classList.toggle('dark-mode');
  const icon = toggle.querySelector('i');
  const span = toggle.querySelector('span');
  if (body.classList.contains('dark-mode')) {
    icon.className = 'fas fa-sun';
    span.textContent = 'licht';
  } else {
    icon.className = 'fas fa-moon';
    span.textContent = 'donker';
  }
});

const blob = document.getElementById('blob');
document.addEventListener('mousemove', (e) => {
  const { clientX, clientY } = e;
  blob.style.transform = `translate(${clientX - 250}px, ${clientY - 250}px)`;
});

const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const dynamicText = document.getElementById('dynamicText');
const btns = [btn1, btn2, btn3];

function setActive(activeBtn) {
  btns.forEach(btn => btn.classList.remove('active'));
  activeBtn.classList.add('active');
}

btn1.addEventListener('click', () => {
  setActive(btn1);
  dynamicText.innerHTML = ' <strong>onderbouw</strong>  Je legt hier een goede basis over het vak informatica.';
});

btn2.addEventListener('click', () => {
  setActive(btn2);
  dynamicText.innerHTML = ' <strong>bovenbouw</strong>  Je begint je verder the ontwikkelen in het vak informatica en dieper in op opdrachten.';
});

btn3.addEventListener('click', () => {
  setActive(btn3);
  dynamicText.innerHTML = ' <strong>projecten</strong>  Al onze projecten of wat je kan verwachten staat hierboven!.';
});

const skillFill1 = document.getElementById('skill1');
const skillFill2 = document.getElementById('skill2');
const skillFill3 = document.getElementById('skill3');
const skillFill4 = document.getElementById('skill4');
const perc1 = document.getElementById('perc1');
const perc2 = document.getElementById('perc2');
const perc3 = document.getElementById('perc3');
const perc4 = document.getElementById('perc4');

const skillBars = [skillFill1, skillFill2, skillFill3, skillFill4];
const percents = [perc1, perc2, perc3, perc4];
const widths = [50, 30.25, 10, 9.75];

skillBars.forEach((bar, idx) => {
  bar.style.width = '0%';
  percents[idx].innerText = '0%';
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // vul de balken
      skillBars.forEach((bar, idx) => {
        setTimeout(() => {
          bar.style.width = widths[idx] + '%';
          percents[idx].innerText = widths[idx] + '%';
        }, 150);
      });
      observer.disconnect(); 
    }
  });
}, { threshold: 0.3 });

const skillsSection = document.querySelector('.skills-section');
if (skillsSection) observer.observe(skillsSection);

const cards = document.querySelectorAll('.card');
cards.forEach(c => {
  c.addEventListener('mouseenter', (e) => {
    c.style.transition = 'transform 0.2s, box-shadow 0.3s';
  });
});

const images = [
  'waat.png',  
  'ac.png', 
  'o.png',
  'yay.png',
  'speed.png',
  'jeff.png',
  '882107d5402b12843758b6b6c86ae85a.jpg'
];

let currentImageIndex = 0;
const slideshowImage = document.getElementById('slideshow-image');
const dots = document.querySelectorAll('.dot');

function changeImage(index) {
  currentImageIndex = index;
  
  slideshowImage.style.opacity = '0';
  
  setTimeout(() => {
    slideshowImage.src = images[currentImageIndex];
    slideshowImage.style.opacity = '1';
  }, 400);
  
  dots.forEach((dot, i) => {
    if (i === currentImageIndex) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });
}

function currentSlide(index) {
  changeImage(index);
  resetTimer();
}

let slideshowInterval = setInterval(() => {
  let nextIndex = (currentImageIndex + 1) % images.length;
  changeImage(nextIndex);
}, 5000);

function resetTimer() {
  clearInterval(slideshowInterval);
  slideshowInterval = setInterval(() => {
    let nextIndex = (currentImageIndex + 1) % images.length;
    changeImage(nextIndex);
  }, 5000);
}

window.addEventListener('load', () => {
  slideshowImage.src = images[0];
});

slideshowImage.addEventListener('mouseenter', () => {
  clearInterval(slideshowInterval);
});

slideshowImage.addEventListener('mouseleave', () => {
  resetTimer();
});
