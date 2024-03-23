
let atual = 0

let numeroAluno = 1

let soma = 0

while(atual != 999){
    let idade = Number(prompt(`Digite a idade do aluno ${numeroAluno}.`))
    soma += idade
    numeroAluno++
    atual = idade
}

console.log(`Existem ${numeroAluno - 2} alunos.`)
console.log(`A média de idade do grupo é de ${(soma-999)/(numeroAluno - 2)} anos.`)