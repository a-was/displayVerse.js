function displayVerse(elementID, bible, book, chapter, verses = null, numbers = false) {
    var element = document.getElementById(elementID);

    let url = 'https://biblia.info.pl/api/biblia';
    url += '/' + bible;
    url += '/' + book;
    url += '/' + chapter;
    if (verses) {
        url += '/' + verses;
    }

    getJSON(url, function (err, response) {
        if (err != null) {
            console.log(err);
        } else {
            response.wersety.forEach(verse => {
                if (numbers) {
                    let numberTag = document.createElement('number');
                    numberTag.classList.add('verse', 'verse-number')
                    numberTag.innerHTML = '(' + verse.werset + ')';
                    element.append(numberTag);
                }
                let verseTag = document.createElement('verse');
                verseTag.classList.add('verse', 'verse-text')
                verseTag.innerHTML = ' ' + verse.text + ' ';
                element.append(verseTag);
            })
        }
    })
}


function getJSON(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function () {
        var status = xhr.status;
        if (status === 200) {
            callback(null, xhr.response);
        } else {
            callback(status, xhr.response);
        }
    };
    xhr.send();
};
