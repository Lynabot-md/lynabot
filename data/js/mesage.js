
// ativado comandos 
export const cmdon = (command, prefix) => `*✔* O comando *${command}* foi ativado com sucesso!\n\n> Dúvidas? Use, ${prefix}info ${command}`;

// desativar comandos
export const cmdoff = (command) => `*✘* O comando *${command}* foi desativado com sucesso.`;

// mesaciome um audio
export const Mvideo = '*[ 📽 ]* você precisa mencionar um vídeo como o comando!';

// mesaciome um audio
export const Maudio = '*[ 🎵 ]* você precisa mencionar um audio como o comando!';

// megs modo brincadeira 
export const Zueira = (prefix) => `Opa! Este comando só pode ser utilizado com o modo brincadeiras ativado no grupo. Use: ${prefix}modobrincadeira`;

// Mensagens do YouTube 
export const ytb = '*[ ✖ ] Você precisa fornecer título ou um link do YouTube...*';

export const infytb = (tituloL, resultd) => `╭─˚₊·━━━━━━━━━━━━━━·₊˚─╮  
\t\t\t\t\t♤ 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃 ♤
╰─˚₊·━━━━━━━━━━━━━━·₊˚─╯\n
╭─˚₊·━━━━━━━━━━━━━━·₊˚─╮  
* 📃 𝑻𝑰𝑻𝑼𝑳𝑶: ${tituloL}
* ⏱️ 𝑻𝑬𝑴𝑷𝑶: ${resultd.timestamp} da média
* 🔎 𝑷𝑶𝑺𝑻𝑨𝑫𝑨: ${resultd.ago}
* 👀 𝑽𝑰𝑺𝑼𝑨𝑳𝑰𝒁𝑨𝑪𝑨𝑶: ${resultd.views || 'Desconhecido'}
╰─˚₊·━━━━━━━━━━━━━━·₊˚─╯`;

// meg de erros 
export const error = () => { const responses = ['🤖 Ops! Meu cérebro deu tilt, tenta de novo daqui a pouco!', '🥴 Eita, algo travou aqui! Dá mais uma chance em breve.', '💥 Poxa, deu ruim! Mas não desista, tenta outra vez.', '😅 Ai ai, buguinho à vista! Tente novamente daqui a pouco.', '🙃 Oops! Algo não saiu como o esperado… tenta de novo!', '🤭 Não deu certo dessa vez, mas logo a gente resolve!', '😜 Humm, algo estranho aconteceu… tenta mais tarde!', '😎 Relaxa, apenas um erro passageiro! Tenta de novo.', '🤔 Ué, algo falhou aqui… vamos fingir que não aconteceu e tenta depois!', '😂 Ihhh, deu tilt! Mas não se preocupe, tenta novamente logo.', '😬 Ops, bug mode ativado! Volta e tenta outra vez.', '😵 Não foi dessa vez, mas eu acredito em você, tenta de novo!', '🤯 Algo explodiu aqui… mas logo volta ao normal!', '😇 Poxa, deu erro, mas olha pelo lado bom: você pode tentar de novo!', '💫 Ai, meu sistema pirou! Dá outra chance daqui a pouco.', '🙃 Hahaha, não deu certo, mas rir é o melhor remédio! Tente novamente.', '🥳 Ops, bug festa aqui! Mas logo tudo volta ao normal.', '😶‍🌫️ Hmm, algo não encaixou… tenta outra vez.', '🤪 Eita, deu ruim! Mas não se preocupe, você consegue na próxima.', '🫣 Ufa, escapamos de um desastre… mas deu erro! Tente novamente.']; return responses[Math.floor(Math.random() * responses.length)];
};

// meg de esperar de cmd
export const espera = () => { const responses = ["Carregando a criatividade… versão beta aguarde.. 🐢", "O Wi-Fi do além tá meio lento hoje aguarde..🌌", "Um segundo… o café ainda tá passando. ☕", "Atualizando o cérebro em 3, 2, 1 aguarde..🧠", "Os dinossauros estão digitando sua resposta aguarde.. 🦖", "Processando… igual fila de banco aguarde.. 🏦",    "Os bits foram tomar água, já voltam. 🚰", "Aguarde, o estagiário tá revisando. 📋", "Segura aí, o servidor foi no banheiro. 🚽", "Sua resposta tá no forno, quase pronta! 🍞", "Conferindo no manual secreto da vida aguarde.. 📖", "O hamster da máquina cansou, já volta. 🐹", "Quase lá! Só faltam 37 atualizações aguarde.. 🔄", "Os minions estão construindo sua resposta. 👷", "A resposta caiu no chão, pegando de volta aguarde.. 🪀", "Um minuto, estou convencendo os bits. 💬", "O gato pisou no teclado, arrumando aguarde.. 🐈", "Sua resposta tá na fila do pão. 🥖", "Chamando os Vingadores da lógica aguarde.. 🦸", "Trocando a pilha do robô aguarde.. 🤖🔋", "Resposta presa no elevador, já sobe. 🛗", "Seu pedido tá sendo montado no McDrive aguarde.. 🍔", "Os planetas ainda não alinharam. aguarde.. 🪐", "Empurrando a resposta na subida. 🛞", "O ninja da informação se atrasou aguarde.. 🥷", "Tá imprimindo em impressora lenta aguarde.. 🖨️", "Carregando… igual vídeo em 2005 aguarde.. 📼", "A resposta ficou no modo soneca aguarde.. 😴", "Os servidores estão tirando selfie aguarde.. 🤳", "O controle remoto travou, reiniciando aguarde.. 📺", "Pegando Wi-Fi do vizinho para mandar seu pdido aguarde.. 📶", "Ligando pra mãe da resposta aguarde.. 📞", "Consultando os anjos da tecnologia aguarde.. 😇", "O dragão da sabedoria tá acordando. 🐉", "Os alienígenas ainda não responderam aguarde.. 👽", "A resposta foi abduzida, já volta. 🚀", "O programador foi tomar café aguarde.. ☕", "Os servidores tão jogando truco aguarde.. 🃏"]; return responses[Math.floor(Math.random() * responses.length)];
};

// meg so dono!
export const dono = () => {
  const responses = ["🚫 Ei, calma lá! Só o *chefão supremo* pode usar esse comando 😎👑", "😼 Haha... esse comando é restrito! Só o *Dono do pedaço* tem acesso 🕶️🔥", "🛑 Acesso negado! Você não é o *Dono supremo da bagunça* 😂", "🤖 Esse comando é nível *ADMIN MASTER DOS MESTRES*... e você não é ele! 😜", "🪄 Só o *Mágico supremo do bot* pode invocar esse poder ✨ (spoiler: não é você 😂)", "🙅‍♂️ Ops! Esse comando é exclusivo do *chefão da firma* 🧠💼", "😏 Hehehe... tá achando que é o dono? Esse aqui é comando *só pra lendas!* 👑", "👀 Oxi... quer usar comando de dono? Então vira o dono primeiro 😂🔑", "💂‍♂️ Acesso negado! Esse comando está guardado pelo *Exército dos Bots Leais* 🪖🤖", "🧙‍♂️ Você tentou conjurar um feitiço proibido! Só o *Mago Supremo do grupo* pode! ✨📜", "🕵️‍♂️ Detetive curioso detectado... mas sem autorização do *chefe da operação*! 🕶️", "💀 Acesso negado. Tente novamente quando for o *Deus dos Bots* 😂⚡", "🥸 Haha! Só o *patrão premium edition* pode usar isso 🤣💼", "📛 Código vermelho! Invasor tentando usar comando de dono! 🚨😂", "🧤 Esse comando tá mais protegido que a senha do Wi-Fi do vizinho 🔐", "🧩 Parece que você esqueceu o item: *Permissão de Dono +1000* 🪄😂", "🦸‍♂️ Esse poder é nível super-herói... e você ainda tá de estagiário 😜", "🤪 Hehe, quase! Falta só virar o dono pra usar isso 🗝️👑", "🧨 A tentativa foi boa, mas o comando te explodiu 💥 (brincadeira... ou não 😏)", "🧸 Hmmm... tão fofinho tentando usar comando de dono 🥺✨", "🛡️ Proteção ativada: bloqueando curiosos sem permissão de chefia! 🧱😎", "🎩 Abra kadabra... nada aconteceu! Porque você não é o dono 😂", "🚔 Polícia dos comandos: você está preso por tentar usar poder alheio! 👮‍♂️🤣", "🧃 Tome seu suquinho e relaxa... esse comando é do *chefão*, não seu 🍹😅", "👾 Sistema diz: 'Erro 404 — permissão de dono não encontrada' 🤖⚠️","🥷 Ninja do bot detectou invasor... *Sumindo na fumaça* 💨😂","🐧 Tente novamente quando for o *Pinguim Supremo do Sistema* 🐧👑","🛸 Acesso alienígena negado! Esse comando é só pra o comandante 👽🚫","🧊 Calma Frozen! Esse comando tá congelado pro seu nível ❄️🤣","🐢 Devagar aí, Ninja das Permissões! Esse comando é do *Sensei do bot* 🥋","🦜 Repete comigo: 'Eu não sou o dono' 🦜 Boa! Agora vai tomar um suquinho 🍹","🪅 Parabéns! Você desbloqueou... nada! Porque não é o dono 🎉🤣","🎲 Rolou o dado da sorte... caiu em *sem permissão* 🎯😂","🪖 Ordem do general: só o dono executa isso, soldado! 🫡","🧜‍♀️ Esse comando é subaquático... só o *Rei Netuno* do bot pode usar 🐠👑","🛑 Erro crítico: usuário tentando ser o dono! Sistema rindo fortemente 😂","🕸️ Enroscou na teia dos comandos proibidos 🕷️💢","📞 O dono ligou: mandou avisar que não é pra mexer aqui ☎️😂","💅 Calma influencer, esse comando não é pra você ainda 💄🤣"]; return responses[Math.floor(Math.random() * responses.length)];
};

