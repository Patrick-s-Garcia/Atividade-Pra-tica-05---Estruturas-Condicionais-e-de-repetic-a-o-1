let largura = parseFloat(prompt(`Digite a largura em metros do terreno ?`))
let comprimento = parseFloat(prompt(`Digite o comprimento em metros do terreno ?`))

let metroQuadrado = largura * comprimento

if(metroQuadrado <= 100){
    console.log(`O terreno tem ${metroQuadrado}m² e é considerado um terreno popular.`)    
}
else if(metroQuadrado <= 500){
    console.log(`O terreno tem ${metroQuadrado}m² e é considerado um terreno master.`)   
}
else if(metroQuadrado > 500){
    console.log(`O terreno tem ${metroQuadrado}m² e é considerado um terreno vip.`)   
}


