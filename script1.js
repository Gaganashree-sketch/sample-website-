document.addEventListener('DOMContentLoaded', function () {
    const features = document.querySelectorAll('.feature-item');
    const heading = document.querySelector('.features h1');
    const images = document.querySelectorAll('.feature-item img');
    const paragraphs = document.querySelectorAll('.feature-item p');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.5  
    });

    features.forEach(feature => {
        observer.observe(feature);
    });

    if (heading) {
        observer.observe(heading);
    }
    images.forEach(image => {
        observer.observe(image);
    });

    paragraphs.forEach(p => {
        observer.observe(p);
    });
});