// meg bot sem admin
export const semAdm = () => { const responses = ["🚫 Calma, calmou! Só o *ADM supremo da galáxia* pode usar esse comando 😎🪐", "🧠 Tentou usar comando de ADM sem ser ADM... genial! (só que não) 😂", "👮‍♂️ A polícia dos grupos te parou: sem crachá de ADM, sem poder! 🚓🤣", "🪄 Esse comando precisa de *permissão mágica de ADM*, e você tá sem a varinha 😜✨", "🛑 Erro 401: Permissão de ADM não encontrada 💾😅", "🤖 O sistema diz: 'você não tem o cargo necessário, mero mortal' 😏", "👑 Só reis e rainhas (ADM) usam esse comando, plebeu 😂", "🧙‍♂️ Esse poder é só pro mago ADM do grupo! 🪄 Abra cadabra... nada aconteceu 😆", "🦸‍♂️ Sem capa, sem poderes, sem ADM 🦸‍♀️💢", "💂‍♂️ Acesso negado, soldado! Só o capitão ADM comanda aqui 🪖", "📛 Bloqueio ativado! Você não é ADM, mas é engraçado tentar 😂", "🦆 Quack! Tentando ser ADM, hein? Patolino detectado 🦆🤣", "🐢 Devagar aí, guerreiro! Esse comando é só pros ADM ninja 🥷", "⚡ Você tentou usar o comando... e o bot respondeu: 'HAHA NÃO' 😂⚡", "🧃 Tome seu suquinho e aceita: você não é ADM 🍹🤣", "🧠 Inteligência detectada... mas não o cargo de ADM 🤓", "🚷 Entrada restrita! Área exclusiva de *ADM master* 😎🔒", "👀 Tá se achando o dono do grupo? Pois não é! 🤭", "🪅 Tcharam! Nada aconteceu porque você não é ADM 🎉🤣", "💀 Comando falhou! Motivo: usuário sem poderes administrativos 💢", "🎭 Tentando se passar por ADM? Boa atuação, mas sem efeito 😏", "🕵️‍♂️ O bot viu tudo... e sabe que você não é ADM 😎", "🐍 Sss... comando proibido pra não-ADM 🐍💥", "🚔 Alerta! Tentativa de comando não autorizada! 👮‍♂️", "🤪 O bot riu da sua tentativa de parecer ADM 😂", "🧞‍♂️ Desejo negado: precisa ser ADM pra usar isso 🪄", "🧊 Frio aí? Deve ser o gelo do comando bloqueado ❄️🤣", "🧤 Permissão insuficiente! Volte quando tiver o cargo de ADM 💼", "🎮 Cheat bloqueado! Esse comando é nível *ADM PRO* 🎮", "👾 Sistema diz: 'nice try, mas não é ADM' 🤖", "🧃 Quer usar comando de ADM? Vira um primeiro 😂🍹", "📵 Sem sinal... o bot não reconhece seu chip de ADM 📡🤣", "🪖 Ordem do comandante: sem crachá, sem permissão, soldado! 🫡", "🧙‍♀️ O feitiço falhou! Falta *poder de ADM* 🔮", "🎈 Balão de esperança estourado! Você não é ADM 🎈💥", "🐧 Tentando voar alto? Esse comando é só pro pinguim ADM 🐧👑", "🎤 O bot anuncia: 'esse usuário não é ADM!' 🎶🤣", "🕸️ Preso na teia dos comandos restritos 🕷️", "🦴 Ossos e nada mais... sem cargo de ADM 🦴😂", "🎲 Jogou o dado... caiu em *sem permissão* 🎯", "💅 Esse comando é chique demais pra simples membros 💄✨", "🎃 Boo! Esse comando assombra quem não é ADM 👻", "🪩 Acesso VIP negado — precisa de pulseira ADM 💫", "🧹 Tentou varrer o grupo sem ser ADM? Vassoura falhou 🧹🤣", "🦖 Rugido de ADM detectado... mas não veio de você 🦕😂", "🛸 OVNI detectou tentativa ilegal de comando 👽", "👓 Permissão negada. Tente novamente após promoção pra ADM 🤓", "📞 O ADM real ligou: mandou avisar que não é pra mexer nisso ☎️", "🐍 Permissão rastejante detectada... não é ADM! 🐍🤣", "🧜‍♀️ Comando submerso — só ADM usa debaixo d’água 🐠👑", "💬 Spoiler: o ADM consegue usar esse comando. Você não 😂", "🧩 Tentando burlar o sistema? O bot te viu 👁️‍🗨️", "🪅 Parabéns! Você desbloqueou... nada 😆", "🪄 Puf! Seu comando sumiu. ADM não encontrado 🧙‍♂️", "🎩 O poder do ADM é forte... mas o seu Wi-Fi não ajuda 😂", "🧛‍♂️ Sugando permissão de ADM... falha crítica! 🧛‍♀️⚡", "🧞‍♀️ O gênio disse: 'não, você não é ADM!' 🧞‍♂️", "🦜 Repete comigo: 'eu não sou ADM' 🦜 Boa! Agora relaxa 😂", "🚨 Código vermelho! Tentativa de membro usar comando de ADM 🚨🤣", "🎢 Subindo... opa, caiu! Sem cargo de ADM, sem emoção 🎡😂", "🦄 Esse comando é mágico demais pra simples mortais 🌈🦄", "👻 O espírito do grupo te observou... e riu 😜", "🧠 Falta cérebro de ADM pra isso 🧠🤣", "🎯 Mira boa, mas sem autorização pra atirar 🎯😂", "🧤 Proteção ativada! ADM falso bloqueado 🧱", "🧃 Vai com calma, aprendiz! Esse comando é pra mestres ADM 🍹😎", "🕹️ Você tentou apertar o botão de poder... mas o bot desconectou 😂", "🐠 Nadando no mar das restrições 🐟💢", "🎭 Ator bom, mas o papel de ADM já tá ocupado 😏", "🧞‍♂️ Gênio confuso: 'quem é você?' — 'um não-ADM!' 😆", "🐍 Cuidado! O comando pode te picar, curioso 🐍💥", "👑 Cargo insuficiente para tanta moral 😂", "🧃 Respira... aceita... e espera ser promovido 🍹😎", "🪄 Seu comando foi transformado em *nada mágico* ✨", "🦸‍♀️ ADM invisível? Porque o sistema não te viu 😜", "🎤 O bot anuncia: 'usuário sem poder detectado!' 🎤🤣", "🚫 Comando barrado pelo firewall da chefia 💻🔥", "🪅 Você foi promovido... na sua imaginação 🎉🤣", "🦥 Lentamente percebendo que não é ADM 🦥💤", "🎮 Game over, jogador sem permissão 🎮😂", "🐒 Curioso demais, hein? ADM só com crachá oficial 🪪", "🧊 Bloqueado no gelo eterno dos não-ADM ❄️🤣", "🧞‍♀️ Pedido negado! Tente outra vida 🧿", "🪩 Bot diz: 'não, não e não!' 💫😂", "🐍 Sistema anti-curioso ativado! ⚡🐍", "🧱 Pare! Esse muro é pra quem não é ADM 🚧", "🎁 Presente surpresa: uma bela mensagem de erro 🎁🤣", "🐧 Tentou subir na hierarquia e escorregou 🐧😂", "🎉 Parabéns! Você acaba de descobrir que não é ADM 🥳", "👽 O bot alienígena riu da sua tentativa 👾😂", "🧃 Eita, quase! Falta só o crachá ADM pra usar 🍹"]; return responses[Math.floor(Math.random() * responses.length)];
};

// meg bot precisa se adm
export const botAdm = () => { const responses = [ "🚫 Ops! Eu preciso ser ADM pra fazer isso 😅🔑", "🛑 Sem ADM pra mim, sem ação pra você! 😂", "🤖 Eita! Só consigo executar se eu for ADM 😎", "⚠️ Alerta: Eu não sou ADM ainda! Me dá o poder! 🪄", "🪄 Magia falhou... porque o bot não é ADM ✨😂", "👀 Olha só... o comando precisa que eu seja ADM, e eu não sou 😏", "💂‍♂️ Sem minha farda de ADM, não dá pra mexer nisso 🪖", "🧠 Sistema diz: 'bot sem ADM = comando impossível' 🤯", "🧃 Me dá um suquinho de ADM e eu faço 🍹😂", "🦸‍♂️ Sem minha capa de ADM, não posso usar superpoderes 😜", "🛡️ Proteção ativada! Só ADM pode liberar o bot 🛡️", "🎮 Game Over: comando bloqueado porque eu não sou ADM 🎮😅", "📛 Sem crachá de ADM, eu só posso olhar 😏", "🦄 Magia bloqueada: eu não sou ADM 🌈🦄", "🎩 Tentei, mas sem ADM, meu chapéu de mágico não funciona 🪄😂", "🐧 Quero voar nesse comando, mas preciso ser ADM 🐧❄️", "💣 Boom! Comando explodiu porque eu não sou ADM 💥", "🕵️‍♂️ Detetive bot aqui... mas sem ADM, nada posso fazer 🕵️‍♂️", "🧞‍♂️ Gênio bot precisa de ADM para conceder desejos 🪄😆", "🦸‍♀️ Sem minha capa de ADM, só consigo observar 😎", "🚔 Polícia dos bots diz: sem ADM, sem execução 🚨😂", "🧊 Comando congelado! Eu não sou ADM ❄️", "🦖 Rugido travado! Bot precisa ser ADM 🦕🤣", "🪖 Soldado bot aqui, mas sem ADM, não posso agir 🫡", "🧙‍♂️ Feitiço falhou: falta ADM no bot 🧙‍♀️✨", "🎭 Tentando executar comando, mas meu papel de ADM está vazio 🎭😂", "🧩 Peça faltando: ADM no bot 🧩😅", "🦜 Bot querendo falar, mas precisa ser ADM 🦜", "🎤 Tentativa de cantar comando falhou: eu não sou ADM 🎶🤣", "🧃 Sem meu suquinho de ADM, não posso fazer nada 🍹😂", "🕹️ Bot apertou o botão errado: sem ADM ❌", "🐍 Sss... comando proibido sem ADM 🐍⚡", "👓 Sem meus óculos de ADM, não vejo o comando 👓😏", "📞 Ligação pra chefia: preciso ser ADM pra isso ☎️😂", "🧵 Fio solto: bot não é ADM, comando travado 🕸️", "🦴 Ossos e nada... sem ADM não dá 🦴😅", "🎲 Joguei o dado: caiu em 'sem ADM' 🎯🤣", "💅 Sem meu glamour de ADM, nada acontece 💄✨", "🎃 Boo! Comando assombrado porque não sou ADM 👻", "🪅 Surpresa! Nada aconteceu, bot precisa ser ADM 🎉😂", "🧹 Tentei varrer, mas sem ADM, só bagunça 🧹😆", "🛸 OVNI detectou: comando falhou, bot não é ADM 👽", "🎢 Subida impossível: sem ADM não rola 🎡🤣", "🧞‍♀️ Desejo negado: bot precisa de ADM 🧞‍♂️", "🦥 Lentamente percebendo que sem ADM não dá 🦥💤", "🎮 Game over: bot sem ADM 🎮😂", "🐒 Curioso bot aqui... sem ADM, sem ação 🐵", "🧊 Comando congelado, bot sem ADM ❄️🤣", "🪄 Transformei em nada porque não sou ADM ✨", "🦸‍♂️ ADM invisível: sem capa, sem ação 😜", "🎤 O bot anuncia: 'sem ADM, nada feito!' 🎤🤣", "🚫 Comando barrado pelo firewall: bot precisa de ADM 🔥", "🦄 Magia interrompida: bot sem ADM 🌈", "🧙‍♀️ Feitiço impossível, falta ADM 🪄😂", "🧃 Suquinho de ADM necessário para prosseguir 🍹🤣", "🦖 Tentei rugir, mas sem ADM não sai 🦕", "🎩 Chapéu de mágico vazio, sem ADM 🪄", "🐧 Voo interrompido: preciso ser ADM 🐧❄️", "💣 Comando explodiu na minha cara: sem ADM 💥", "🕵️‍♂️ Detetive bot impotente: sem ADM 🕵️‍♂️😂", "🧞‍♂️ Gênio travado: falta ADM 🪄", "🦸‍♀️ Sem capa ADM, nada posso fazer 😎", "🚔 Polícia bot: sem ADM, comando negado 🚨😂"];
return responses[Math.floor(Math.random() * responses.length)];
};

