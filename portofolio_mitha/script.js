document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    const contactBtn = document.querySelector('.contact-btn');
    const homeIcon = document.querySelector('.home-icon a');

    const allNavLinks = [...navLinks, contactBtn, homeIcon].filter(Boolean);

    allNavLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            const targetId = link.getAttribute('href').substring(1);

            
            navLinks.forEach(l => l.classList.remove('active'));
            if (link.classList.contains('nav-link')) {
                link.classList.add('active');
            }

            
            sections.forEach(sec => {
                sec.classList.remove('active');
            });

            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.classList.add('active');

                
                const animateElements = targetSection.querySelectorAll('.content-left, .content-right');
                animateElements.forEach(el => {
                    el.style.animation = 'none';
                    el.offsetHeight; 
                    el.style.animation = null;
                });
            }
        });
    });

    
    const cards = document.querySelectorAll('.skill-item, .project-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
        });
    });
    const form = document.getElementById("contactForm");
    const successMsg = document.getElementById("successMsg");
    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            successMsg.style.display = "block";
            form.reset();
            setTimeout(() => {
                successMsg.style.display = "none";
            }, 3000);
        });
    }
});
