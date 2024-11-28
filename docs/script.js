// FAQ Toggle Functionality
document.querySelectorAll('.faq-question').forEach((button) => {
    button.addEventListener('click', () => {
        const answer = button.nextElementSibling;

        // Toggle the visibility of the answer
        if (answer.style.display === 'block') {
            answer.style.display = 'none';
        } else {
            answer.style.display = 'block';
        }
    });
});