// meg so funciona em grupos
export const apenasGrupo = () => {
  const responses = [ "🚫 Ops! Esse comando só funciona em grupo 😅👥", "🛑 Ei, sozinho não dá... só em grupo mesmo 😂", "🤖 Comando bloqueado: precisa ter companhia 😏", "⚠️ Alerta: comando exclusivo para grupos! 🪄", "👀 Sozinho não rola, chama a galera 😎", "🪄 Magia falhou... precisa ter um grupo junto ✨😂", "💂‍♂️ Sem grupo, não dá pra executar 🪖", "🧠 Sistema diz: 'usuário solitário detectado' 🤯", "🧃 Tome seu suquinho e junte os amigos 🍹😂", "🦸‍♂️ Esse poder é coletivo... sozinho não dá 😜", "🛡️ Proteção ativada! Comando só pra grupo 🛡️", "🎮 Game Over: comando bloqueado fora do grupo 🎮😅", "📛 Sem grupo, só posso olhar 😏", "🦄 Magia bloqueada: precisa de galera 🌈🦄", "🎩 Tentei, mas sozinho não funciona 🪄😂", "🐧 Quero voar nesse comando, mas preciso de companhia 🐧❄️", "💣 Boom! Comando explodiu porque não tem grupo 💥", "🕵️‍♂️ Detetive bot aqui... mas sem grupo, nada posso fazer 🕵️‍♂️", "🧞‍♂️ Gênio bot precisa de grupo para conceder desejos 🪄😆", "🦸‍♀️ Sozinho não dá, só posso observar 😎", "🚔 Polícia dos bots diz: só em grupo 🚨😂", "🧊 Comando congelado! Fora do grupo ❄️", "🦖 Rugido travado! Preciso de grupo 🦕🤣", "🪖 Soldado bot aqui, mas sem grupo, não posso agir 🫡", "🧙‍♂️ Feitiço falhou: falta grupo 🧙‍♀️✨", "🎭 Tentando executar comando, mas sem grupo 🎭😂", "🧩 Peça faltando: grupo 🧩😅", "🦜 Bot querendo falar, mas precisa de grupo 🦜", "🎤 Tentativa de cantar comando falhou: fora do grupo 🎶🤣", "🧃 Sem meu suquinho de grupo, não posso fazer nada 🍹😂", "🕹️ Bot apertou o botão errado: fora do grupo ❌", "🐍 Sss... comando proibido sem grupo 🐍⚡", "👓 Sem meus óculos de grupo, não vejo o comando 👓😏", "📞 Ligação pra chefia: precisa de grupo ☎️😂", "🧵 Fio solto: comando bloqueado fora do grupo 🕸️", "🦴 Ossos e nada... sem grupo não dá 🦴😅", "🎲 Joguei o dado: caiu em 'fora do grupo' 🎯🤣", "💅 Sem meu glamour de grupo, nada acontece 💄✨", "🎃 Boo! Comando assombrado fora do grupo 👻", "🪅 Surpresa! Nada aconteceu, precisa de grupo 🎉😂", "🧹 Tentei varrer, mas sozinho, só bagunça 🧹😆", "🛸 OVNI detectou: comando falhou, fora do grupo 👽", "🎢 Subida impossível: sem grupo não rola 🎡🤣", "🧞‍♀️ Desejo negado: precisa de grupo 🧞‍♂️", "🦥 Lentamente percebendo que sem grupo não dá 🦥💤", "🎮 Game over: fora do grupo 🎮😂", "🐒 Curioso bot aqui... sem grupo, sem ação 🐵", "🧊 Comando congelado, fora do grupo ❄️🤣", "🪄 Transformei em nada porque não tem grupo ✨", "🦸‍♂️ Grupo invisível: sozinho nada posso fazer 😜", "🎤 O bot anuncia: 'fora do grupo, nada feito!' 🎤🤣", "🚫 Comando barrado pelo firewall: precisa de grupo 🔥", "🦄 Magia interrompida: bot precisa de galera 🌈", "🧙‍♀️ Feitiço impossível, fora do grupo 🪄😂", "🧃 Suquinho de grupo necessário para prosseguir 🍹🤣", "🦖 Tentei rugir, mas sem grupo não sai 🦕", "🎩 Chapéu de mágico vazio, fora do grupo 🪄", "🐧 Voo interrompido: preciso de grupo 🐧❄️", "💣 Comando explodiu na minha cara: sem grupo 💥", "🕵️‍♂️ Detetive bot impotente: fora do grupo 🕵️‍♂️😂", "🧞‍♂️ Gênio travado: falta galera 🪄", "🦸‍♀️ Sem companhia, nada posso fazer 😎", "🚔 Polícia bot: fora do grupo, comando negado 🚨😂"]; return responses[Math.floor(Math.random() * responses.length)];
};

// megs de ban
export const bankk = (usuario) => { const responses = [ `💥 Membro ${usuario} foi chutado com sucesso! Até mais!`, `🚀 Adeus, ${usuario}! Saída oficial registrada!`, `🧹 ${usuario} foi removido… varrido para fora do grupo!`, `😎 Tchauzinho, ${usuario}! O grupo agradece pela… contribuição!`, `🥂 ${usuario} foi retirado com estilo! Cheers!`, `⚡ ${usuario} não resistiu e foi eliminado do grupo!`, `😏 Ops! ${usuario} removido… que a força esteja com ele!`, `🫣 ${usuario} saiu do grupo, não que a gente estivesse contando os segundos…`, `🔥 ${usuario} foi expulso! Próximo, por favor!`, `😜 Bye bye, ${usuario}! Grupo limpo e cheiroso de novo!`]; return responses[Math.floor(Math.random() * responses.length)]
};

