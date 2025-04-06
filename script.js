document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section");
    function revealSections() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < window.innerHeight - 100) {
                section.classList.add("show");
            }
        });
    }
    window.addEventListener("scroll", revealSections);
    revealSections();

    // Background color change effect
    let colors = ["#FF3CAC", "#784BA0", "#2B86C5"];
    let currentColor = 0;
    setInterval(() => {
        document.body.style.background = `linear-gradient(90deg, ${colors[currentColor]}, ${colors[(currentColor + 1) % colors.length]})`;
        currentColor = (currentColor + 1) % colors.length;
    }, 5000);

    // Button hover animation
    const buttons = document.querySelectorAll("button, a");
    buttons.forEach(button => {
        button.addEventListener("mouseover", () => {
            button.style.transform = "scale(1.1)";
            button.style.transition = "transform 0.3s ease-in-out";
        });
        button.addEventListener("mouseout", () => {
            button.style.transform = "scale(1)";
        });
    });

    // Floating image effect
    const images = document.querySelectorAll("img");
    images.forEach(img => {
        img.style.transition = "transform 0.3s ease-in-out";
        img.addEventListener("mouseover", () => {
            img.style.transform = "rotate(5deg) scale(1.05)";
        });
        img.addEventListener("mouseout", () => {
            img.style.transform = "rotate(0deg) scale(1)";
        });
    });
});
