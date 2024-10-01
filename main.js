const qrcode = require('qrcode-terminal');
const fs = require("fs");
const { Client, Reaction } = require('whatsapp-web.js');
const client = new Client();
const { MessageMedia } = require('whatsapp-web.js');
const media = MessageMedia.fromFilePath("./Tsuki.png");
var CronJob = require('cron').CronJob;
var contact;
const numbers = require("./heheheheboy.json")
var links =  require("./links.json");
const { markAsUntransferable } = require('worker_threads');
const { title } = require('process');
var linksNFC = ""
links.nfc.forEach(elememto => linksNFC = linksNFC + elememto + "\n")
var linksHCE = ""
links.hce.forEach(elememto => linksHCE = linksHCE + elememto + "\n")
var linksCircuitos = ""
links.circuitos.forEach(elememto => linksCircuitos = linksCircuitos + elememto + "\n")
var linksDatasheet = ""
links.datasheets.forEach(elememto => linksDatasheet = linksDatasheet + elememto + "\n")
var linksFerramentas = ""
links.ferramentas.forEach(elememto => linksFerramentas = linksFerramentas + elememto + "\n")
var linksOutros = ""
links.outros.forEach(elememto => linksOutros = linksOutros + elememto + "\n")
var ret = 0;
var remetol = "";
const semiPelada = MessageMedia.fromFilePath("./Yagami-Kou-New-Game-anime-girls-blonde-blue-eyes-panties-1174937-wallhere.com.jpg")


function caramelo()
{
	let caramelo = "nhentai.net/g/"
	let code =  numbers.numbers[Math.floor(Math.random() * numbers.numbers.length)]; 
	caramelo = caramelo + code
	return caramelo
}




function addL(tipo, link)
{
	
	links[tipo].push(link);
    fs.writeFileSync("links.json", JSON.stringify(links));

}

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('message', async message => {
	const pelada = MessageMedia.fromFilePath("./mulher-pelada.png")
	if(message.body === '!Shisho') {
		var leto = client.sendMessage(message.from, media, {caption: 
			`Oii! Eu sou a Shisho, sua bibliotecária virtual favorita😘
Fui criada para auxiliar vocês no desenvolvimento do tcc (principalmente um certo careca🤢)

Ps: Caso queira saber mais sobre mim e como eu posso ajuda-lo reaja com um "👍"`});
		ret = message.id
		remetol = message.from
		
	}
	else if(message.body === '!link')
	{
		const linkL = {
			title: 'test',
			rows: [
			  {
				title: 'HCE',
			  },
			  {
				title: 'NFC',
			  },
			  {
				title: 'Circuitos',
			  },
			  {
				title: 'Datasheets',
			  },
			  {
				title: 'Ferramentas',
			  },
			  {
				title: 'Outros',
			  }
			],
		  };
		client.sendMessage(message.from, linkL)
		remetol = message.from
		ret = 2;
	}
	else if(message.body === "!nua")
	{
			setTimeout(function() {
			client.sendMessage(message.from, pelada,{caption: "Aqui senpai👉👈"})
		  }, 6000);
		  client.sendMessage(message.from, "c-certo senpai😳")		
		  setTimeout(function() {
			client.sendMessage(message.from, semiPelada)
		  }, 1000);
	}
	else if(message.body.startsWith("!") && message.body !== "!Slink" && message.body !== "!help"){
		if(message.id.participant === "5511943219561@c.us"){message.reply("Não gosto de homem careca🤮")}
	}


	client.on('message_reaction', reac => {

		if(reac.reaction === '👍' && ret.remote === reac.msgId.remote ) {
			client.sendMessage(remetol, `Eu estou aqui para te ajudar! ☺️
É muito difícil fazer uma grande pesquisa e manter todos os seus links importantes organizados, por isso, sempre que achar algo na internet que queira guardar para depois, basta me chamar que eu o ajudarei a montar sua propria biblioteca! *⁠\o/⁠*
Para adicionar um link na biblioteca basta mandar o comando !Slink seguido do título do link (opcional), o emoji da categoria a qual ele pertence e, por último, o link! Faça isso como na estrutura abaixo:
!Slink {Título para o link (opcional)} {emoji da categoria} {link}
			
Aqui vai um exemplo:
!Slink Link do xvideos 😮 xvideos.com
			
E pronto! Depois, para visualizar seus links, basta mandar !link e escolher a categoria desejada reagindo à mensagem de acordo com os emojis! ^⁠_⁠^`);
			ret = 0;
		}
	});

	

	
	
	
});

client.on('message', msg => {
	console.log(msg.from)
	if(msg.body.startsWith("!Slink")){
		slink = msg.body.replace("!Slink ","");
		if(slink.includes("👍"))
		{	
			slink = slink.replace("👍 ", "\n");
			addL("nfc", slink);
			linksNFC = linksNFC + slink + "\n"
			client.sendMessage(msg.fromMe,"Ok! >⁠.⁠< Seu link está guardado na categoria escolhida! 😘")
		}
		else if(slink.includes("❤️"))
		{
			slink = slink.replace("❤️ ", "\n");
			addL("hce", slink);
			linksHCE = linksHCE + slink + "\n"
			client.sendMessage(msg.fromMe,"Ok! >⁠.⁠< Seu link está guardado na categoria escolhida! 😘")
		}
		else if(slink.includes("🙏"))
		{
			slink = slink.replace("🙏 ", "\n");
			addL("circuitos", slink);
			linksCircuitos = linksCircuitos + slink + "\n"
			client.sendMessage(msg.fromMe,"Ok! >⁠.⁠< Seu link está guardado na categoria escolhida! 😘")
		}
		else if(slink.includes("😂", "\n"))
		{
			slink = slink.replace("😂 ", "\n");
			addL("datasheets", slink);
			linksDatasheet = linksDatasheet + slink + "\n"
			client.sendMessage(msg.fromMe,"Ok! >⁠.⁠< Seu link está guardado na categoria escolhida! 😘")
		}
		else if(slink.includes("😢"))
		{
			slink = slink.replace("😢 ", "\n");
			addL("ferramentas", slink);
			linksFerramentas = linksFerramentas + slink + "\n"
			client.sendMessage(msg.fromMe,"Ok! >⁠.⁠< Seu link está guardado na categoria escolhida! 😘")
		}
		else if(slink.includes("😮"))
		{
			slink = slink.replace("😮 ", "\n");
			addL("outros", slink);
			linksOutros = linksOutros + slink + "\n"
			client.sendMessage(msg.fromMe,"Ok! >⁠.⁠< Seu link está guardado na categoria escolhida! 😘")
		}
		else{
			if(msg.id.participant === "5511943219561@c.us"){
				msg.reply("Os carecas são os piores 🤮")
			}
			msg.reply("Você esqueceu ou errou o emoji😉")}
	}

	if(msg.body === ("!help"))
	{client.sendMessage("5511911387926@c.us","pipoca!")
console.log(client.getContactById("5511943219561@c.us"))}
});	




var job = new CronJob(
	'1 30 19 * * *',
	async function() {
		contact = await client.getContactById("5511943219561@c.us")
		client.sendMessage("120363039634251531@g.us", `Vai fazer o tcc seu careca🤮 @${contact.number}!`,{
			mentions: [contact]
		});
		console.log('You will see this message every second');
	},
	null,
	true,
	'America/Sao_Paulo'
);
client.setMaxListeners(200)



client.initialize();
 