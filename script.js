document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Form submission handling
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData.entries());
            
            // Here you would typically send the data to your backend
            // For now, we'll just show a success message
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        });
    }

    // Add scroll-based header styling
    const header = document.querySelector('header');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > lastScroll && currentScroll > 100) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
        
        lastScroll = currentScroll;
    });

    // Temporary array of sentences - to be replaced with your list
    const sentences = [
        "Sample sentence 1 - Replace with your actual sentences",
        "Sample sentence 2 - Replace with your actual sentences",
        "Sample sentence 3 - Replace with your actual sentences"
    ];

    const doNotPressButton = document.getElementById('do-not-press');
    const clearButton = document.getElementById('clear-button');
    const sentenceDisplay = document.getElementById('sentence-display');

    doNotPressButton.addEventListener('click', function() {
        const randomIndex = Math.floor(Math.random() * sentences.length);
        sentenceDisplay.textContent = sentences[randomIndex];
        sentenceDisplay.style.opacity = '0';
        setTimeout(() => {
            sentenceDisplay.style.opacity = '1';
        }, 50);
    });

    clearButton.addEventListener('click', function() {
        sentenceDisplay.style.opacity = '0';
        setTimeout(() => {
            sentenceDisplay.textContent = '';
            sentenceDisplay.style.opacity = '1';
        }, 300);
    });
}); 