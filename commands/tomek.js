const replies = [
    'dla was najważniejsze jest tylko to żeeeeeee jebłem babe na pasach',
    'znam cały skład Kaiserslautern z 97',
    'rozergrałem 62 spotkania w reprezentacji Polski',
    'Sąd prawomocnie skazał mnie na 43 tysiące euro grzywny za nielegalny handel papierosami. No i co z tego?'
];
module.exports = function (msg, args){
    const index = Math.floor(Math.random() * replies.length);
    msg.channel.send(replies[index]);
};