// tabela 
export const tabelA = (nomebot) => `𝐓𝐀𝐁𝐄𝐋𝐀 𝐁𝐘: ${nomebot} 

𝐓𝐀𝐁𝐄𝐋𝐀 𝐃𝐄 𝐋𝐄𝐓𝐑𝐀𝐒 🌀
𝛢 𝛥 𝛬  𝜜 𝜟 𝜵 𝐴 𝐀 𝑨 𝙰 卂 么 入 刄 公
B 𝛣 𝚩 𝜝 𝐵 ℬ 𝓑 𝕭 乃 岌 多仍 
C 𝐂 𝑪 𝐶 𝓒  𝕮 匚 ር ℂ
D𝐃   𝑫 𝐷 𝓓 ᗪ 𝕯 
E 玄 𝐄 𝑬 𝐸 𝚬 𝚵 𝛴 𝛯 𝜮 𝜩 ℰ 乇 ꏂ 
F 𝐅 𝑭 𝐹 ℱ 𝕱 𝔉 千 
G 𝐆 𝑮 𝐺 Ꮹ                     
H 𝐇 𝑯 𝐻 ℋ ℌ 卄 ꫝ ዘ   
I 𝙸 𝕚 𝐈 𝑰 𝐼 𝔦 𝓲 | ቾ
J 𝔍 𝐉 𝑱 𝐽 𝒥  𝓳       
K 𝐊 𝑲 𝐾 𝚱 𝛫 𝜥 𝒦 
L 𝐋 𝑳 𝐿 ℒ 𝕷 ꪶ ㄥ廴
M 𝐌 𝑴 𝑀 ℳ ᗰ 𝕸 𝔐 ꪑ 爪 𝛭
N 𝐍 𝑵 𝑁 𝓝 ꪀ 𝚴 𝚴 ᜰ ꤾ ꡃ
O 𝐎 𝑶 𝑂𝒪 ꪮ ㄖ 𝚯 𝚶 𝛳 𝛩 𝛷 ❍ 〄
P 𝐏 𝑷 𝑃 𝙿 ℙ 𝕻 𝔓卩 𝛲 𝜬
Q 𝐐 𝑸 𝑄 𝕼 Ҩ
R  𝐑 𝑹 𝑅 ℛ ℜ 𝕽 尺     
S 𝐒 𝑺 𝑆 丂 令
T  𝑻 𝑇 ㄒፕ 𝚻 𝛵 亇
U 𝐔 𝑼 𝑈𝒰  ᑌ 𝔘 𝖀 ꪊ ㄩび
V  𝑽 𝑉 𝒱  ꪜ 𝛶 𝜰
W 𝐖 𝑾 𝑊 ᗯ ᭙ 山 ሠ 𝜔 Ꮤ ꪡ ꪝ ꤿ
X 𝕏 𝐗 𝑿 𝑋 𝒳  ᥊ 乂 ꉧ 𝛸 𝜲 ꪎ
Y 𝐘 𝕐 𝒀 𝑌 ꪗ ㄚ ሃ 𝜳 

INÍCIOS🌀
ৡৢ͜͡   ঔৣ͜͡   ᬊ͜͡    ೈ፝͜͡   ꯴᩠ꦽꦼ  ░⃟⃛ ➮ ⏤͟͟͞͞ 

FIM PARA NICK🌀
݈݇─  ͜〉⛧ ᭄ ⸸ ᭄ 𖤐⁩᭄ꦿ ᬏ᭄ ⛤⃗͜ᬏ᭄   

𝐒𝐈𝐌𝐁𝐎𝐋𝐎𝐒 🌀
     ⃟        ⃤     ⃝      ᬽ ۝ ⛧ ᪤ ⸸ ᬛ ᭆ ᭩ །  ᬽ
     ⃢        ⚚ ♕ ♔ ⛥ ᭟  ֎ ◌ ⚝ ⅌ 𝆮 ۞ ༒ ༆ ༅ ༄ ༃ ༀ ༁ ༺ ༻ ࿐ ࿘ ࿕ ࿖ ࿗ ࿔ ࿓ ࿒ ࿑ ࿋ ࿉ ࿄  ࿅࿆  ░ ▒ ▓  ◍   ▸ ▹ ▿ ▾ ▵ ▴ ◊ ◔ ◕ ◖ ◗☙  ☥ ☤  ☻ ☼ ☽ ☾ ☿  ♁ ♃ ♘ ♡ ♞ ♱ ♰  ⚶ ✢ ✤  ✔ ✕ ✗ ✘ ✰ ❀ ❁ ❃ ✻  ✵ ✯ ✭ ✧ ✦ ❍ ❐ ❑  ❒  ❏ ⸙ ⸎ ꧁ ꧂ シ ツ ﭢ ღ ✞ ✟ ༈ ✄ ⊱ ⊰  இ ༎ 🝐 🝳 🝲 🜊 🜋 🜌 🜏 🜎 🜘 🜚 🜛 🜜 🜥 🜞 🜟 🜢 ᭁ 𝀶  ᬽ ᭪ ᭦ ᭝ ᭕ ᭘ ᬊ ᬉ ᬏ  ᬇ ᬠ ᬨ  ᭄ ❦ ⦚ ⧛ ⧚ ⿰ ⿱ ⿴ ⿻ 〄 々〆 〃 〮     ҈      ҉   ೠ ಝ ಋ ಊ ౾ ౠ ෴ ๛ ༗ ༖ ༕ 卐 ㌌   ͢   𝁮 𝀑 

𝐈𝐍𝐈𝐂𝐈𝐎𝐒 𝐏𝐀𝐑𝐀 𝐍𝐈𝐂𝐊 🌀 

ᬊ͜͡   ঔৣ͜͡   ⏤͟͟͞͞🌻  𖥨֗  ೈ፝͜͡    🌾⃟ꦿ⸼  ✧͜͡҉    ঔৣ͜͡➳ ꧁͜͡    ৎ❥̤֟٭ۣۜ   ৡৢ͜͡    ঔৣ͜͡҉❅ۣ̤ۜ   ⿻ꦿꦂ  ❥ꦿꯧָ   ᭥ꩌ゚໋ ꯴᩠ꦽꦼ   ᭺ᮀฺ۪۟𖡎’￫ ࿂ꦿ๋͚ꪳ↛ ꪶ⚘࿆ꦿི ݈݇   ᥀·࣭࣪̇˖ ᠂࣭. ⃝༘⃕🍒 ✧༷ꦿ݈۟⸼͓۬࣪ꪶ  ནཹꦿ  ❀࿆⃧፝྅⃕ꦿ   ွဳ⃟ꦿ   
🌹፝⃟༘┼ ᜴⃕  ░⃟⃛ ➮ ⿻͜͡   ꪶཷ୭͓ꦿ݉ᐧᨗ  ✞⃟❐͜͡ 

𝐒𝐈𝐌𝐁𝐎𝐋𝐎𝐒 𝐄𝐒𝐓𝐑𝐀𝐍𝐇𝐎𝐒 🌀
𒁂𒀽𒁖𒁯𒁮𒂄𒂷𒇲𒈝𒈞𒈟𒈩𒉂𒉁𒈑𒈒𒉫𒉜𒉴𒉰𒊊𒊋𒊓𒊫𒊺𒊻𒊼𒊽𒋦𒋨𒌄𒌃𒌅𒌜𒌢𒌵𒍥𒍤𒍣𒍓𒍟𒐦𒐪𒑓𒊹𒇫𒇋𒆖𒆕𒄬 

𝐒𝐈𝐌𝐁𝐎𝐋𝐎𝐒 𝐄𝐆𝐈𝐏𝐂𝐈𝐎𝐒 🌀
𓁹𓁺𓁻𓁼𓁽𓁾𓁿𓂔𓂓𓂛𓂜𓂞𓂠𓂢𓂣𓂤𓁵𓁴𓁤𓁜𓁳𓁣𓁪𓁢𓁱𓁡𓁑𓁊𓁍𓁎𓁌𓂓𓂑𓃚𓃙𓃚𓃛𓃜𓃝𓃟𓃟𓃨𓃪𓃬𓃭𓃸𓃶𓃾𓅉𓅂𓅄𓅆𓅙𓅓𓅌𓅖𓅗𓅢𓅱𓅪𓅭𓅮𓆈𓆂𓆅𓆔𓆖𓆖𓆠𓆛𓆜𓆞𓆞𓆣𓆤𓆦𓆟𓆺𓆳𓆵𓆶𓇈𓇓𓇒𓇥𓇣𓇭𓉡𓉢𓉦𓉦𓉸𓉻𓉔𓊢𓊞𓊭𓋐𓋖𓋸𓌆𓌱𓌺𓍙𓍢𓏱𓏲𓏵𓏠𓏤𓏑𓏎𓂸 

𝐃𝐄𝐂𝐎𝐑𝐀𝐂𝐎𝐄𝐒 🌀
❒᭄꥓〭🌹 ᠂࣭. ⃝༘⃕🍒 ⸵░⃟🌻𖥨ํ∘̥⃟⸽⃟🌹 ｡˚༷🌸｡˚༷￫ 🌙ꪾ〬ꩌ۪٬ླྀ  ❑ꦽꦷ🌻⏤͟͟͞͞🍹⁖ฺ۟̇࣪·֗٬̤⃟🌸 

𝐒𝐈𝐌𝐁𝐎𝐋𝐎𝐒  𝐂𝐇𝐈𝐍𝐄𝐒𝐄𝐒🌀
㌀ ㌁ ㌂ ㌄ ㌇ ㌚ ㍃ ㍈ ㍖ ㌭ ㌡ ㌠ ㌙ ボ テ ス ツ ガ カ オ ぼ ⽔ ⽃ ⼪ ⼢ ⼒ ⻰ ㋒ ㋚ ㋔ ㋛ ㋘ ㋠ ㋡㐌 㐈 㐲 㐳 㑂 㑄 㐱 㒊 㑱 㓛 㓘 㓗 㓆㕣 㕚 㕛 㘪 㘦 㘶 㠫 㡍 㡴 㡲 㡰 㡱 㣊 㣍 㣻 丈 丕 

Outros símbolos🌀
ϟ ↯ ⛧ ⸸  ♞  ♘  ࿗  ࿕  ⛥  ツ  シ  ♰  ♱  卐 ✟  ✞ 

Símbolos pra colocar no meio do nick🌀
    ⃢          ⃤   ⃟       ⃝     - SETAS -    ͢         ⃮          ⃖       ⃯         ͍ ↠ ↡ ↢ ↚ ↛ ↜ ↝ ↞ ↟ ↣↤↥↦↧↰↱↲↳↴↵↶↷↸↹↺↻↼↽↾↿⇀⇁⇂⇃⇄⇅⇆⇇⇈⇉⇊⇋⇌⇍⇎⇏⇐⇑⇒⇓⇔⇖⇕⇗⇘⇙⇚⇛⇜⇝⇞⇟⇠⇡⇢⇣⇤⇥⇦⇧⇨⇩⇪⇫⇬⇭⇮⇯⇰⇱⇲⇳⇴⇵⇶⇷⇸⇹⇺⇻⇼⇽⇾⇿ 

COISAS PRA BOTAR NO INÍCIO E FIM DO NOME
〈〉  《》 「」『』【】〔〕〖〗〘〙〚〛⟬⟭ ⟦⟧ ⟨⟩ ⟪⟫ ⟮⟯ 

NÚMEROS🌀
➊ ➋ ➌ ➍ ➎ ➏ ➐ ➑ ➒ ⓿
𝟏 𝟐 𝟑 𝟒 𝟓 𝟔 𝟕 𝟖 𝟗 𝟎 

ᱹ▻      ҂͓꣣۫۫🍉۫ꢁ     ᯢ❁⃪ ◗     ░⃟⃛🍎༘݊➮ 

꒰১°᳝ꯥ‧ٓ➭    ꒰ෑ᪲꒱     ░ෆෑ    ❒᭄꥓〭🍌   ᠂⸱ེ̀.𖧷 

  ᩠░⃟⃜🍏ꪳ۫₎۬۟〬      ᭥ꩌ゚໋ ꯴̸᩠🍩⭛      ❀࿆⃧፝྅⃕ꦿ      〭〭〬〬⿻❥〬〬〬ꦿ[ 

  ᩠ ꣣ʹ͚🍣     𖦹҉ २꫶   ╰៚݈݇      ⸵░⃟🐛̸꙰     ᱸᱹ𖠳𖣻 

᭥ꩌ゚໋ ꯴᩠ꦽꦼ💌↦     ꔛ⃟⿻⃕⸵ࣻ꒰🍉꒱   ❨᯽ᨘ‛᩠⋆ꣻ     𖨮𖡎｡ 

㇀🐿 ۬.͜˖-    ⸾〬۝ꦿ҂⃨     ཷ꒱⸼   🌙ꪾ〬ꩌ۪٬ླྀ   ▩݅͜𖨌•.̇ 

᭥ꩌ゚໋ ꯴̸᩠🍩⭛      '꩖࿆͜͡𖡜•↣    ∎🚀    ࿂ꦿ๋͚ꪳ↛ 

  ᠌᠍᠍᠌᠎᠋᠎᠎ᤧᱸᱹ༊↯🍄       ᠌᠍᠍᠌᠎᠋᠎᠎ᤧᱸᱹ༊⇝     ꔷ㆒⸼݇҉ֻ᠂⃟🍉    ╰꫶ ࿉۟࣪࣪᭝ 

ꔛ⃟⿻ྀ⃕🍒           ⃝༘⃕🍒´݈       ᠂࣭.   ⃝༘⃕🍒↳    🎐·۪۫ˑ݈↷ 

᥀───🍰ٜᩦ୭     ꒰───🍰·ٜ۬･     🎡⿻ꦿꪳ։ 

🍩ꪶཷ୭͓ꦿ݉ᐧᨗ      ✧༷ꦿ݈۟⸼͓۬࣪ꪶ🌹     🍧.ᩦ୭✧ࣶᭂ     𖠵꩜⭟ 

╶ 🦔 ❪❥ꦿꯧָ❫      •.̇𖥨֗🍓⭟       ๋𖡜 ݈݈-݇     ─ ࿊⃨१ 

❥.ᨘ۫.ꪶ         .ᨘ۫.ꪶ🍧 ۪→      ᭥⃕꙰҉ ◍̤￫ 🌹࣭࣭◗   ❪🍑ꦿེ≭•۟.❫      ❪🛸ꦿꯧ⸼❫    𖣠ᮬ·̣̇꧈    ꪶ⚘࿆ꦿི ݈݇- 

𖧹⸻𖠚ꪴ۟〬  ╶ 🦔 ❪❥ꦿꯧָ❫      ❪̣࣭̇࣪·ฺ۪۟𖡎｡     𖣠ᮬ·̣̇͜᭺ 

⁖ฺ۟̇࣪·֗٬̤⃟🌻        ░░۟⃟🌻༘⸻       ·᳝∴̣࣭🌻·᳝∴̣࣭ 

⸻⿻ꦿꯧ๛    •.̇𖠵⃯🍧    ‡𖧱১   ᥀·࣭࣪̇˖💌◗ 

❪°·ꯥ̣ꩍ🍉↣    ๛ᤢ᪴🍑↯     ꪖ⚘⃯     𖠵⃕⁖      ❑ꦽꦷ꧈ 

────🛸°·ꯥ̣ꩍ    ─────̥˚᳝᳝𖥻🍧̇⸱ 

ꓻ┼       ꦽꦽꦼ➮     ꦽꦽꦶ꧈     ຊ✏     ❀ꦿ꩟ 

───𖡜̸｡᭭        ꫶─────୬۟◍⭟      ꨴ◍⸱￫ 

▩⃕͜ꦿ૰￫     ‡ᮀ১🌹；    ᭥ꙮ•̇‡ꪳ͢⠂ᨗ    🍓ꦽ᪱ꩍ 

᳝'꩖͜͡•꙰─»     ───𖡜ꦽ̸ོ˚￫     ▩⃪ꦽꦶ̸꧇      ᭺ᮀฺ۪۟𖡎’￫    

  ꓸ᭄ꦿ⃔⸙        ⿻ꦿꦂ🍑       ░༵۟🍉ֻ͛➜       ⎝❑⃕ཷ🍟 

‹‹❑ౄ🍒    ླ🍑❜︧༷︧➭    ꪶ🍄 ⃦⭛     ❍⃕⃟᎒⃟̀🍬ི૪ 

｡˚༷ᮀ｡˚༷￫     ｡˚༷｡˚༷🍒➮   ꓻ┼ꦽ᪱ꩍ🦔꧈    ⚘๋࿆.•۟ 

۝     ❪.🚀᪽̩¡❫     ๛·࣭̣࣪̇⸱🍩◗     ❒𖥻ꦼꦽ➮   

ꕥꦿོ꧈    ───ཹ🌹 ݇-݈    ❪১°᳝ꯥ‧ٓ↵❫      ১°᳝ꯥ‧ٓ🛸 

꒰🍒১°᳝ꯥ‧ٓ⭝       ꦽꦁ১︧.۪̇〬°⃟᮪݇⃟⃟🍧       ⃦ꦦꪳ՚𖦹       ⃦ꦦꪳ՚☕   

◖🍑ནཹꦿ◗    ◖🍒ནཹꦿ↣    𖣠’᪵১↣     ᳝'꩖͜͡𖧷𖦝    

────𖦹५ॱ     ᳝'꩖͜͡ꦿꦼ🍣     ◍ཻꢀ᮪⸱ᨗᨗᨗ🛸     ◍ཻꢀ🌹૰ 

惢🍑҂       惢🍉’݆￫     🌹ꦽꦼ̷১      ’٬࿊⃟☽ᝦ    

ꛒ੭〭۬🍒ᨘ₎      ᨆᨘ᭲.˚🍓྆≭     ◦ᮀᨘ۬․ٰ৴🍚੭      🍉⃟᮪〭۬̇〬⃟˖ꪶ    

᳝'꩖͜͡⚘࿆ํ·ٜꪶ      ⚘࿆꯴˖࣭̣᪽̇ ๋──       ꫶ ⃙◌⃙◍     ❪̣࣭̇࣪·ฺ۪۟࿃❫̣࣭̇࣪·ฺ۪۟ 

🍒 ⃟᮪〭۬̇〬⃟˖⸱ೇ    🌺ꦽꦼ̷•ˑ˒     🥥ꦽꦼ̷ꪶ     𖥕𖠗∙۟ᱹ۫↻ 

﹎૰ཾ⋅ꩌꦿ🍧｡        ❪𖦄͟𖦉̤۪᭮.↣         ៍ོ⃨̇𖦖🍑⭟     

✎․ೇ︨︧ཾ✾▹     𖤃·۪۫ˑ݈↷      ⸻⌔☐❜｡۪۪۫۫↛ 

｟𖠲۪۫ᮀ〭⑇⃨᪽᪴｠ ╰ํ⃝̸〭∙۬·𖤃    ❪🍧ฺ࣭࣪͘ꕸ▸    𖥨ํ∘̥⃟⸽⃟💌৴▸ 

𖥨ํ∘̥⃟⸽⃟🎐㇀      🌵ฺ࣭࣪͘◞,〬⎼      ꗏฺ࣭̇͘.㇀🍣      ─◍᳝࣪.⋕𖥾ᤢ۪.۫ 

▧⃯⃟৴ํฺ͘.•🍣”     ▧⃯⃟৴ํฺ͘.•🛸 ݈݇─     ▧⃟╳⃟ೇ̖ 


就像模像ા િ ી ુ ૂ ૃ ૄ ૅ ે ૈ ૉ ₡₢₣₤₥₦₩₪₫₭₯₾₽₻₺₸₷₶₶₵₴₴₲₰₱₳⸿⸚⸛ⶬ⻞⸙ㆃ㑹䡤 ▒░▓ ҉ ҈ ℳℴℵ℥ℤℨ℘ℜ
♔♕♖♖♗♘♚♝♟♠♢♢♣♤♦♨⚀⚂⚃⚅❧❥❥❤❣❠❠❑❒❁❃❅❔❔❖❆❇❈❙❙❋❜❝❞❏❎❍❌❊❊❉❈❇❅❄❂❀❀✰✱✳✳✴✵✷✷✸✹✺✻✼✽✿✯✮✫✫✪✧✦✥✤✤✣✢✡✡✠✟✞✜✛✚✙✘✘✖✖✗✕✔✓✒✑✍✎✏ ೈ፝͜͡࿇ ঔৣ͜͡➳ ⇝❦ۜ✯ۣۜৡৡۣۜ✯ۜ❦⇜꧁᭼⸼✞⸼᭼꧂ ঔৣ͜͡ீ͜❥͜ঔৣ👼 ⸎✴•เั•✴⸎ ঔৣ͜͡➳ೈ፝͜͡࿇↭ৢۜ͜͡✟✙✚✛✠✟✞✜✢✦✧꧁ᵗᶤᵃ ᵇᵘᶰᶰʸ꧂ ✦✮✭✬✫✪✩✯✰✺✹✸✷✶✵❂❧❦ ⇝❦ۜ✯ۣۜৡৡۣۜ✯ۜ❦⇜꧁᭼⸼✞⸼᭼꧂ঔৣ͜͡ீ͜❥͜ঔৣ👼 ⸎✴•เั•✴⸎🔴⚪⚫
๖ۣۜۜ͜͡ ۣۜ   ஓீ͜ ፝͡ৎ✞̤֟٭  ৎ❥̤֟٭  ৎ̤✙֟٭  ஓீۣ̤֟͜٭̤֟ ঔ  ፝͡ৎ   ፝͡ৎ✞̤֟٭  ⸎✞ 

  ৎ❥̤֟٭ۣۜ ஓீ፝͜͡   ✦ۣۜۜ☆ۣۜۜ͜͡   ঔৣֳ᷌᷈͜͡❀ ్మాై  ू ፝͜❥ ೈ፝͜͡๖ۣۜ   ৎ✿̤֟٭ ೈ፝ 

✦҈͜͡➳ ீ͜ৡৢ͜͡   ๖ۣۜۜ͜͡ீ͜   ೈ፝͜͡    ঔৣ͜͡   ৢۜ͜͡✟ ঔৣ͜͡ீ͜❥͜ঔৣ
ᢁ♾႘႙လၼဏ☍ᨖ∾⏦∞ზ⚪⚫⚬⭕🔴🔵๏༚ᢀᨔ⌻⌼⌽⌾⍉⍛⍜⎉⎊⎋⏀⏁⏂⏣◉○◌◍◎●◐◑◒◓◔◕◦◯◴◵◶◷☌⚭⚮⚯⛢❍⬤⬮⬯⭖⭗⭘⭙〄ʘஃ་჻᎒᎓᠁᠂᠃᠅᨞⁕⁑⁂⁖⁘⁙․‥…‧⁚⁛⁜⁝⁞※┄┅┆┇┈┉┊┋⛬⌗⌸⌹⍁⍂⍃⍄⍞⍯⎕⏍⏥▀▁▂▃▄▅▆▇█▉▊▋▌▍▎▏▐░▒▓▕▖▗▘▙▚▛▜▝▞▟■□▢▣▤▥▦▧▨▩▪▫▬▭▮▯▰▱◘◙◧◨◩◪◫◰◱◲◳◻◼◽◾⚼⛝⛞❏❐❑❒❘❙❚⬚⬛⬜🔲🔳⌧❖⌺⍋⍍⍒⍔⍙⍚⎏⎐⎑⎒⏃⏄⏅▲△▴▵▶▷▸▹►▻▼▽▾▿◀◁◂◃◄◅◆◇◈◊◢◣◤◥◬◭◮◸◹◺◿⛋⛛⛡⟐🔶🔷🔸🔹🔺🔻🔼🔽இ༓࿉།༎ᔗᔘᔚᔙᓬᕫᕬᕭᕮᖗᖘᖙᖚᖰᖱᖲᖳᖼᖽᖾᖿᗤᗥᗦᗧᗡᗠᗢᗣᗞᗟᗜᗝᗘᗛᗗᗖᗐᗑᗒᗕᘜᘝᘞᘛᘮᘯᘰᘳᙀᙁᙂᙅᙈᙉᙊᙍᙷᙸᙼᙺᨀᨁᨂᨃᨄᨅᨇᨋᨌᨍᨎᨏ᨟ᨐᨑᨒᨓᨕᱤᱥᱦᱧᱨᱩᱫᱬᱭᱮᱯᱰᱵᱜᱝ⌌⌍⌎⌏⌜⌝⌞⌟⌓⌔⌖⌘⌬⍊⍌⍎⍑⍓⍕⍝⍭⍱⍲⎄⎅⎆⎇⎈⎌⎍⎎⍽⍾⎓⎔⎗⎘⏆⏇⏈⏉⏊⏋⏌─━│┃┌┍┎┏┐┑┒┓└┕┖┗┘┙┚┛├┝┞┟┠┡┢┣┤┥┦┧┨┩┪┫┬┭┮┯┰┱┲┳┴┵┶┷┸┹┺┻┼┽┾┿╀╁╂╃╄╅╆╇╈╉╊╋╌╍╎╏═║╒╓╔╕╖╗╘╙╚╛╜╝╞╟╠╡╢╣╤╥╦╧╨╩╪╫╬╭╮╯╰╱╲╴╵╶╷╸╹╺╻╼╽╾╿◖◗◚◛◜◝◞◟◠◡☰☱☲☳☴☵☶☷⚊⚋⚌⚍⚎⚏⚞⚟⚶⚷⚹⚺⚻⛘⛚⛻彡❡۩ண⌦⌫ਊ〽〰


A=Δ꙰ Λ λ Ⱥ ₳ ą å ส สั ล α ค ศ Ⴉ 🇦 🇦ศ ₳ ﾑΔ a ɑ Ă 厾 λ α Λ ɐ ส丹ⓐ Д ∆ ਸ λ Λ ą å ส ล ค α Ą ਜ Ẵ ศ ά āλ Д Å ä ล Ẳ Ħ ª ẩ ส Ä ձ Ą ๖ۣۜĄ αสั ά ặ
म स 禸 丒丸凡 丹入 ﾑ ム Д 开 ໞ Ѧ 月么 ਜ A҉ 岚 ๖ۣۜA ꬍꬅ 刄 㞩 

B=多🇧 乃 ঔৣ͜͡岌 в ฿ ß β ცⓑ ხ ɮ β ß ฿ Ъ طß в β ხ ฿ в ␢ ๒ Ъ ъ ь Ɓ ß ฿ Þ 乃 邦 ぶ ✇ 及 в Ⴊ 🇧 ๖ۣۜB 夃 ଷ
ゐßѢƀЪЬβϐбБъьわゎらね ♭ ɓ B҉ ㄢ 

C=¢ ₡ ₢ C ς ⊂ 匚 ㄷ ど に 二仁 🇨 ɕ ૮ C҉ ๖ۣۜC Շ 🇨 ¢ ₡ ᄃ c̈̈ ɔ ς ©C¢ ς © ζ Ƈ Ɔ ʗ ₡ ૮ ح¢ Ĉ č Č © ĉ Ć ૮ 

D=ↁ Đ ɗ đ δ ɖ わ 力 ⊅ ⊅໓ 🇩 ∌ D҉ 刀 Ɗ
๖ۣۜD ಖ 🇩đ Đ ɖ ⓓ ∂ ժÐ ∂ đ ۜÐ ₫Ð ∂ ð đ ๔ მ ძ ժ ɗ 

E=Ɇ € ℮ ㉫ ∉ ∈ Ξ Σ ξ Є ๋Є ع ə ɇ є ჲ を
ﾐ ﾓ 三 巨 玄乞 Ｅ它 ೯ ౯ ㄠ モ 🇪 E҉ 亥 ૯ ๖ۣۜE も ƎƏ Ɛ ؏៩ 🇪 乇 Є є Σ ε ξ ⓔ 玄 ៩ ₤ ჰ პ℮£ Є ξ Є๋ є ჱ ŧ Σ ε ع э έ נּ גּ ɛ ə ٤ ૯૯ є პ ε Ë ع ﻊ ē € ξ έ ℮ ë Э ۼ 

F=Ғ ƒ Բ下 ﾁ Ϝ Fヂ Ք F 下 🇫 F҉. ๖ۣۜF  🇫 ｷ ₣ ʃ ғ ⓕ f Ғƒ Բ ๖ۣۜF ₣ƒ ₣ ﬄ ךּ דּ Ғ ક 

G=₲ ǥ Ⴚ Ǥ ❡ ሬ 🇬 Ԍ G҉ ๖ۣۜG ໔ ໕ ផ ௹
🇬 Ĝ Ģ g G̈̈ ⓖ ₲ ௹ ğ G๋ ๔ Ġ ġ ģ ğ๋ ؤ و פĢ ₢ ɠ ૬ ǥ 

H=Ħ ん ɧ 卄௮ அ ஆ Һ һ н Ҕ ҕ Ң ң Ҥҥ Ӈ ӈ Ԋ ԋ 艹 Ⴌ 🇭 ╠╣ H み ђ ๖ۣۜH ਮ 🇭 ん ħ н ђ அ ჩ ħ ╠╣ ђ સ Њ ௮ Ћ нસ அ ħ ђ н Ћ Њ अ╠╣ 

I=፤ ɨ ៛ í ∣ ழェ エ ｪ ｴ 工讠 辶 เ ቾ 🇮 ҉ I҉ 
๖ۣۜI ⶇⷀ 🇮 ί Ξ រ ł ιΐ ι ║ï Î เ Ī ﭑ Ỉ î Į ĩϊ ΐ ذ ﻐ ɩ ւ ɨ 

J=ʝĲ ｊ Ｊ ʲქ ჟ 🇯 J ℑ ๖ۣۜJ 🇯ʝ ქ J Ĵ ɾ ე უل נ ਹ Ĵנ ل Ţ ړ ਹ ﻮ ʝ ჟ 

K=Ҝ Ҟ Ӄ ₭ Ҝ 长 ҟ Ҡ ҡ ӄ ҝ  🇰 Ƙ K ઝ ๖ۣۜK🇰 ₭ Ҝ κ ķ К к ๖ۣۜK ઝ Қ ķ к Ҝ ₭ К қ ҝ 

L=Ł Լ ℓ ∟ ﾚ し ̽ſ ʆ ไ ₰ 🇱よ๊レ 廴 L҉ ㄥ ๖ۣۜL โ Ն ₺ 🇱 Ł ₰ ℓ Լ よ ℓ Ĺ Ł Լ Ľ Ļ Ŀ ┘£ ไŁ ℓ Ļ ๋╝Լ 

M=ℳ ๓ ற м რ ო ɱ ₥ Ӎ ポ ボ /V\ 水 ണ Ӎ 🇲 M҉ 爪 ๖ۣۜM
🇲 м ℳ რ ற ო ɱ ๓ ʍ დლм ற /V\ ๓ ๖ۣۜM Щ๓ ற м ₥ რ ო ɱ 

N=₦ Ń ņ ரŋИ ภй מ Ň หฑ иη∩ ல ₪ ൯ Ŋ N҉ れ ๖ۣۜN ฌ ญ ൮ വശഷസ Л🇳и ₦ Π ₪ η ெ வ йи η ŋ ฑ ர И ภ й Ń ņ ή п ห Ŋ ภ Պ ฑ η и ர Ɲ ห ₪ ɳ מּ תּ ₦ 

O=Ѻ θ Θ ❍ ◯ 〇Ծ҉ ゆ ∅ Ø Ծ Օ ס ⊗ ₴ Θ ΦϕФ Ω θ๑ ๏ ο ๐ σ ø ѳ Ѻ Ѳ Ө ०
の 🇴 ۝ O 口 ๖ۣۜO 汩 ଠ 🇴Ø๏σǿ⊕ƠФץםץ₴ΘԾøΩ❍ტიბθ❂ ø σ Ø ૭ Ǿ ö ♂ ợ Ů Ơ Ō Ծ Θ δ Ǿ Ф Ộ Ö ǿ Ŏ ό Ø ѳ ø ૭ σ ๏ ơ Θ Ф ठ ☻☺ θ Ө ɵҨ 

P=℘ ₱ 了 ァ户 ㄕ尸 卩卫 ƿ ρ م թ ｱ ק ¶ や ゃ ア マ ャ ヤ ヹ ｱ  🇵 伊 ҉ P҉ ㄗ ๖ۣۜP 尹 🇵ρ ק թ þ φÞ ╠╝קּ թ φ þ քק Þ ρ P๋ ‽ ρ ƿ ք թ ॐ 

Q=φ Ҩ ҩ. 🇶 ϑ Q҉ ๖ۣۜQ🇶q ๖ۣۜQǪ ǫ գ 

R=ℜ Ԅ रै₹Я 訳 尺 㞍尻尺 尼 尽 Ի ʀ ɾ я Я 民 🇷 R҉ 屁 ૨ ๖ۣۜR ฯ ণ 尺 尻 я ℜ Γ я ® л Я Ř ř ર ŗ ѓ ל гг ŗ я ® Я Ŗ 

S= ฐ ร ຮ ธ ऽ ₷ ֆ ى ک উ ঊ Տ હ ៜ 🇸 ട
乌马 写 ㄅ ㄘㄎ 亐令 S҉ Ｓ ๖ۣۜS ঙ ຣ ଌ 🇸ঊ ₷ ន ѕ ร ₴ ஜى § ร ş ئ ટ ک Ŝ š હ Ş ઽ ՏȘ ร ﻜ § Ş ֆ હ $ Ș Ƨ ى ş Տ ડ ઽ ૐ 

T=┳ 〒 Ԏ Ŧ ₮ ৳ ॠ ŧ ჭ ⊥ 匕十 क़ 丁 も デ テ ナ ㄤ ｲ 亻 ট ゼ Ⴀ 🇹
平 亇 T҉ す ๖ۣۜT ক ፐ ፓ 弋 字 🇹т † է Ե ｲ Ŧ ৳ჯ ₮ क も ł ┼ † т Ŧ Ţ Ť ŧ 〶〒ł Ŧ ♰ Ƭ τ † 

U=น Ü บ ป ย ษ ข μ い ų น บ ป∪ リ ㄩ凵びひ სυʉ 🇺 Ҵ ચ થ ს U҉ む ષ ๖ۣۜU Ⴎ ษ 🇺 ひ υ ს ∪ચ µ Ü ü џ ů ย Û û ŭ ن น ષย џ ચ Ǔ Џ Ц Ū ப ʉ μ થ ય મ և υ ц 

V=√ 讠 🇻 V҉ ∨ ๖ۣۜV ง 🇻ν∇√ ૪√ ٧ ს 

W= ₩ ฬ ผ ฝ พ ฟ ௰ ឃ ω 🇼 W҉ ખ 山 ๖ۣۜW ຟ 🇼 Ѡ Ш ₩ ωŴ ω ŵ ખ ώ ฬ ฝ พ ฟ ﷲ ਘ 

X =× 区×义冈区囟ҳ̸Ҳ̸ҳ✘✗ χ 🇽 乂 X҉. メ ๖ۣۜX 🇽χ Ҳ ҳ ✖χ Ж ჯ ×א ﭏ Ҳ ҳ χ × 

Y = ƴ ¥ 丫吖 Ɏ Ύ Ⴘ 쏘 γ צ ყ Ⴘ Ⴗ ע γ у Y ﻻ ㄚ Ⴤ 🇾 ψ Ψ Y҉. ๖ۣۜY ⼬ Ƴ🇾у Ψ ყ γμ¥ ﻻ ŷ Ў ყ γ ÿ ý ५У ყ ﻻ צּ Ұ ¥ У ұ ץ 

Ζั = ʑ Ӡ ӡ ろ る 乙 之 z ƶ ȥ ʒ ʐ ʑ ƺ ʓ 🇿 Z҉ 🇿 z 乙 ζ Հ Ż ž ζ ż Ƶ Հ ƶ ƺ 

ᵃ ᵇ ᶜ ᵈ ᵉ ᶠ ᵍ ʰ ᶤ ʲ ᵏ ˡ ᵐ ᶰ ᵒ ᵖ ˁ ʳ ˢ ᵗ ᵘ ᵛ ʷ ˣ ʸ ᶻ ᵈˡᶜ ᶤ ᶫᵒᵛᵉ ʸᵒᵘ 

ᴬ ᴮ ՟ ᴰ ᴱ ˁ ᴳ ᴴ ᴵ ᴶ ᴷ ᴸ ᴹ ᴺ ᴼ ᴾ ᵠ ᴿ ⁵ ᵀ ᵁ ᵛ ᵂ ᵡ ᵞ ᶻ 

⁰ ¹ ² ³ ⁴ ⁵ ⁶ ⁷ ⁸ ⁹ 

✦҈͜͡ ➳ ீ͜ৡৢ͜͡ ๖ۣۜۜ͜͡ீ͜ ೈ፝͜͡ ঔৣ͜͡ ৢۜ͜͡✟ ঔৣ͜͡ீ͜❥͜ঔৣ     ፝͡ৎ❥̤֟٭ 

A⃟🌸  B⃟🌸 C⃟🌸 D⃟🌸E⃟🌸 F⃟🌸 G⃟🌸 H⃟🌸
I⃟🌸  J⃟🌸 K⃟🌸 L⃟🌸M⃟🌸N⃟🌸O⃟🌸 P⃟🌸
Q⃟🌸 R⃟🌸 S⃟🌸 T⃟🌸  U⃟🌸  V⃟🌸 X⃟🌸 Y⃟🌸 W⃟🌸 Z⃟🌸
れ ₡ ₩ ₤ ₦ ₱ ₲ ₰ ₳ ₷ ₸ ₹ ℐ ℑ ℒ ℊ ℋ ℌ ℍす や ⼳ ひ ቻ ঊ ֆ ℘ ℙ ℚ ℛ ℜ ℝ ℣ ℤ ℬ ℰ ℭ ℱ ℳ ⅅ ⅆ Ǥ 㞩 ↁ Ҩ む ⷀ ₦ み ↁ ؏ 亇 ł ❍
ｷ Ⱥ 多 及 Δ̸ 弋 ៩ ൬̸ 岌 ₮ ቾ ❍̸ 岌 


🇲🇾⃟༒🇹🇰⃟༒ᙶ⃢: ➤   ⿴⃟ٍࣽ❖᪶۫۫   🌺⃢❈❥  ▢ 🌹፝⃟༘┼⃢ᵉᵥ✦ 𖣘⃟ᗒ     ፝⃟༘❍፝⃟༘ ➀፝⃟༘ᵉᵥ      𖡹⃢⃟ᗒᵉᵥᗕ⃢⃟𖡹̤   ◆ ⃟ ⃟ ⃟  ⃟ ⃟◆     ༺〄༻
*🌹፝⃟༘┼ U࿆ ,࿆P⃟⸙ᵉᵥ✵*  

᭒𝔄𒆭𒂩𒃳⃟۝⏣ᙵ༒꧁꧂鬒ȴ𒉼𒍮𝔍𝓲𝔜𝔒𒃩ᙴ𒉣𒉐𒆜𒅴𒅌𒅄𒄘𒄖𒃿𒃾𒃸𒃹𒃣𒂤𒂥ޥ᙭☬ᭅ᭟𑋭𒂻𒂵亶❷ݳँᬒᬻޙ𑱖𐃌ऀ⇜ᬼᭁ֎⤳❷ᬽာ⭧ᭃ⠕⃞❨ः亹⠿☛௵𒴇乤⤠仓༻࿐ⲫට༺֍
𗅤𗄹𓀀𓀂𓀄𓀆𓀇𓀐𓀖𓀌𓀠𓀫𓀞𓀮𓀺𓁀𓀬𓁡𓁣𓁦𓁳𓁺𓁸𓁻𓁹𓁼𓁽𓁿𓂄𓂆𓂐𓂋𓂕𓂛𓂙𓂞𓂤𓂠𓂏𓂥𓂨𓂣𓂞𓂰𓂴𓂹𓃄𓃐𓃖𓃤𓃾𓄈𓄔𓄞𓄩𓄫𓄮𓅅𓅘𓅦𓇬𓈌𖦤𖦘𖦋𖦀𖦦𖦂𖧈𖧃𖧖𖧌𖧨𖧳𖧮𖨬𖨪𖨦𝟖𝟡𞤴𞤨𞤞🈤🈞🈠
ݡݞݴݩތޑޥޣޖޡࠌࠆࠑࢤࢦୃୁଶஅஇஊஔᴕᴡᶘᶓᶎḭ⁃⁀⁆⁓ⅆ⅑⊅⊤⋭⋱⏤⏠⏄⎾⏜
☣☬☞☌☋☍☈♆♅♄⚟⚝⚛⚪⚮⚮⚻⛬⛮⛥⛨⛛⛚⛜✮❁✳➲➭⟌⟘⟞⟣⟱⟶⟼⠮⡄⡆⡔⢫⢥⢩⦫⦝⦽⦻⦹⥡⥳⩄⩙⩣⪀⪋⪆⫛⫎⫡⭃⬸⭄ⶣⶨⶋⶅⶐⶄⵜⵘⵎ⸠⻤⻞⻫⻖けぎご〠れゑフラ㇕
䷨䷦世丨世亀乴亓亖亡仍仠仦渹渻湆꧅꧄ꪜꪦꩵꩦꬌꬬꬩꬣꮹꮽꯌ𐅊𐅑𐅒𐅌𐊔𐊴𐎫𐎝𐎝𒋐𒋬𒍫𒍨𝓨𝔄𝖀𝖕𝟍𝟘
⸙⋆ͤ℣⋆ͦ⸙
  ৢۜ͜͡  - ๖ۣۜ͡ஓீ͜͜͡❥ - ঔৣ͜͡ீ͜❥͜  -  ू ፝͜❥ - ৎ❥̤֟٭ۣۜ  -  ঔৣֳ᷌᷈͜͡❀  -  ৎ✿̤֟٭ - ✦҈͜͡➳  -  ঔৣ͜͡➳ - ๖ۣۜ͡ஓீ͜͡   - ஓீ͜͡   - ஓீ፝͜͡   -ஓீ͜  -  ్మాై  - ೈ፝͜͡๖ۣۜ   -  ೈ ፝  -  ீ͜ৡৢ͜͡   - ๖ۣۜۜ͜͡ீ͜   - ঔৣ͜͡   -  ೈ፝͜͡卐  *-* ✦ۣۜۜ☆ۣۜۜ͜͡     ۣۜۜ͜͡☆ۣۜۜ✦ۣۜۜ *-* ✧͜͡҉      ҉̶͜͡✧ - ঔৣ͜͡҉❅ۣ̤ۜ❥̤̤֟֟
A⃟༻ B⃟༻ C⃟༻ D⃟༻ E⃟༻ F⃟༻G⃟
H⃟༻ I⃟༻ J⃟༻K⃟༻ L⃟༻M⃟༻ N⃟༻O⃟༻ P⃟༻ Q⃟༻R⃟༻S⃟༻T⃟༻U⃟༻V⃟༻X⃟༻Y⃟༻W⃟༻ 

༈ ࿗᭄🌀 ᭨ ஓீᤢ✧͢⃟ᤢ🌸 🌹፝⃟༘┼ ᜴⃕🌹 ⿴⃟ٍࣽ❖᪶۫۫ 

ৢۜ͜͡  -  ๖ۣۜ͡ஓீ͜͜͡❥  -  ঔৣ͜͡ீ͜❥͜  -   ू ፝͜❥  -  ৎ❥̤֟٭ۣۜ  -  ✦ۣۜۜ☆ۣۜۜ͜͡   -  ঔৣֳ᷌᷈͜͡❀  -   ৎ✿̤֟٭  -  ✦҈͜͡➳  -  ঔৣ͜͡➳  -  ๖ۣۜ͡ஓீ͜͡   -  ஓீ͜͡   -    - ஓீ͜  -  ్మాై  -   ೈ፝͜͡๖ۣۜ   -   ೈ ፝  -   ீ͜ৡৢ͜͡    -   ๖ۣۜۜ͜͡ீ͜   -  ঔৣ͜͡   -  ৢۜ͜͡⍣   -  🔥፝⃟    -   ꦿ⃟ۜ✯  -     ⃟ۣ❃ -  ༻⃟༆  -  ༆⃟᠁  -  ွဳ⃟ꦿ  -  💸⃟ꦿ⸼  -  ⋆⃟ۣۜ᭪➣  -    ⃘⃤꙰ 

𝐁𝐘: ${nomebot}`;

