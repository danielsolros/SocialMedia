document.addEventListener('DOMContentLoaded', () => {
    // 1. Confirm page load
    console.log('Premium Linktree-style page loaded.');

    // 2. Block Right-Click (Context Menu)
    document.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        return false;
    });

    // 3. Robust Security: Block Developer Tools and Prevent Content Copying
    
    const warningHTML = '<div style="display:flex;justify-content:center;align-items:center;height:100vh;background-color:#020203;color:white;font-family:sans-serif;text-align:center;padding:20px;position:fixed;top:0;left:0;width:100%;z-index:9999;"><div><h1 style="font-size:2rem;margin-bottom:1rem;color:#3b82f6;">Acceso Protegido</h1><p style="font-size:1.1rem;opacity:0.8;">Por razones de seguridad y derechos de autor, las herramientas de desarrollo están deshabilitadas.</p></div></div>';

    const triggerProtection = () => {
        // Destruye el DOM por completo
        document.write(warningHTML);
        document.close();
        // Redirige a una página en blanco para matar el proceso actual
        window.location.replace("about:blank");
    };

    // Block Keyboard Shortcuts and Wipe DOM instantly
    window.addEventListener('keydown', (e) => {
        if (e.keyCode === 123 || 
            ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74 || e.keyCode === 67)) ||
            ((e.ctrlKey || e.metaKey) && (e.keyCode === 85 || e.keyCode === 83))) {
            e.preventDefault();
            triggerProtection();
            return false;
        }
    }, true);

    // Prevent Copy/Cut/Paste
    ['copy', 'cut', 'paste', 'selectstart'].forEach(event => {
        document.addEventListener(event, (e) => {
            e.preventDefault();
            return false;
        });
    });

    const detectDevTools = () => {
        const threshold = 160;
        const widthDiff = window.outerWidth - window.innerWidth > threshold;
        const heightDiff = window.outerHeight - window.innerHeight > threshold;

        if (widthDiff || heightDiff) {
            triggerProtection();
        }
    };

    // Trampa de debugger agresiva para detectar DevTools desacopladas (detached)
    const debuggerTrap = () => {
        const start = performance.now();
        debugger;
        const end = performance.now();
        if (end - start > 100) {
            triggerProtection();
        }
    };

    // Bucle constante
    setInterval(() => {
        detectDevTools();
        debuggerTrap();
    }, 500);

    // También al redimensionar
    window.addEventListener('resize', detectDevTools);

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
