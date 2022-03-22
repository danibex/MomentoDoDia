        let textoHoraDom = document.getElementById('hora')
        let hora = new Date()
        let horaTratada = hora.getHours()
        let min = hora.getMinutes()
        let momento = document.getElementById('momentoDoDia')
        let imagem = document.getElementById('imagem-da-hora')
        let fundo = document.getElementById("cor-de-fundo")
        textoHoraDom.innerHTML = `Agora são ${horaTratada} : ${min}`

        if (horaTratada > 18 || horaTratada < 0) {
            momento.innerHTML = 'Agora é noite!!!'
            imagem.innerHTML = '<img src="https://agenciabrasil.ebc.com.br/sites/default/files/atoms/image/926212-super%20lua_1.jpg" alt="foto-noite">'
            fundo.style.background = '#363636'
        } else if (horaTratada > 0 || horaTratada < 6) {
            momento.innerHTML = 'Agora é madrugada!!!'
            imagem.innerHTML = '<img src="https://www.teclasap.com.br/wp-content/uploads/2015/02/madrugada-2.jpg" alt="foto-madrugada">'
            fundo.style.background = '#363636'
        } else if (horaTratada > 6 || horaTratada < 12) {
            momento.innerHTML = 'Agora é manhã!!!'
            imagem.innerHTML = '<img src="https://i1.wp.com/nerdizmo.uai.com.br/wp-content/uploads/sites/29/2014/11/morning.jpg?ssl=1" alt="foto-manha">'
        }
      