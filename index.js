document.addEventListener('DOMContentLoaded', () => {
  const floatingName = document.querySelector('.floating-name');
  let x = 100, y = 100;
  let dx = 2, dy = 2;

  function animate() {
    const width = window.innerWidth - floatingName.offsetWidth;
    const height = window.innerHeight - floatingName.offsetHeight;

    x += dx;
    y += dy;

    if (x <= 0 || x >= width) dx = -dx;
    if (y <= 0 || y >= height) dy = -dy;

    floatingName.style.left = x + 'px';
    floatingName.style.top = y + 'px';

    requestAnimationFrame(animate);
  }

  animate();
});
