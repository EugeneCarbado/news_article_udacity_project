  
function checkUrl(urlInput) {
    const url = /^http:\/\/|^https:\/\//i
    return url.test(inputText);
}

export { checkUrl }