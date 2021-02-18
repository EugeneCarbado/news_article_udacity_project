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
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ formUrl }),
        })
            .then((res) => res.json())
            .then((res) => {
                updateUI(res);
                console.log(res);
            })
    } else {
        console.log(errorMessage, "invalid url")
    }

    console.log("::: Form Submitted :::")
}

async function updateUI(res) {
    // GET function that takes the info from the server
    document.querySelector('#result_output').innerText = 'Confidence = ' + res.confidence + '%';
    document.querySelector('#subjectivity_output').innerText = res.subjectivity;
    document.querySelector('#score_output').innerText = `Polarity score: ${score(
        res.score_tag
      )}`;
}

const score = (score_tag) => {
    if (score_tag === "P+" || score_tag === "P") {
        return "Positive";
    } else if (score_tag === "N+" || score_tag === "N") {
        return "Negative";
    } else if (score_tag === "NEU") {
        return "Neutral";
    } else {
        return "Non Sentimental";
    }
};



export { handleSubmit }