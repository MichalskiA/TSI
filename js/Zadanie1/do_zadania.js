/*
Zad.1 Użytkownik podaje z klawiatury dwie wartości, długość podstawy oraz wysokość trókąta.
Wyświetl wynik w div'ie w formacie "Pole trójkąta wynosi ... cm^2".
Wynik ma być w kolorze białym na tle czarnym.
Ogranicz blok wyświetlający do szerokości 200px.
Zaokrąglij wynik do 2 miejsc po przecinku.
W arkuszu stylów ustaw wyrównanie tekstu do środka.*/

var wynik = document.getElementById('wynik');
var podstawa = Number(prompt("Podaj długość podstawy trójkąta"));
var wysokosc = Number(prompt("Podaj wysokość trójkąta"));
var oblicz = 0.5 * podstawa * wysokosc;
oblicz = oblicz.toFixed(2);
wynik.innerHTML = 'Pole trójkąta wynosi:' + oblicz + 'cm<sup>2</sup>';
