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

    // Array of funny sentences
    const sentences = [
        "Congratulations! You've just volunteered for the intergalactic spam list.",
        "You have unleashed the squirrels. They judge you.",
        "Error 418: I'm a teapot, and now you're in it.",
        "Warning: Reality is now loading on dial-up. Please be patient... or not.",
        "You have activated the emergency dance party. Prepare for mandatory boogie.",
        "A single rubber duck has been dispatched to your location. It knows what you did.",
        "You've just overwritten your free will. Please reboot your consciousness.",
        "Initiating random animal fact sequence... Did you know wombats poop cubes?",
        "The button has notified your cat. Expect a passive-aggressive stare later.",
        "System overload! Releasing confetti and existential dread.",
        "You've just subscribed to daily cat facts. Prepare for overwhelming cuteness.",
        "Warning: Time stream now set to 'wobbly'. Side effects may include déjà vu and sudden cravings for pickles.",
        "You have summoned the office mime. Please enjoy the performance... or try to escape.",
        "Congratulations! You've unlocked the secret level: 'Why are all the spoons missing?'",
        "Initiating self-destruct sequence... Just kidding! Here's a coupon for 10% off existential dread.",
        "You have activated the 'random compliment generator'. You have nice elbows.",
        "Warning: You've just released the 'tiny chorus of singing hamsters'. Enjoy the concert.",
        "You've just changed the color of the internet. Hope you like plaid.",
        "Error: Logic loop detected. Please insert more coffee and try again later.",
        "You've alerted the intergalactic pizza delivery service. They're on their way... with anchovies.",
        "You have unknowingly signed up for 'interpretive dance lessons with sentient houseplants'.",
        "System malfunction: Releasing a swarm of motivational quotes. You got this!",
        "You have altered the probability of finding your lost socks. Congratulations?",
        "A wild 'dad joke' has appeared! 'Why don't scientists trust atoms? Because they make up everything!'",
        "You've just activated the 'philosophical parrot'. Prepare for deep questions.",
        "Warning: You've released the 'unsolvable riddle generator'. Good luck.",
        "You have changed the default language to 'pirate'. Arrr you ready?",
        "You've just triggered the 'random historical fact generator'. Did you know that Vikings used walrus-tusk toothpicks?",
        "You have unlocked the 'infinite loop of polite apologies'. We're so sorry, we're so sorry, we're so sorry...",
        "You've just started a 'virtual pet rock' simulation. Please provide emotional support."
    ];

    // Shuffle array function
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    // Initialize shuffled sentences
    let shuffledSentences = shuffleArray([...sentences]);
    let currentIndex = 0;

    // QB functionality
    const qbOverlay = document.querySelector('.qb-overlay');
    const qbCloseButton = document.querySelector('.qb-close-button');
    const doNotPressButton = document.querySelector('.qb-button');
    const sentenceDisplay = document.querySelector('.qb-display');

    // Show QB by default
    qbOverlay.style.display = 'block';

    // Function to display next sentence
    function displayNextSentence() {
        if (currentIndex >= shuffledSentences.length) {
            shuffledSentences = shuffleArray([...sentences]);
            currentIndex = 0;
        }
        sentenceDisplay.textContent = shuffledSentences[currentIndex];
        currentIndex++;
    }

    // Event listeners for QB
    if (doNotPressButton) {
        doNotPressButton.addEventListener('click', displayNextSentence);
    }

    if (qbCloseButton) {
        qbCloseButton.addEventListener('click', () => {
            qbOverlay.style.display = 'none';
        });
    }
}); 