
function carregar() {
    var msg = window.document.getElementById('msg')
    var foto = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    


    if (hora >= 0 && hora < 12) {
        foto.src = 'bomdia.jpg'
        msg.innerHTML = `Agora são ${hora} horas, BOM DIA!`
        document.body.style.background = '#EBF881'
        
    } else if (hora >= 12 && hora <= 18) {
        foto.src = 'boatarde.jpg'
        msg.innerHTML = `Agora são ${hora} horas, BOA TARDE!`
        document.body.style.background = '#368BD2'
    }else {
        foto.src = 'boanoite.jpg'
        `Agora são ${hora} horas, BOA NOITE!`
    }



    

    
















}