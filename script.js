document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registerForm');
    const countrySelect = document.getElementById('countrySelect');

    fetch('countries.json')
        .then(response => response.json())
        .then(data => {
            data.countries.forEach(country => {
                const opt = document.createElement('option');
                opt.value = country.code;
                opt.textContent = country.name;
                countrySelect.appendChild(opt);
            });
        })
        .catch(error => console.error('Error al cargar los países:', error));

    form.addEventListener('submit', event => {
        event.preventDefault();

        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            password: document.getElementById('password').value,
            confirmPassword: document.getElementById('confirmPassword').value,
            gender: document.querySelector('input[name="gender"]:checked').value,
            country: document.getElementById('countrySelect').value,
            termsAccepted: document.getElementById('terms').checked
        };

        console.log(formData);
    });
});
