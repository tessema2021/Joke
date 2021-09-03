
const btn = document.querySelector(".btn")
const display = document.querySelector(".display")

btn.addEventListener("click", (e) => {

    fetch("https://icanhazdadjoke.com/", {
        headers: {
            Accept: "application/json"
        }
    })
        .then(response => response.json())
        .then(data =>
            display.innerHTML = data.joke
        )
})