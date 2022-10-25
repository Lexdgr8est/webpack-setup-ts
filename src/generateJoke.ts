import axios from "axios";

function generateJoke() {
    const config = {
        headers: {
            Accept: "application/json",
        },
    };

    axios.get("https://icanhazdadjoke.com", config).then(res => {
        // const jokeContainer = document.getElementById("joke");
        // jokeContainer!.innerHTML = res.data.joke;
        console.log("The koke is:", res.data.joke);
    });
}

export default generateJoke;
