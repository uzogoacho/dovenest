/* app.js */
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Haptic Feedback & Audio Interaction (Vibrate API)
    const hapticElements = document.querySelectorAll('a, button, .luxury-card');
    
    const triggerHaptic = () => {
        if (navigator.vibrate) {
            navigator.vibrate(15); // Subtle, premium tactile feedback
        }
    };

    hapticElements.forEach(el => {
        el.addEventListener('pointerdown', triggerHaptic);
        // Magnetic Hover Effect for Buttons
        if(el.classList.contains('btn-primary')) {
            el.addEventListener('mousemove', (e) => {
                const rect = el.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                el.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
            });
            el.addEventListener('mouseleave', () => {
                el.style.transform = 'translate(0px, 0px)';
            });
        }
    });

    // 2. Cinematic Scroll Reveal Observer
    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Run once for performance
            }
        });
    }, revealOptions);

    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

    // 3. Navbar Blur & Scrolled State
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }, { passive: true });

    // 4. Premium Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            triggerHaptic();
            navLinks.classList.toggle('active');
            hamburger.innerHTML = navLinks.classList.contains('active') ? '✕' : '☰';
        });
    }
});
