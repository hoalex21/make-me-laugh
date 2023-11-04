let dadJokeButton = document.getElementById('dad-joke');

let error = document.getElementById('error');
let setup = document.getElementById('setup');
let punchline = document.getElementById('punchline');

dadJokeButton.addEventListener('click', () => {
    fetch('/dad-joke').then((response) => {
        return response.json();
    }).then((data) => {
        setup.innerText = data.setup;
        punchline.innerText = data.punchline;
    }).catch((error) => {
        console.log(error);
        setup.innerText = "Server failure, a joke could not be generated.";
        punchline.innerText = "You ARE the joke";
    });
});
