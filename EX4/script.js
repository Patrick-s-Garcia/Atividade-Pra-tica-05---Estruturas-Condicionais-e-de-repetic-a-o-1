
let nome = prompt(`Digite o nome do cliente.`)
let sexo = prompt(`Digite o sexo do cliente. M - (Masculino) F - (Feminino)`).toLowerCase()
let compra = parseFloat(prompt(`Digite o valor da compra.`))

let valor = compra


    
if(sexo === "m"){
    valor *= 0.95.toFixed(2)    
}
else if(sexo === "f"){
    valor *= 0.87.toFixed(2)   
}

console.log(`${nome} sua compra foi de R$${compra}.`)
console.log(`Porem com o desconto de dia da mulher ficou R$${valor}.`)