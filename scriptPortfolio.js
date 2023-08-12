const filterButtons = document.querySelectorAll('.filter-button');
const projects = document.querySelectorAll('.project');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const category = button.getAttribute('data-category');
        projects.forEach(project => {
            if (category === 'all' || project.getAttribute('data-category') === category) {
                project.style.display = 'block';
            } else {
                project.style.display = 'none';
            }
        });
    });
});