/// ============  FIGURINHAS ==========

export const bot = () => { const responses = ["https://www.dropbox.com/scl/fi/3urci7saowx4vpgcomut9/lyna04.webp?rlkey=0apmbylo1nz9sok92fp299cnw&st=ih28yp7f&dl=1", "https://www.dropbox.com/scl/fi/rbu3qzi26hw5bd21q28w9/lyna05.webp?rlkey=jab14drks2xo1ctudl56fouuq&st=u7wafz8a&dl=1", "https://www.dropbox.com/scl/fi/cps41j3koz28qmb9571bj/lyna10.webp?rlkey=1ybaof5nscltymwiemcka43a6&st=waczh6sj&dl=1", "https://www.dropbox.com/scl/fi/g5vp5cnfo00711t5m8xe2/lyna13.webp?rlkey=v7n21bac1zitv751eeojztw6j&st=fyrs5dih&dl=1", "https://www.dropbox.com/scl/fi/kpixsuuqwy5nre47x9vxe/lyna14.webp?rlkey=j853w6ze72w16403zk73dgxvv&st=jrn4srus&dl=1", "https://www.dropbox.com/scl/fi/knhc8fksclvatsrm20jti/lyna29.webp?rlkey=q7xyx6cv5qyw7b9woyrbctigz&st=x7er1bqy&dl=1", "https://www.dropbox.com/scl/fi/yq4bho8orcppaucw6gt64/lyna43.webp?rlkey=c8ic51qq9cx3tndp3glc95n5a&st=cfo9arkc&dl=1", "https://www.dropbox.com/scl/fi/1d77w0qu8samf8xqu6eny/lyna150.webp?rlkey=pfq8nb3gd3z3vrllfh3wcgwwt&st=gmotf11i&dl=1", "https://www.dropbox.com/scl/fi/mlmzxm4t4qhmud1bguf3v/lyna170.webp?rlkey=9m6ovmxiqfxproup33eb5chri&st=ctvnisdu&dl=1", "https://www.dropbox.com/scl/fi/6a6nmq1t0oyhk9gh8d46v/lyna171.webp?rlkey=7bbrt62pkdjfwtfvpltdyit0n&st=tw3yfior&dl=1", "https://www.dropbox.com/scl/fi/5na9h82ovolexegsxzjmp/lyna172.webp?rlkey=8rhyj6p77d49aku1ht5ha4f30&st=jmouqj6q&dl=1", "https://www.dropbox.com/scl/fi/brbh52ura6lc2591alltk/lyna178.webp?rlkey=savrjtglyeuwm7m2zqavavztv&st=q3czxqyp&dl=1", "https://www.dropbox.com/scl/fi/5ouwhsqxp9ysqyedacw8d/lyna184.webp?rlkey=h2gp0pugy876gdrchglzrfi3o&st=0m3j4kir&dl=1", "https://www.dropbox.com/scl/fi/nv76z3xgg0im9w4ad3rwo/lyna199.webp?rlkey=p5obwg1cm9tig496za5p2k92w&st=5qwkjt1e&dl=1", "https://www.dropbox.com/scl/fi/y4tv6tc591zozjo4pcjpo/lyna201.webp?rlkey=vvmnzdai8fl17tltt2umwj397&st=761zl1va&dl=1", "https://www.dropbox.com/scl/fi/bpg5qymkappfpxzllmi8u/lyna210.webp?rlkey=z14mqtcw7ajijuqrrluat1j6h&st=idl7fdog&dl=1", "https://www.dropbox.com/scl/fi/pthmyb00nbgqt5wwd5b8w/lyna217.webp?rlkey=diihtwj1zc09pxovqf409edzp&st=kqo65hvq&dl=1", "https://www.dropbox.com/scl/fi/ijr9knbrxraf3ma5zgwqp/lyna163.webp?rlkey=6887s03pzcvn0z76jdlvdu2vz&st=w6td5bo9&dl=1", "https://www.dropbox.com/scl/fi/zuf0fxg2u17i78i1b7rq3/lyna165.webp?rlkey=68uxz4nnzbs8afvgk410fzo3y&st=oanqwgoj&dl=1", "https://www.dropbox.com/scl/fi/0640m85sdr56pfsidmicr/lyna168.webp?rlkey=haykjl69hyj7qszi7cudvosup&st=2oeplflx&dl=1", "https://www.dropbox.com/scl/fi/vmu27wjst7fo3bpqod2p8/lyna204.webp?rlkey=8244gp26lzgdfsmgxlk1wkirg&st=g91qp4eq&dl=1"];
return responses[Math.floor(Math.random() * responses.length)];
};

