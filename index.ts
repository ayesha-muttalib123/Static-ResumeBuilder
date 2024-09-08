const skillsSection = document.getElementById('skills');
const toggleButton = document.createElement('button');
toggleButton.textContent = 'Toggle Skills';
document.body.appendChild(toggleButton);

toggleButton.addEventListener('click', () => {
  if (skillsSection) {

    if (skillsSection.style.display === 'none') {
      skillsSection.style.display = 'block';
    } else {
      skillsSection.style.display = 'none';
    }
  }
});
