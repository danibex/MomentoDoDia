 function carregar () { 
var momento = document.getElementById('momento')
var corpo = document.getElementById('corpo')
var msg = document.getElementById('msg')
var foto = document.getElementById('foto')
var data = new Date()
var hora = data.getHours()

msg.innerHTML = `Agora são ${hora} horas.`

if (hora >= 0 && hora < 12) {
    foto.innerHTML = '<img id="img" src="fotos/manha.jpg">'
    corpo.style.background = '#A1BAD5'
    momento.innerHTML = '<p>Agora é manhã!</p>'
    //DIA
} else if (hora >= 12 && hora <= 18) {
    foto.innerHTML = '<img id="img" src="fotos/tarde.jpg">'
    document.body.style.background = '#B7826D'
    momento.innerHTML = '<p>Agora é tarde!</p>'
    //TARDE
} else {
    foto.innerHTML = '<img id="img" src="fotos/noite.jpg">'
    document.body.style.background = '#283544'
    momento.innerHTML = '<p>Agora é noite!</p>'
    //NOITE
}
} 