export const kkkkK = () => { const responses = [ "https://www.dropbox.com/scl/fi/kiarv9mkw5gfrs37da7tt/lyna03.webp?rlkey=5yicd7wn7zmyj6timrv0qg5d8&st=sbs716h9&dl=1", "https://www.dropbox.com/scl/fi/qd3x9xpfe4ihgxxr58twr/lyna18.webp?rlkey=31ea6rvj4k33rbkityed291k2&st=181gcbji&dl=1", "https://www.dropbox.com/scl/fi/3h4dn096g5y4zriugq7xh/lyna37.webp?rlkey=5tvnhnnqt8rtdy2aohakc0rc1&st=ds7z8wyg&dl=1", "https://www.dropbox.com/scl/fi/n5b42ukmy2z0cczv8ebvz/lyna94.webp?rlkey=vb3y6qapohswhatiinw5mh6il&st=pnt10im6&dl=1", "https://www.dropbox.com/scl/fi/g1bz1njn1ib4gdq25cqi4/lyna97.webp?rlkey=ckpzap6mptfxh5e05xckm4wu1&st=7570vh55&dl=1", "https://www.dropbox.com/scl/fi/y4uzgo2po1fs1e6l2jtg3/lyna98.webp?rlkey=zbr5b0f2e8fmdgqriv4e10xg1&st=7urt58lw&dl=1", "https://www.dropbox.com/scl/fi/2h51ta0mzd779o415tb11/lyna100.webp?rlkey=8mtzj7xpqqogu5t0thhtjgek7&st=h6r77gyg&dl=1", "https://www.dropbox.com/scl/fi/od0wbp7k2zd14z4uu22q2/lyna101.webp?rlkey=39651s5026w7xaq9ax6cz5qcu&st=j48wd2fg&dl=1", "https://www.dropbox.com/scl/fi/0ase18ybsoyxlbaixd3md/lyna126.webp?rlkey=ic9gmavtmyf7d9iky0m6tvyij&st=7wmnsuyp&dl=1", "https://www.dropbox.com/scl/fi/pocwdkxm6zln40k4fvvai/lyna127.webp?rlkey=ybkuzr3lymsmasekxmo23d83j&st=cq9ri8bq&dl=1", "https://www.dropbox.com/scl/fi/15lch6pj09n427ez67p6z/lyna187.webp?rlkey=e48zu3x307r5r87man8mop7zk&st=8b1uu4s1&dl=1", "https://www.dropbox.com/scl/fi/8gql8bc24rx9g83x3eaek/lyna195.webp?rlkey=vxd06s9npj8fz874vk5gv7kpn&st=8647mwwv&dl=1", "https://www.dropbox.com/scl/fi/0cx00c4oh2vz1x4gq1i1d/lyna207.webp?rlkey=wg7j9egzgkhoo5skwldngeiqu&st=hwu0mwvm&dl=1", "https://www.dropbox.com/scl/fi/jl29jx8r627tlqmwkauqk/lyna220.webp?rlkey=w9r87yeaizei94ndei8tlisi6&st=ecs1gnpb&dl=1", "https://www.dropbox.com/scl/fi/rn8ha4laivjp3kwkwuj00/lyna221.webp?rlkey=4v2bxw0u2ivt5prz0cfb1jsua&st=tgypwb5z&dl=1", "https://www.dropbox.com/scl/fi/igxwkcbwp99viq94wmel8/lyna222.webp?rlkey=96caoj1nbe3uurfdnjy9hxoq5&st=1gqggt2n&dl=1"];
return responses[Math.floor(Math.random() * responses.length)];
};

