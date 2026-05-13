document.addEventListener('DOMContentLoaded', () => {
    // 1. Confirm page load
    console.log('Premium Linktree-style page loaded.');

    // 2. Block Right-Click (Context Menu)
    document.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        return false;
    });

    // 3. Block common shortcuts for saving/copying and Inspect Element
    document.addEventListener('keydown', (e) => {
        // Ctrl+S, Ctrl+U, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+Shift+C, F12
        if (
            (e.ctrlKey && (e.key === 's' || e.key === 'u')) ||
            (e.ctrlKey && e.shiftKey && (e.key === 'i' || e.key === 'j' || e.key === 'c' || e.key === 'I' || e.key === 'J' || e.key === 'C')) ||
            e.key === 'F12'
        ) {
            e.preventDefault();
            return false;
        }
    });

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
