document.addEventListener('DOMContentLoaded', () => {
    const signupBtn = document.getElementById('open-popup');
    const closePopupBtn = document.getElementById('close-btn');
    const popup = document.getElementById('popup');
    const signupForm = document.getElementById('signup-form');

    signupBtn.addEventListener('click', () => {
        popup.style.display = 'flex';
    });

    closePopupBtn.addEventListener('click', () => {
        popup.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === popup) {
            popup.style.display = 'none';
        }
    });

    signupForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the default form submission

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();

        // Simple validation (you can add more comprehensive validation here)
        if (name === '' || email === '') {
            alert('Please fill in all fields.');
            return;
        }

        // Simulate successful submission (you can replace this with an actual submission process)
        alert('Sign-up successful!');

        // Redirect to the homepage
        window.location.href = "../Codings/Homepg.html"; // Replace 'homepage.html' with your desired URL
    });
});

