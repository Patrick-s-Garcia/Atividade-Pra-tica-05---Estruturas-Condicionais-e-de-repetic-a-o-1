let inicio = Number(prompt(`Digite o primeiro numero.`))
let fim = Number(prompt(`Digite o ultimo numero.`))
let incremento = Number(prompt(`Digite o incremento.`))

let i = inicio

console.log(`Numero inicial ${inicio}`)
console.log(`Numero final ${fim}`)
console.log(`Incremento ${incremento}`)

for(i=inicio; i<=fim; i += incremento){
    console.log(i)
}
