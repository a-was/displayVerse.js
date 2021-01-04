# displayVerse.js
Funkcji displayVerse można używać do wstawiania wersetów z [Biblii 2000](https://biblia.info.pl/biblia.html) na dowolną stronę HTML

## Argumenty funkcji:

| Nazwa     | Typ        | Wymagany | Domyślnie | Opis |
| -----     | ---        | -------- | ---       | ---  |
| elementId | string     | Tak      |           | id elementu do którego chcemy wstawić fragment Biblii |
| bible     | string     | Tak      |           | skrót tłumaczenia Biblii, [lista akceptowanych skrótów](https://biblia.info.pl/api/skroty.html) |
| book      | string     | Tak      |           | skrót księgi, [lista akceptowanych skrótów](https://biblia.info.pl/api/skroty.html) |
| chapter   | int/string | Tak      |           | numer rozdziału |
| verses    | string     | Nie      | `null`    | zakres wersetów postaci x-y <br/> jeśli `null` - wyświetlenie całego rozdziału |
| numbers   | bool       | Nie      | `false`   | czy chcemy aby wersety były numerowane |

## Instalacja

W nagłówku strony (sekcja `<head>`) dołączyć bibliotekę
```html
<script type="text/javascript" src="https://www.biblia.info.pl/api/displayVerse.js"></script>
```

## Użycie

#### Werset "samodzielny"
Jeśli chcesz umieścić werset "samodzielny", to należy użyć znacznika "div"
```html
<div id="werset_nr1"></div>
```

Następnie użyj wywołania funkcji displayVerse podając gdzie i jaki werset wstawić
```html
<script>
    displayVerse('werset_nr1', 'bt', 'mt', '1', '1-5', true);
</script>
```
Zaleca się wywoływanie funkcji na końcu strony (przykład niżej)

#### Werset w tekście
Jeśli chcesz wyświetlić werset razem z innym tekstem (na przykład w znaczniku `<p>`) należy użyć znacznika `<span>`
```html
<p>
    Tutaj pojawi się werset: "<span id='werset_nr2'></span>". A tutaj analiza tekstu...
</p>
```

Aby oddzielić tekst nową linią należy użyć znacznika `<br>`

### Style
Teksty Biblii umieszczane są w znacznikach `<span>` \
Znaczniki te posiadają klasy CSS `verse`, `verse-number` oraz `verse-text`, aby można było im nadać odpowiednie style \
Aby nadać styl należy w CSSie strony dodać klasy oraz nadać im jakieś właściwości

```html
<style>
    /* Numer oraz tekst wersetu */
    .verse {
        font-family: Arial, Helvetica, sans-serif;
    }

    /* Numer wersetu */
    .verse-number {
        color: #409eff;
    }

    /* Tekst wersetu */
    .verse-text {
        color: gray;
    }
</style>
```

Wywołania funkcji `displayVerse` najlepiej dodać na końcu znacznika `<body>`, nawet w przypadku użycia tylko jednego wywołania

```html
    ...
    <script>
        displayVerse('werset_nr1', 'bt', 'mat', '1', '1-5', true);
        displayVerse('werset_nr2', 'bw', '2tym', '1', '4-6', false)
        displayVerse('werset_nr3', 'sz', 'jan', '5')
    </script>
</body>
```
