document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('nav ul li a');
    
    for (const link of links) {
        link.addEventListener('click', smoothScroll);
    }

    function smoothScroll(event) {
        event.preventDefault();
        const targetId = event.currentTarget.getAttribute('href') === "#" ? "header" : event.currentTarget.getAttribute('href');
        const targetPosition = document.querySelector(targetId).offsetTop;
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }

    const sections = document.querySelectorAll('section');
    const navLi = document.querySelectorAll('nav ul li a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 60) {
                current = section.getAttribute('id');
            }
        });

        navLi.forEach(li => {
            li.classList.remove('active');
            if (li.getAttribute('href') === `#${current}`) {
                li.classList.add('active');
            }
        });
    });

    const form = document.getElementById('recommendation-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const newRecommendation = document.getElementById('new-recommendation').value;
        const recommendationAuthor = document.getElementById('recommendation-author').value;

        if (newRecommendation && recommendationAuthor) {
            const recommendationContainer = document.createElement('div');
            recommendationContainer.classList.add('recommendation');

            const recommendationText = document.createElement('p');
            recommendationText.textContent = `"${newRecommendation}"`;
            recommendationContainer.appendChild(recommendationText);

            const recommendationCite = document.createElement('cite');
            recommendationCite.textContent = `- ${recommendationAuthor}`;
            recommendationContainer.appendChild(recommendationCite);

            const recommendationsSection = document.getElementById('recommendations');
            recommendationsSection.insertBefore(recommendationContainer, form);

            form.reset();
            alert('Thank you for your recommendation!');
        } else {
            alert('Please fill out both fields before submitting.');
        }
    });

    const scrollToTopBtn = document.querySelector('.scroll-to-top');
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
