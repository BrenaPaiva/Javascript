// Criar um aplicativo de frases motivacionais

//Declaração da função
function createPhrases(){
    console.log('estudar é muito bom')
    console.log('paciência e persistência')
    console.log('revisão é a mãe do aprendizado')
}
//chamando a função
createPhrases()

//function anonymous
// const sum = function(name, firstname){
//         console.log(name, firstname)
// }
// sum("Brena","Freire") //arguments

// let total = 0 //let fora
// const sum = function(number1, number2){
//     let total = number1 + number2 //let dentro
//      console.log(`a soma total é ${total}`)
//     return total
// }
// let number1 = 4
// let number2 =35

// console.log(`o number1 é ${number1}`)
// console.log(`o number2 é ${number2}`)
// console.log(`a soma dos numeros é ${sum(number1, number2)}`)

//Imagine que a função seja um liquidificador
// function fazerSuco(fruta1, fruta2){
//     return 'suco de : ' + fruta1 + fruta2
// }
// const copo = fazerSuco('banana', 'maçã')

// console.log(copo)

//OUTRO EXEMPLO
// let subject 
// function createThink(){
//      subject = 'study'
//     // return subject
// }
// console.log(subject)
// createThink()
// console.log(subject)

//hoisting
sayMyName()

    function sayMyName(){
        console.log('Brena')
    }