var skillsSection = document.getElementById('skills');
var toggleButton = document.createElement('button');
toggleButton.textContent = 'Toggle Skills';
document.body.appendChild(toggleButton);
toggleButton.addEventListener('click', function () {
    if (skillsSection) {
        if (skillsSection.style.display === 'none') {
            skillsSection.style.display = 'block';
        }
        else {
            skillsSection.style.display = 'none';
        }
    }
});
