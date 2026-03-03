document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    // Navigation Logic for Single Page Layout (No Scroll)
    const contactBtn = document.querySelector('.contact-btn');
    const homeIcon = document.querySelector('.home-icon a');

    const allNavLinks = [...navLinks, contactBtn, homeIcon].filter(Boolean);

    allNavLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            const targetId = link.getAttribute('href').substring(1);

            // Manage nav link active states
            navLinks.forEach(l => l.classList.remove('active'));
            if (link.classList.contains('nav-link')) {
                link.classList.add('active');
            }

            // Manage section active states
            sections.forEach(sec => {
                sec.classList.remove('active');
            });

            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.classList.add('active');

                // Retrigger animations
                const animateElements = targetSection.querySelectorAll('.content-left, .content-right');
                animateElements.forEach(el => {
                    el.style.animation = 'none';
                    el.offsetHeight; /* trigger reflow */
                    el.style.animation = null;
                });
            }
        });
    });

    // Add some hover effects to cards if they don't exist in CSS
    const cards = document.querySelectorAll('.skill-item, .project-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            // Future interaction logic
        });
    });
});
