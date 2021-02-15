  
function checkUrl(urlInput) {
    const url = /^http:\/\/|^https:\/\//i
    return url.test(urlInput);
}

export { checkUrl }