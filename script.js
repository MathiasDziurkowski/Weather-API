const cidade = document.getElementById('cidade')
const infoClima = document.getElementById('infoClima')
const mensagemErro = document.getElementById('erro')
const info = document.getElementById('info')

    async function buscarCidade(cidade) {
        mensagemErro.innerHTML = ""
    
        try{
            const cidadeBuscada = await fetch(`http://api.weatherapi.com/v1/current.json?key=f5e97c8084d742abb74220958231107&q=${cidade.value.split(" ").join("_")}`)
            const cidadeConvertida = await cidadeBuscada.json();
            console.log(cidadeConvertida)
            infoClima.style.visibility = 'visible'
            infoClima.style.opacity = 100;
            infoClima.innerHTML = `<p><i class="fa-solid fa-sun"></i>Temperatura: ${cidadeConvertida.current.temp_c} °C</p> 
            <p><i class="fa-solid fa-temperature-low"></i>Sensação térmica: ${cidadeConvertida.current.feelslike_c} °C</p> 
            <p><i class="fa-solid fa-droplet"></i>Umidade: ${cidadeConvertida.current.humidity}%</p> 
            <p><i class="fa-solid fa-wind"></i>Velocidade do vento: ${cidadeConvertida.current.wind_kph} kph</p>`
        }
    
        catch(err){
            console.log(err)
            mensagemErro.innerHTML = `<p>Cidade inválida! Tente novamente</p>`
            infoClima.style.visibility = 'hidden'
        }
    
    }

confirmar.addEventListener('click', function(){
    buscarCidade(cidade);
})

