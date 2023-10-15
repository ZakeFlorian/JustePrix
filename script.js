const name = ['Une chaise gaming (sans clé USB)', 'Un costume de Halloween', 'Un BBQ', 'Une guitare', 'Un sac à main']
const article = ['chaise.png', 'costume-halloween.png', 'grill.png', 'guitare.png', 'sac-a-main.png']
let inputPrix
let Prix 
let Random
let nbreAttempts
let showAttempts = document.getElementById('attempts')
let bouton = document.getElementById('button')
let imageName = document.getElementById('name')
let image = document.getElementById('article')
let message = document.getElementById('message')

nbreAttempts = 10
showAttempts.innerHTML = "Il vous reste toutes vos tentatives ("+nbreAttempts+" restantes) !"
function verifTentative(){
    inputPrix = docuement.getElementById('inputPrix')
    if(nbreAttempts == 0){
        showAttempts.innerHTML = "Il vous reste"+nbreAttempts+"tentatives !"
        message.innerHTML = "Vous avez perdu !! L'article était à"+Random+"€"
        button.disabled = true
    } else {
        if(inputPrix > Prix){
            message.innerHTML = "Moins cher !"
            nbreAttempts-1
            showAttempts.innerHTML = "Il ne vous reste plus que"+nbreAttempts+"tentatives !"
        }
        if(inputPrix < Prix){
            message.innerHTML = "Plus cher !"
            nbreAttempts-1
            showAttempts.innerHTML = "Il ne vous reste plus que"+nbreAttempts+"tentatives !"
        }
        if(inputPrix == Prix){
            message.innerHTML = "C'est le juste prix !!!"
            showAttempts.innerHTML = "Il ne vous restait plus que"+nbreAttempts+"tentatives !"
            button.disabled = true
        }
    }
}