export const amoR = () => { const responses = ["https://www.dropbox.com/scl/fi/1be2mjehwnjxut97uq8p8/lyna223.webp?rlkey=mashs2tmubp34uyemz7emqqdj&st=6w2mdzkg&dl=1", "https://www.dropbox.com/scl/fi/s2rmo6st5sm201ty0ttt9/lyna219.webp?rlkey=cxwh6wf1osvisjboxcqw14rv2&st=rmpfbcnh&dl=1", "https://www.dropbox.com/scl/fi/yncgca0k99ecgc4p1mbbh/lyna218.webp?rlkey=yb5brt7dsooupdb9f2m10h8a0&st=xn7w0rsw&dl=1", "https://www.dropbox.com/scl/fi/xctwa9xnymna8tq44ypv1/lyna212.webp?rlkey=6znwx6j79l8ak7c2lu8aiheqj&st=sfqcet4m&dl=1", "https://www.dropbox.com/scl/fi/u3z844p4qunnrp6vqgw22/lyna211.webp?rlkey=hl8hvah4c2k9o68dk7khuiaxm&st=w3dfquw1&dl=1", "https://www.dropbox.com/scl/fi/0vkttqr7yqs2uudluef1w/lyna193.webp?rlkey=1eu8q5v9cxke1jnnlg1ep1n0z&st=8zrkqek6&dl=1", "https://www.dropbox.com/scl/fi/ucwyy3ug2z5fvteptnhlh/lyna185.webp?rlkey=y70qrwomy4mm0zck5myd8joy7&st=xzxd9g96&dl=1", "https://www.dropbox.com/scl/fi/ysdzbcf7v21uo81gqvg2k/lyna117.webp?rlkey=3fhp75hk189n9he7oteltxaao&st=g5govkzj&dl=1", "https://www.dropbox.com/scl/fi/sqrlbae7ntv39tsobtnbw/lyna71.webp?rlkey=e23blwsbnnnpo26036xu5kn87&st=ph0pa8k2&dl=1", "https://www.dropbox.com/scl/fi/7166gomc2c8wov8fe16zq/lyna69.webp?rlkey=yabrq95pyqxlffzbu9u17j1zb&st=p7szuj11&dl=1", "https://www.dropbox.com/scl/fi/9bry7sb3lhzihbae4yw3w/lyna35.webp?rlkey=4fwxkv7qow8e4ueeldkjxgshg&st=5dvmbw8l&dl=1", "https://www.dropbox.com/scl/fi/weoblfou1tz792smhbyh1/lyna34.webp?rlkey=6bkyelbnp1i0ti0469g3oz8d0&st=khm45chv&dl=1", "https://www.dropbox.com/scl/fi/ru0tfchy1y1p1iooft427/lyna31.webp?rlkey=7uj6iszep5bwzljtgde3m0vcc&st=y14cegq3&dl=1", "https://www.dropbox.com/scl/fi/4i6ub7xbq63wgyy6m1jq4/lyna11.webp?rlkey=71wjd9wnf3xb915hdzjrgpf89&st=6tkdi5pr&dl=1", "https://www.dropbox.com/scl/fi/aqv3riiaw7vkbex210nbm/lyna15.webp?rlkey=zao425ddxj4pk5knp0dtovpwf&st=1aoyhsce&dl=1", "https://www.dropbox.com/scl/fi/t00zjx32daihq61ht7oee/lyna16.webp?rlkey=d0hfoyvmn8ycd7ltrzdknvqmg&st=5ai3idbp&dl=1", "https://www.dropbox.com/scl/fi/uutrqp7f5ah593ala8rp7/lyna19.webp?rlkey=7vkdos0yh14e6qf2l0n7dnpro&st=d4owz14g&dl=1", "https://www.dropbox.com/scl/fi/ikgm50mokegtahf1fbrc1/lyna21.webp?rlkey=rgqijhwvj1oc7350mv5x0elsp&st=yfkjuy81&dl=1", "https://www.dropbox.com/scl/fi/q4qy5c0szajkqx4xx79aj/lyna30.webp?rlkey=5ncos6dciax78wyukzr81mkpb&st=l33e7ezv&dl=1"]
return responses[Math.floor(Math.random() * responses.length)];
};

