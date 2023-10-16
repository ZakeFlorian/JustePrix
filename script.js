const nameImage = ['Une chaise gaming (sans clé USB)', 'Un costume de Halloween', 'Un BBQ', 'Une guitare', 'Un sac à main'];
const article = ['chaise.png', 'costume-halloween.png', 'grill.png', 'guitare.png', 'sac-a-main.png'];

let inputPrix;
let Prix;
let Random;
let nbreAttempts;
let showAttempts = document.getElementById('attempts');
let button = document.getElementById('button');

let imageName = document.getElementById('name-image');
let articleImage = document.getElementById('article');
let message = document.getElementById('message');

function prixRandom(valeurMax) {
    return Math.floor(Math.random() * valeurMax);
}

Random = prixRandom(5);
Prix = prixRandom(100) + 1;

function imageRandom(valeur) {
    return '<img src="../JustePrix/img/' + valeur + '" class="img-fluid" width="30%">';
}

articleImage.innerHTML = imageRandom(article[Random]);
imageName.innerHTML = nameImage[Random];

nbreAttempts = 10;
showAttempts.innerHTML = "Il vous reste " + nbreAttempts + " tentatives !";

function verifTentative() {
    inputPrix = document.getElementById('inputPrix').value;

    if (nbreAttempts === 0) {
        showAttempts.innerHTML = "Il vous reste " + nbreAttempts + " tentatives !";
        message.innerHTML = "Vous avez perdu !! L'article était à " + Prix + "€";
        button.disabled = true;
    } else {
        nbreAttempts--;
        showAttempts.innerHTML = "Il ne vous reste plus que " + nbreAttempts + " tentatives !";

        if (inputPrix > Prix) {
            message.innerHTML = "Moins cher !";
        }
        if (inputPrix < Prix) {
            message.innerHTML = "Plus cher !";
        }
        if (inputPrix == Prix){
            message.innerHTML = "C'est le juste prix !!!";
            showAttempts.innerHTML = "Il ne vous restait plus que " + nbreAttempts + " tentatives !";
            button.disabled = true;
        }
    }
}
button.addEventListener('click', verifTentative, false);