
function handleSubmit(event) {
    event.preventDefault()


    let formUrl = document.getElementById('urlInput').value;
    const errorMessage = document.getElementById('errorMessage');
    if (Client.checkUrl(formUrl)) {

        fetch("http://localhost:8080/article", {
            method: "POST",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "text/plain",
            },
            body: formUrl,
        })
        .then((res) => res.json())
        .then((res) => {
            console.log(res);
        }).then(() => {updateUI();})
    } else {
        console.log(errorMessage, "invalid url")
    }

    console.log("::: Form Submitted :::")

    fetch('http://localhost:8080/test')
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = res.message
    })
}

async function updateUI() {
    // GET function that takes the info from the server
    const response = await fetch('/article');
    const lastEntry = await response.json();
    console.log(lastEntry);
    document.querySelector('#result_output').innerText = res.message;
    document.querySelector('#subjectivity_output').innerText = res.subjectivity;
    document.querySelector('#score_output').innerText = res.score_tag;
}

export { handleSubmit }