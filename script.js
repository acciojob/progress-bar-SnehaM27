//your JS code here. If required.
const circles = document.querySelectorAll('.circle');
const progress = document.getElementById('progress');
const next = document.getElementById('next');
const prev = document.getElementById('prev');

let currentActive = 1;

// Next Button
next.addEventListener('click', () => {
    currentActive++;

    if (currentActive > circles.length) {
        currentActive = circles.length;
    }

    update();
});

// Previous Button
prev.addEventListener('click', () => {
    currentActive--;

    if (currentActive < 1) {
        currentActive = 1;
    }

    update();
});

function update() {
    circles.forEach((circle, idx) => {
        if (idx < currentActive) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    });

    // Update progress bar width
    const actives = document.querySelectorAll('.active');
    const percent = ((actives.length - 1) / (circles.length - 1)) * 100;
    progress.style.width = percent + "%";

    // Handle button states
    prev.disabled = currentActive === 1;
    next.disabled = currentActive === circles.length;
}
