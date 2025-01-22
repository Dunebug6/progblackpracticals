window.addEventListener('click', function (event) {
    fetch('http://127.0.0.1:8090/list')
        .then(response => {
            if (response.ok === false) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(body =>
            document.getElementById('content').innerHTML = body)
        .catch((error) => alert("There was a network error, please try again later.\n" + error));
});