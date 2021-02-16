// const formsubmit = document.querySelector('btn');
document.addEventListener('click', handleSubmit);

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
            updateUI(res);
        })
    } else {
        console.log(errorMessage, "invalid url")
    }

    console.log("::: Form Submitted :::")
}

async function updateUI(res) {
    // GET function that takes the info from the server
    document.querySelector('#result_output').innerText = res.message;
    document.querySelector('#subjectivity_output').innerText = res.subjectivity;
    document.querySelector('#score_output').innerText = res.score_tag;
}

export { handleSubmit }