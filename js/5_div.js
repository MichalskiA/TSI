var b1 = document.getElementById('blok1');
var b2 = document.getElementById('blok2');
var b3 = document.getElementById('blok3');
var b4 = document.getElementById('blok4');
var inner = document.getElementById('inner');
var content = document.getElementById('content');


b1.innerHTML = 'Anna';
b2.innerHTML = 'Jacek';

var imie = prompt('Podaj imię');
b3.innerHTML = imie;

b4.textContent = 'Tomek';

/*Różnica pomiędzy inner.html a text.content*/

inner.innerHTML = '<a href="http://wp.pl"> <h1>inner</h1></a>';
content.textContent = '<a href=http://wp.pl><h1>content</h1></a>';