export const Botruim = () => { const responses = ["https://www.dropbox.com/scl/fi/tnlbe22grp1px6tsrrqb9/lyna125.webp?rlkey=uisy62xmit709f0xkra4rag7p&st=6r83zme5&dl=1", "https://www.dropbox.com/scl/fi/nhmwjqhm841szpwhid71a/lyna105.webp?rlkey=4np7redjmhtur5kgwgip8msy5&st=w7k45dk8&dl=1", "https://www.dropbox.com/scl/fi/8culo25sblvsdu66xonep/lyna55.webp?rlkey=7wtft68r424bnoig7jlbrf2f5&st=1vdh7kiy&dl=1", "https://www.dropbox.com/scl/fi/pmo4pwji8411p5mcjt6v5/lyna54.webp?rlkey=vxjh5m9nt5jfxqq7ddj3op761&st=sem6plmd&dl=1", "https://www.dropbox.com/scl/fi/6yk9d1makfwafm0ds5zcw/lyna47.webp?rlkey=lk3znl0ykc6h4pw33k0beuzr4&st=rlzwbhna&dl=1", "https://www.dropbox.com/scl/fi/knhc8fksclvatsrm20jti/lyna29.webp?rlkey=q7xyx6cv5qyw7b9woyrbctigz&st=pqirp1bu&dl=1", "https://www.dropbox.com/scl/fi/5yc34psxar1grwk2hpiqr/lyna128.webp?rlkey=f14gdrb44dkzq4o3vhubgcm3p&st=masfx00s&dl=1", "https://www.dropbox.com/scl/fi/7ieywli0vhoatgoqv2v8r/lyna136.webp?rlkey=zfebhw5zhtj14dugod3tf7fna&st=pgnjl2tv&dl=1", "https://www.dropbox.com/scl/fi/6cz66rwdw1c8ey3p4uicx/lyna147.webp?rlkey=y8pfm9t9bq3bozmvgtar3ngdu&st=sb6pgh2l&dl=1", "https://www.dropbox.com/scl/fi/95ueo5uhwp4d60271m583/lyna158.webp?rlkey=q09mwy99wmtb6vy2o35jjc0kr&st=0obnoib0&dl=1", "https://www.dropbox.com/scl/fi/7q34vykr4on8fb8t1vn5h/lyna173.webp?rlkey=0h8n1bjeqz55c9t0mhpmmot6w&st=wgq0ay11&dl=1"]
return responses[Math.floor(Math.random() * responses.length)];
};

export const fpix = () => { const responses = ["https://www.dropbox.com/scl/fi/aalw70dm042uteu65lc45/lyna27.webp?rlkey=94meatreili6ildtwvpz817ua&st=opps1a15&dl=1", "https://www.dropbox.com/scl/fi/g50tqksi54gjxd0zqqgmb/lyna139.webp?rlkey=cbru5z2tfzxezdv4a2on29iql&st=gam5sj0w&dl=1", "https://www.dropbox.com/scl/fi/iu6d34jhsz5rluhdo3mk2/lyna152.webp?rlkey=6f1i58y9w6v59s5dd0v5im0kv&st=n8q2l53n&dl=1"]
return responses[Math.floor(Math.random() * responses.length)];
};

export const cafE = () => { const responses = ["https://www.dropbox.com/scl/fi/oitpd5divls8ocx1hajvs/lyna169.webp?rlkey=5m9vfezkq3ys99p1xzkafxvsq&st=uh5zc53d&dl=1", "https://www.dropbox.com/scl/fi/9ucizo8leqg9v12w3ud9l/lyna202.webp?rlkey=kbis9jqhdaweb11yobr855cuc&st=pmnymumm&dl=1"]
return responses[Math.floor(Math.random() * responses.length)];
};

export const gaY = () => { const responses = ["https://www.dropbox.com/scl/fi/cuqb994kxqoqs6w0ncg13/lyna116.webp?rlkey=0lzkvh4msr6g1ieya3au8y7bn&st=tqt5wmko&dl=1", "https://www.dropbox.com/scl/fi/exjj1iltirj86ty88jg31/lyna176.webp?rlkey=l8i5i5c2ezny4nwlxjj4qv6mb&st=lr4gsux9&dl=1", "https://www.dropbox.com/scl/fi/x3yq5bvhdg27lvngoopoc/lyna182.webp?rlkey=00a5gijbfldjitaydqbdmh6cz&st=a095ca3g&dl=1"]
return responses[Math.floor(Math.random() * responses.length)];
};

export const naO = () => { const responses = ["https://www.dropbox.com/scl/fi/si24ud7kowknz5j7uki5j/lyna38.webp?rlkey=1km22j0wy30llog2t629vd7e1&st=es3k5lf1&dl=1", "https://www.dropbox.com/scl/fi/fjd9sl0b25bdmb7bb16ei/lyna119.webp?rlkey=jlrxn85ruab4iur5b6ijopcb3&st=1f4axoos&dl=1", "https://www.dropbox.com/scl/fi/8klbwrdl2phi6gptzkhlz/lyna205.webp?rlkey=dx5nj8l3koh2otkjeml1ng8x6&st=m53e4l16&dl=1"]
return responses[Math.floor(Math.random() * responses.length)];
};






