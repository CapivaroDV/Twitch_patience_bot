const tmi = require('tmi.js');
const p = require('./OAUTH');
const express = require('express');
var OAUTH = p.ppl;
var LocalStorage = require('node-localstorage').LocalStorage;
localStorage = new LocalStorage('./scratch');
co = localStorage;
var ttt = ['patience_bot', 'capivaro41', '#kenjik76'];
t = co.getItem('tt');
ttz = t.replace('#','').split(',');
var ms = require('ms')


// Chama a função ao carregar a tela

console.log(ttz);
const app = express();
const port = 3000;

app.get('/', (req, res) => {
	res.send('Estou Online! :D');
});

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});

const Normal = new tmi.Client({
	options: { debug: true },
	connection: { reconnect: true },
	identity: {
		username: 'patience_bot',
		password: OAUTH
	},
	channels: ttz
});

n = Normal

prefix = '|';
n.connect();

 
n.on('message', (channel, tags, message, self) => {
	
	if (self || !message.startsWith(prefix)) return;

	const args = message.slice(1).split(' ');
	const command = args.shift().toLowerCase();
    let isSub = false;
    isMod = false;
    if(tags.badges) {
        isSub = 'subscriber' in tags.badges || 'founder' in tags.badges || 'vip' in tags.badges;
        isMod = channel.replace('#', '') === tags.username || 'moderator' in tags.badges;
    }
    if(command == 'sou_sub?'){
       if(isSub){
      n.say(channel,'sim')
    }else{
      n.say(channel,'não')
    }
  }
      if(command == 'sou_mod?'){
       if(isMod){
      n.say(channel,'sim')
    }else{
      n.say(channel,'não')
    }
  }



	if (command === 'falo') {
		n.say(channel, `@${tags.username}, você falou: "${args.join(' ')}"`);
	}

	if (command === 'add') {
		// "@alca, heya!"
		if (!tt.includes(`#${tags.username}`)) {
			n.say(channel, `@${tags.username}, adicionado || added`);
			tt.push(`#${tags.username}`);
			n.join(`#${tags.username}`);
			console.log(tt);
			co.setItem('tt', tt);
			console.log(co.getItem('tt', tt));
			t = [co.getItem('tt')];
			console.log(t);
			t = co.getItem('tt');
			var ttz = t.toString().split(',');
			v = ttz;
			co.setItem('a', v.length);
		}
	}

	if (command === 'remove') {
		// "@alca, heya!"
		if (tt.includes(`#${tags.username}`)) {
			n.say(channel, `@${tags.username}, removido | removed`);
			var indice = tt.indexOf(`${tags.username}`);
			tt.splice(indice, 1);
			co.setItem('tt', tt);
			console.log(tt);
			n.part(`#${tags.username}`);
			t = [co.getItem('tt')];
			console.log(t);
			var ttz = t.toString().split(',');
			v = ttz;
			co.setItem('a', v.length);
		}
		if (!tt.includes(`${tags.username}`)) {
		}
	}

  if(command === 'ban'){
    if(isMod){
    n.ban(channel,args.join(' ').split(' ')[0].replace('@', ''), args.join(' ').split(' ')[1]);
    }
  }
    if(command === 'unban'){
    if(isMod){
    n.unban(channel,args.join(' ').replace('@', ''));
    }
  }

    if(command === 'mute'){
    if(isMod){
     n.timeout(channel, args.join(' ').split(' ')[0].replace('@', ''), parseInt(ms(args.join(' ').split(' ')[1].toString()))/1000, args.join(' ').split(' ')[2]);
    }
  }

      if(command === 'unmute'){
    if(isMod){
     n.say(channel, `/untimeout ${args.join(' ')}`);
    }
  }

	if (command === 'salve') {
		// "@alca, heya!"
		n.say(channel, `@${tags.username}, e ai!`);
	}

	if (command === 'sla') {
		// "@alca, heya!"
		n.say(channel, `@${tags.username}, se não tem oq falar não fale!`);
	}

	if (command === 'creator') {
		// "@alca, heya!"
		n.say(
			channel,
			`@${
				tags.username
			}, um dos meus criadores na twitch se chama capivaro de uma olhada na twitch dele https://www.twitch.tv/capivaro41. ele fez quase tudo sozinho | A of my creators is called capivaro, follow he in twitch https://www.twitch.tv/capivaro41. he who did almost everything alone`
		);
	}
	if (command === 'teste') {
		// "@alca, heya!"
		n.say(channel, `@${tags.username}, testado`);
	}
	if (command === 'help') {
		n.say(
			channel,
			`@${
				tags.username
			}, aqui esta os comandos e outras informações: http://patiencebottwitch.atwebpages.com`
		);
	}
	if (command === 'homenagem') {
		if (args.join(' ') != '' && args.join(' ') != ' ') {
			n.say(
				channel,
				`@${tags.username}, uma homenagem a ${args.join(' ')}`
			);
		} else {
			n.say(channel, `@${tags.username}, quem é para homenagiar?`);
		}
	}

	if (command === 'presente') {
		if (args.join(' ') != '' && args.join(' ') != ' ') {
			if (tags.username == 'capivaro41' || tags.username == 'patience_bot') {
				n.say(
					channel,
					`@${tags.username}, agora ${args.join(' ')} é patience vip`
				);
			}
		} else {
			n.say(channel, `@${tags.username}, quem é para presentear?`);
		}
	}

	if (command === 'homenage') {
		if (args.join(' ') != '' && args.join(' ') != ' ') {
			n.say(channel, `@${tags.username}, A homenage to ${args.join(' ')}`);
		} else {
			n.say(channel, `@${tags.username}, who is it to honor?`);
		}
	}

	if (command === 'hello') {
		// "@alca, heya!"
		n.say(channel, `@${tags.username}, hi!`);
	}

	if (command === 'say') {
		n.say(channel, `@${tags.username}, you say: "${args.join(' ')}"`);
	}

	if (command === 'test') {
		// "@alca, heya!"
		n.say(channel, `@${tags.username}, tested`);
	}

	if (command === 'lurk') {
		n.say(
			channel,
			`@${
				tags.username
			}, obrigado. agora de tv para radio no ${channel} | tanks, now from TV to radio on ${channel}`
			);
	}
		
	if (command === 'filosofia') {
		// "@alca, heya!"
if (args.join(' ') != '' && args.join(' ') != ' ') {
		n.say(channel, `${args.join(' ')}, ${tags.username} 2021`);
	}
	
	}
	
}
)
;
console.log(t);
