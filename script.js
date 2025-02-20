// GSAP Initial Animation
gsap.from(".hero-title", { opacity: 0, y: -50, duration: 1, ease: "power2.out" });
gsap.from(".hero-image", { opacity: 0, scale: 0.8, stagger: 0.3, duration: 1.5, ease: "power2.out" });

// Image Hover Effect
document.querySelectorAll(".hero-image").forEach(img => {
    img.addEventListener("mouseover", () => {
        document.querySelectorAll(".hero-image").forEach(otherImg => {
            if (otherImg !== img) {
                gsap.to(otherImg, { scale: 0.85, filter: "blur(4px) grayscale(100%) brightness(30%)", duration: 0.5 });
            }
        });
        gsap.to(img, { scale: 1.2, filter: "grayscale(0%) brightness(100%)", duration: 0.5 });
    });

    img.addEventListener("mouseleave", () => {
        document.querySelectorAll(".hero-image").forEach(otherImg => {
            gsap.to(otherImg, { scale: 1, filter: "grayscale(100%) brightness(50%)", duration: 0.5 });
        });
    });
});


// Mouse Move Effect
document.querySelectorAll(".hero-image").forEach(img => {
    img.addEventListener("mousemove", (e) => {
        let rect = img.getBoundingClientRect();
        let x = e.clientX - rect.left - rect.width / 2;
        let y = e.clientY - rect.top - rect.height / 2;
        gsap.to(img, { x: x * 0.1, y: y * 0.1, duration: 0.3 });
    });

    img.addEventListener("mouseleave", () => {
        gsap.to(img, { x: 0, y: 0, duration: 0.3 });
    });
});
