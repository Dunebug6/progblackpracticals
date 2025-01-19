window.addEventListener('click', function (event) {
    fetch('http://127.0.0.1:8090/list')
        .then(response =>
            response.text()
            // if response is a 404, throw error
            .then(text => response.ok ? text : Promise.reject(text)))
        .then(body =>
            document.getElementById('content').innerHTML = body)
        .catch((error) => alert("There was a network error, please try again later.\n" + error));
});