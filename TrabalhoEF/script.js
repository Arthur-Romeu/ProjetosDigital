fetch('http://192.168.1.7:5500/TrabalhoEF/index.html')
.then(response => response.json())
.then(dados => {
    console.log('deu ruim')
    console.error(dados)
})