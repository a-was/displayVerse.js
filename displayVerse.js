function displayVerse(elementId, bible, book, chapter, verses = null, numbers = false) {
    const element = document.getElementById(elementId);

    let url = 'https://biblia.info.pl/api/biblia';
    url += '/' + bible;
    url += '/' + book;
    url += '/' + chapter;
    if (verses) {
        url += '/' + verses;
    }

    getJSON(url, function (error, response) {
        if (error !== null) {
            console.error(error);
            console.error(response);
        } else {
            const versesLength = response.verses.length
            for (let i = 0; i < versesLength; i++) {
                const verse = response.verses[i];

                if (numbers) {
                    const numberTag = document.createElement('span');
                    numberTag.classList.add('verse', 'verse-number');
                    numberTag.innerHTML = '(' + verse.verse + ')';
                    element.append(numberTag);
                }
                const verseTag = document.createElement('span');
                verseTag.classList.add('verse', 'verse-text');
                verseTag.innerHTML = (i === 0 && numbers === false ? '' : ' ') + verse.text + (i === versesLength - 1 ? '' : ' ');
                element.append(verseTag);
            }
        }
    })
}


function getJSON(url, callback) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function () {
        const status = xhr.status;
        if (status === 200) {
            callback(null, xhr.response);
        } else {
            callback(status, xhr.response);
        }
    };
    xhr.send();
}
