document.getElementById('search').addEventListener('click', function() {

    let query = document.getElementById('query').value;

    fetch('superheroes.php?query=' + encodeURIComponent(query))
        .then(response => response.text())
        .then(data => {
            document.getElementById('result').innerHTML = data;
        });

});
