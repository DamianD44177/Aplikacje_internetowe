// komentarz
//funkcje / zmienne         var-a się już raczej nie korzysta
const pow2 = x => x * x;
const deg2rad = deg => deg*Math.PI/180;     //konwersja na radiany

const init = (e, a, b) => {
    console.log('Container:', document.getElementById('container'));
    console.log('Loaded in', e.timeStamp, 'ms');
    console.log(pow2(a));
    console.log(deg2rad(b));
}


/* Coll Back ?
jeżeli wykona się DOMContentLoaded to zrób test / init/ function(){} */
window.addEventListener('DOMContentLoaded', ev => init(ev, 5, 90));

/*
    console.warn('wooo Warning');
    console.error('errr Error');
    console.info('Innn Info');
*/

/*
(argument) =>
aro functon - nowsze function
chyba ze jest jeden argument to mozna bez nawiasu argument =>
*/