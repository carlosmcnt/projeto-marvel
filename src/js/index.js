//Pega todos os elementos com classe "personagem" e salva
const personagens = document.querySelectorAll('.personagem');

//Passa pela lista de todos os personagens
personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {

        const idSelecionado = personagem.attributes.id.value;

        if(idSelecionado === 'ultron'){
            return;
        }


        //Remove a seleção do personagem selecionado anteriormente
        const personagemSelecionado = document.querySelector('.selecionado');
        personagemSelecionado.classList.remove('selecionado');
        //Torna o personagem atual selecionado
        personagem.classList.add('selecionado');

        const imagemJogador1 = document.getElementById('personagem-jogador-1');
        //Altera a imagem para a do personagem selecionado com o mouse
        imagemJogador1.src = `./src/imagens/${idSelecionado}.png`;

        const nomeJogador1 = document.getElementById('nome-jogador-1');
        //Altera o nome para o do personagem selecionado com o mouse
        nomeJogador1.innerHTML = personagem.getAttribute('data-name');

    });
});