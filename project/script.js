let url = 'https://script.google.com/macros/s/AKfycbyZZgxIBfnv9cT9c1xTIEW3IsL8tMVYch-dzCJoJkNjVV5osh0LhRTCYHn2davfSnh4Aw/exec';
let form = document.getElementById('registrationForm');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    document.getElementById("register").innerText = "Registering...";
    
    let data = new FormData(form);

    fetch(url, {
        method: "POST",
        body: data
    })
    .then((res) => res.text())
    .then((txt) => {
        document.getElementById("register").innerText = "Register";
        form.reset();
        alert('Registration successful');
    })
    .catch(error => {
        document.getElementById("register").innerText = "Register";
        alert('Registration failed: ' + error);
    });
});
