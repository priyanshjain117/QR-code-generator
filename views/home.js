let root = document.documentElement;
let mover = document.querySelector(".mover");
let follower = document.querySelector(".follower"); // Select the follower element

// Listen for mousemove event
root.addEventListener("mousemove", (e) => {
    // Get the current mouse position
    let mouseX = e.clientX;
    let mouseY = e.clientY;

    // Update CSS variables for positioning
    root.style.setProperty('--mouse-x', `${mouseX}px`);
    root.style.setProperty('--mouse-y', `${mouseY}px`);

    // Move the animation to follow the mouse
    mover.style.transform = `translate3d(${mouseX - 10}px, ${mouseY - 10}px, 0)`; // Adjust the offset
    follower.style.transform = `translate3d(${mouseX - 10}px, ${mouseY - 10}px, 0)`; // Move the follower

    // Optional: You can also animate other properties like scale or opacity for effect
    mover.classList.add("active");
    follower.classList.add("active");
    setTimeout(() => {
        mover.classList.remove("active");
        follower.classList.remove("active");
    }, 250);
});

