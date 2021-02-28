module.exports = {
    name: "kick",
    description: "Wyrzuca użytkownika",

    run(msg, user) {
        // przypisuje wspomnianego uzykownika (jeśli został wspomniany)
        if (user) {
            // przpisane czlonka kanalu
            const member = msg.mentions.members.first();
            if(member == undefined){
                msg.reply('Nie wybrano użytkownika')
            }
            //console.log("member: " + member);
            if (member) {
                member
                    .kick()
                    .then(() => {
                        msg.reply(user.tag + ' został potrącony na pasach.');
                    })
                    .catch(err => {
                        msg.reply('Nie mogę pierdolnąć tego użytkownika.');
                        console.error(err);
                    });
            } else {
                msg.reply('Nie mam takiego użytkownika na tym serwerze.');
            }
        } else {
            msg.reply('Nie wybrano użyszkodnika');
        }
    }
}