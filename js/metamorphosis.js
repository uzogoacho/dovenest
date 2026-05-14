/**
 * DOVE NEST METAMORPHOSIS ENGINE
 * Clean. Bug-free. High-Performance.
 */

document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Haptic Feedback System
    const triggerHaptic = () => {
        if ("vibrate" in navigator) {
            navigator.vibrate([15, 30, 15]); // Complex premium vibration pattern
        }
    };

    // 2. Intersection Observer (Smooth Reveal)
    const observerOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                triggerHaptic(); // Subtle haptic on scroll reveal
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

    // 3. Dynamic Cursor Following Glow
    const orb = document.querySelector('.glow-orb');
    document.addEventListener('mousemove', (e) => {
        const x = e.clientX;
        const y = e.clientY;
        orb.style.left = `${x - window.innerWidth/2}px`;
        orb.style.top = `${y - window.innerHeight/2}px`;
    });

    // 4. Booking Logic (Official Email: doveneststcruz@gmail.com)
    window.initiateBooking = (packageName) => {
        const phone = "919822182917";
        const message = encodeURIComponent(`I am ready to transform my event at Dove Nest. Package: ${packageName}`);
        window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
    };
});
