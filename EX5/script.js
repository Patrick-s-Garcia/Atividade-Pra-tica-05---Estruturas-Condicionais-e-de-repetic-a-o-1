let distancia = parseFloat(prompt(`Digite a distancia da viagem em km.`))

    
if(distancia <= 200){
    distancia *= 0.50.toFixed(2)    
}
else if(distancia > 200){
    distancia *= 0.45.toFixed(2)   
}

console.log(`Sua viagem vai custar R$${distancia}.`)
