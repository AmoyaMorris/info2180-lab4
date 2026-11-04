document.getElementById('search').addEventListener('click', function() {

    fetch('superheroes.php')
        .then(response => response.text())
        .then(data => {
            let parser = new DOMParser();
            let doc = parser.parseFromString(data, 'text/html');

            let superheroes = doc.querySelectorAll('li');
            let names = [];

            superheroes.forEach(function(hero) {
                names.push(hero.textContent);
            });

            alert(names.join('\n'));
        });

});
