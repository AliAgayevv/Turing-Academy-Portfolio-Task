document.addEventListener('mousemove', function (e){  
  const x = e.clientX;
  const y = e.clientY;

  const backgroundNoise = document.getElementById('container')

  backgroundNoise.style.background = `radial-gradient(600px at ${x}px ${y}px, rgba(29, 78, 216, 0.15), transparent 80%)`;
});