// script.ts
const toggleButton = document.getElementById('toggleSkills') as HTMLButtonElement;
const skillsSection = document.getElementById('skills') as HTMLElement;

toggleButton.addEventListener('click', () => {
    if (skillsSection.style.display === 'none' || !skillsSection.style.display) {
        skillsSection.style.display = 'block';
    } else {
        skillsSection.style.display = 'none';
    }
});