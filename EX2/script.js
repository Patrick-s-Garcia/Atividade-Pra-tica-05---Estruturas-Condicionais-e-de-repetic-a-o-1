
let continuar = "s"

let masculino = 0
let feminino = 0


while(continuar === "s"){
    
    let sexo = prompt(`Digite o sexo do funcionário. M - (Masculino) F - (Feminino)`).toLowerCase()
    
    if(sexo === "m"){
        let salario = Number(prompt(`Digite o salário do funcionario.`))    
        masculino += salario
    }
    else if(sexo === "f"){
        let salario = Number(prompt(`Digite o salário do funcionario.`))    
        feminino += salario
    }
    
    let decisao = prompt(`Você deseja continuar ? S - (Sim) N - (Não)`).toLowerCase()
    continuar = decisao

}

console.log(`O total pago aos homens foi de R$${masculino}.`)
console.log(`O total pago as mulheres foi de R$${feminino}.`)
