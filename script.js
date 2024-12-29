document.getElementById('learnMoreBtn').addEventListener('click', function() {
    window.location.href = 'learnMore.html';
});
document.addEventListener("DOMContentLoaded", () => {
    const heading = document.querySelector(".home h1");
    let opacity = 0; 
    let scale = 0.8; 

    function animateHeading() {
        if (opacity < 1) {
            opacity += 0.02; 
            scale += 0.01; 
            heading.style.opacity = opacity;
            heading.style.transform = `scale(${scale})`;
            requestAnimationFrame(animateHeading); 
        }
    }

    animateHeading(); 
});
document.addEventListener("DOMContentLoaded", () => {
    const homeButton = document.querySelector('nav ul li a[href="index.html"]');

    let scale = 1;
    let growing = true;

    function pulseButton() {
        if (growing) {
            scale += 0.01; 
            if (scale >= 1.1) growing = false;
        } else {
            scale -= 0.01;
            if (scale <= 1) growing = true; 
        }
        homeButton.style.transform = `scale(${scale})`; 
        requestAnimationFrame(pulseButton); 
    }

    
    pulseButton();
});
document.addEventListener("DOMContentLoaded", () => {
    const paragraph = document.querySelector(".home p");

    
    let opacity = 0;
    let translateY = 20; 
    function animateParagraph() {
        if (opacity < 1) {
            opacity += 0.02; 
            translateY -= 1; 
            paragraph.style.opacity = opacity;
            paragraph.style.transform = `translateY(${translateY}px)`;
            requestAnimationFrame(animateParagraph);
        }
    }

    
    animateParagraph();
});

const learnMoreBtn = document.getElementById('learnMoreBtn');
learnMoreBtn.addEventListener('click', function() {
    learnMoreBtn.classList.add('clicked');
    setTimeout(function() {
        learnMoreBtn.classList.remove('clicked');
    }, 300); 
});


