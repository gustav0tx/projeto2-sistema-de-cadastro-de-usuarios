const Usuario = require('./class/Usuario')
const prompt = require('prompt-sync')()


let usuarios = []

let adicionarUsuario = ''

do {
    let nome = prompt('Digite o nome do usuário: ')
    let idade = prompt('Digite a idade do usuário: ')
    let email = prompt('Digite o email do usuário: ')
    let usuarioAtivo = prompt('Usuário ativo? [S/N]: ')
    adicionarUsuario = prompt('Deseja adicionar outro usuário? [S/N]: ')

    let usuario = new Usuario(nome, idade, email)

    if (usuarioAtivo.toUpperCase().trim() == 'S') {
        usuario.ativo = true
    } else if (usuarioAtivo.toUpperCase().trim() == 'N') {
        usuario.ativo = false
    } else if (usuarioAtivo.toUpperCase().trim() == 'S' || usuarioAtivo.toUpperCase().trim() == 'N'){
        console.log('Dado invalido')
        break
    }

    if (adicionarUsuario.toUpperCase().trim() == 'S') {
        adicionarUsuario = 'S'
    } else if (adicionarUsuario.toUpperCase().trim() == 'N') {
        adicionarUsuario = 'N'
    } else if (adicionarUsuario.toUpperCase().trim() == 'S' || adicionarUsuario.toUpperCase().trim() == 'N'){
        console.log('Dado invalido')
        break
    }

    usuarios.push(usuario)

} while (adicionarUsuario.toUpperCase().trim() == 'S')

usuarios.forEach((el, i) => {
    el.mostrarDados()
    i == usuarios.length - 1 ? Usuario.contarUsuários() : null
})