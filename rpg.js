let dado = prompt("⚔️ BEM-VINDO AO MINI RPG ⚔️ \n Você foi escolhido para uma missão extremamente importante...\n Salvar o reino? ❌\n Derrotar monstros? ❌\n Ficar rico? ❌\n Na verdade, ninguém sabe o que você está fazendo aqui.\n Mas já que você chegou...\n Digite o nome do seu personagem:\n");


let personagem =  
{ 
    nome: dado, 
    espada: 5, 
    escudo: 5, 
    armadura: 5, 
} 

alert(`🔥 ${personagem.nome} entrou para a história!\n Seu equipamento não é dos melhores...\n Mas pelo menos você tem coragem.\n Ou falta de noção. 🤨\n\n🎒 INVENTÁRIO INICIAL:\n⚔️ Espada: ${personagem.espada}\n🛡️ Escudo: ${personagem.escudo}\n🦺 Armadura: ${personagem.armadura}\n🍌 Banana misteriosa: 1\n\nA banana não parece ter nenhuma utilidade...\nPor enquanto...`);

let forca; 


const contarforca = () => { 
    forca = personagem.espada + personagem.escudo + personagem.armadura; 
} 


const melhorarEquipamento = (equipamento) => { 
    personagem[equipamento] += 3 
    contarforca() 

    alert(`🔨 UPGRADE REALIZADO!\n\nSeu ${equipamento} ficou mais forte!\n\n📈 +3 de poder!\n\n💪 Sua força agora é ${forca}.\n\nAgora você está aproximadamente 17% mais perigoso.\n\n(estimativa completamente inventada)`); 

    if(forca >= 36){
        alert(`🚨 ALERTA!\n\nSua força chegou a ${forca}!\n\nVocê está ficando forte demais...\nIsso já está começando a ficar injusto. 😈`)
    }
} 


contarforca(); 


const inimigo = [ 
    { 
        nome: "goblin que esqueceu o CPF", 
        forca: 19, 
    }, 
    { 
        nome: "chupeta de baleia", 
        forca: 22, 
    }, 
    { 
        nome: "tralalelo tralala", 
        forca: 25, 
    }, 
    { 
        nome: "bob esponja endividado", 
        forca: 30, 
    }, 
    { 
        nome: "THE ROBSON", 
        forca: 36, 
    } 
         
] 


for( let i = 0; i < inimigo.length; i++){ 

    alert(`⚔️ FASE ${(i + 1)} ⚔️`); 

    if(i === inimigo.length - 1){

        alert(`🚨🚨🚨 ALERTA MÁXIMO 🚨🚨🚨\n\nVocê chegou ao inimigo final...\n\n👹 THE ROBSON.\n\nDizem que ele é professor.\nDizem que ele sabe tudo.\nDizem que ele nunca erra.\n\nMas a verdade é uma só:\n\n📚 Ele vai acabar a aula mais cedo hoje!!!.\n💀 O aluno entra na aula com esperança...\n💀 E sai com proejtos para amanhã.\n\nDizem que até o Google pede ajuda pra ele.\n\nE se você perder...\n\nNão se preocupe.\n\nEle provavelmente vai passar uma ativida extra. 😂\n\n☠️ BOA SORTE, GUERREIRO!`);
        alert(`⚔️ A BATALHA VAI COMEÇAR! ⚔️\n\nTHE ROBSON está bem na sua frente!\n\nVocê percebe que essa luta vai ser diferente...\n\nSeu equipamento está quase quebrando...\nSua esperança está acabando...\n\nMas então...\n\n🍌 Você encontra uma banana no seu inventário.\n\nVocê pensa:\n"Será?"`)

    }else{
        alert(`⚔️ Você avança e encontra ${inimigo[i].nome}.\n\nRespira fundo. É agora.`)
    }
    
    alert(`🚨 INIMIGO DETECTADO! 🚨\n\n👹 ${inimigo[i].nome}\n💪 Força: ${inimigo[i].forca}\n\nEle olha para você...\nVocê olha para ele...\nOs dois percebem que isso foi uma péssima ideia.`) 

    let venceu = false 
    while(venceu == false ){ 

        let escolha = prompt(`🎒 PREPARAÇÃO\n\n💪 Sua força: ${forca}\n👹 Força do inimigo: ${inimigo[i].forca}\n\nO que deseja fazer?\n\n1 - Lutar 😤\n2 - Melhorar a espada ⚔️\n3 - Melhorar o escudo 🛡️\n4 - Melhorar a armadura 🦺\n\nEscolha com sabedoria...\nou não.`); 

        if(escolha == 1){ 

            if(forca > inimigo[i].forca){ 
                if(i === inimigo.length - 1){
                    alert(`🍌 MOMENTO DECISIVO! 🍌\n\nA batalha contra THE ROBSON estava difícil demais!\n\nVocê estava cansado...\nEle estava cansado...\n\nEntão você tomou uma decisão completamente inesperada.\n\nVocê comeu a banana. 🍌\n\nDepois, jogou a casca no chão.\n\nTHE ROBSON avançou para dar o golpe final...\n\n👣💨 ESCORREGOU NA CASCA!\n\n💥 PAAAAAAAH!\n\nTHE ROBSON CAIU NO CHÃO!\n\n...\n\nVocê venceu.\n\nNão pela força.\nNão pela estratégia.\n\n🍌 PELA BANANA.\n\n🏆 VOCÊ DERROTOU THE ROBSON! 🏆`)
                }else{
                    alert(`🏆 VOCÊ VENCEU! 🏆\n\nO inimigo foi derrotado!\n\n😎 Você sobreviveu\n⚔️ Você bateu\n💪 Você não chorou\n\nBom... pelo menos ninguém viu.\n\nPrepare-se para a próxima fase!`) 
                }
                venceu = true  
            }else{ 
                alert(`💀 VOCÊ FOI DE BASE 💀\n\nO inimigo olhou para você e pensou:\n"É sério que mandaram ESSE?"\n\nMas calma...\nVocê ainda pode melhorar seu equipamento e tentar novamente!`); 
            }
        }else if(escolha == 2){
            melhorarEquipamento("espada") 
        }else if (escolha == 3){ 
            melhorarEquipamento("escudo") 
        }else if ( escolha == 4){ 
            melhorarEquipamento("armadura") 
        }else{  
            alert(`🚨 OPÇÃO INVÁLIDA! 🚨\n\nAté o inimigo ficou confuso.\n\nEscolha 1, 2, 3 ou 4.`); 
        }
        
    } 
    
    if( i === inimigo.length - 1 ){ 

        alert(`👑🏆 PARABÉNS, ${personagem.nome}! 🏆👑\n\nVOCÊ ZEROU O MINI RPG!\n\nVocê derrotou todos os inimigos\ne salvou o reino.\n\n⚔️ FORÇA FINAL: ${forca}\n\nSua maior arma não foi sua espada.\nSeu maior escudo não foi seu escudo.\n\nFoi uma banana. 🍌\n\nO reino jamais esquecerá seu nome.\n\nAgora pode ir dormir.\nVocê merece. 😂`) 
        alert("Obrigado por jogar! ⚔️ Até a próxima! 👋");
    } 

}