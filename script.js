document.addEventListener('DOMContentLoaded', () => {
    // 1. Confirm page load
    console.log('Premium Linktree-style page loaded.');

    // 2. Block Right-Click (Context Menu)
    document.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        return false;
    });

    // 3. Robust Security: Block Developer Tools and View Source
    window.addEventListener('keydown', (e) => {
        // F12
        if (e.keyCode === 123) {
            e.preventDefault();
            return false;
        }
        // Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+Shift+C (Inspect/Console)
        if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74 || e.keyCode === 67)) {
            e.preventDefault();
            return false;
        }
        // Ctrl+U (View Source) and Ctrl+S (Save)
        if ((e.ctrlKey || e.metaKey) && (e.keyCode === 85 || e.keyCode === 83)) {
            e.preventDefault();
            return false;
        }
    }, true);

    // 4. Parallax effect for blobs based on mouse movement
    document.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;

        const blobs = document.querySelectorAll('.blob');
        blobs.forEach((blob, index) => {
            const speed = (index + 1) * 30;
            const xOffset = (x - 0.5) * speed;
            const yOffset = (y - 0.5) * speed;
            blob.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
        });
    });

    // 5. Staggered link cards appearance (already handled by CSS delay, but ensuring here)
    const cards = document.querySelectorAll('.link-card');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${0.2 + (index * 0.1)}s`;
    });
});
