document.addEventListener('DOMContentLoaded', () => {
    // 1. Confirm page load
    console.log('Premium Linktree-style page loaded.');

    // 2. Block Right-Click (Context Menu)
    document.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        return false;
    });

    // 3. Block common shortcuts for saving/copying
    document.addEventListener('keydown', (e) => {
        // Ctrl+S, Ctrl+U, Ctrl+Shift+I, F12
        if (
            (e.ctrlKey && (e.key === 's' || e.key === 'u')) ||
            (e.ctrlKey && e.shiftKey && e.key === 'i') ||
            e.key === 'F12'
        ) {
            e.preventDefault();
            return false;
        }
    });

    // 4. Parallax effect for blobs and Glow Cursor
    const cursorGlow = document.getElementById('cursor-glow');
    
    document.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        
        const x = mouseX / window.innerWidth;
        const y = mouseY / window.innerHeight;

        // Move blobs
        const blobs = document.querySelectorAll('.blob');
        blobs.forEach((blob, index) => {
            const speed = (index + 1) * 30;
            const xOffset = (x - 0.5) * speed;
            const yOffset = (y - 0.5) * speed;
            blob.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
        });

        // Move Glow Cursor
        if (cursorGlow) {
            cursorGlow.style.left = `${mouseX}px`;
            cursorGlow.style.top = `${mouseY}px`;
        }
    });

    // 5. Staggered link cards appearance (already handled by CSS delay, but ensuring here)
    const cards = document.querySelectorAll('.link-card');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${0.2 + (index * 0.1)}s`;
    });
});
