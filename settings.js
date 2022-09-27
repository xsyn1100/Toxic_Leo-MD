//TOXIC LEO
const fs = require('fs')
const chalk = require('chalk')

//API WEBSITE \\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//API KEY\\
global.APIKeys = {
	'https://zenzapis.xyz': 'your key',
}


global.autoTyping = false //auto tying in gc (true to on, false to off)
global.autoreadpmngc = false //auto reading in gc and pm (true to on, false to off)
global.autoReadGc = false //auto reading in gc (true to on, false to off)
global.autobio = false  // auto bio system checking on Developing Leval
global.autoRecord = false //auto recording (true to on, false to off)
global.available = true //auto available (true to on, false to off)

//VIDEO MENU 
global.vidmenu = fs.readFileSync("./LocalData/theme/cyber.mp4") //gif and video menu

//DOCUMENT VARIANTS
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

//OWNER CONTACT
global.vcardowner = ['919497206865'] //ur owner number
global.ownername = "Toxic Leo" //ur owner name
global.ytname = "YT:Toxicleo mods" //ur yt chanel name
global.socialm = "GitHub: toxicleo-1" //ur github or insta name
global.location = "Sri Lanka, Kurunagala, Nikaweratiya" //ur location

//BOT COSTOMIZEDTATION
global.owner = ['919497206865']
global.ownertag = '919497206865' //ur tag number
global.botnumber = '919497206865' //Add your Bot Number For Log
global.botname = 'TOXIC-LEO' //ur bot name
global.ig = "https://bit.ly/3BUUQxs" //your theme url which will be displayed on whatsapp
global.myweb = "https://bit.ly/3BUUQxs" //ur website to be displayed
global.sc = 'https://github.com/toxicleo-1' //script link
global.linkz = 'https://bit.ly/3BUUQxs'
global.reactmoji = "😘" //ur menu react emoji
global.themeemoji = "📩" //ur theme emoji
global.packname = "TOXIC LEO" //ur sticker watermark packname
global.author = "Akash" //ur sticker watermark author
global.footer = "Toxic Leo"
global.aliveimg ="https://i.imgur.com/ABlABJP.jpeg"
global.allmenuimg ="https://i.imgur.com/ABlABJP.jpeg"
global.welcomeimg= "https://i.imgur.com/ABlABJP.jpeg"
global.gbyeimg = "https://i.imgur.com/ABlABJP.jpeg"
global.alivemsg = "Appreciation is the easiest way to get what you don't have.. Try to appreciate someone else whenever possible.  It is a sign of your mental development..\nEdited translation...\n@best_m_otivation\n#lifetips\n#psychology\n#questions"

//BOT MEDIAS
global.thum = fs.readFileSync("./LocalData/theme/cyber.jpg") //ur thumb pic
global.log0 = fs.readFileSync("./LocalData/theme/cyber.jpg") //ur logo pic
global.err4r = fs.readFileSync("./LocalData/theme/cyber.jpg") //ur error pic
global.thumb = fs.readFileSync("./LocalData/theme/cyber.jpg") //ur thumb pic

//DATA BASED

global.premium = ['919497206865'] //ADD YOU NUMBER
global.ntilinkytvid = []
global.ntilinkytch = []
global.ntilinkig = []
global.ntilinkfb = []
global.ntilinktg = []
global.ntilinktt = []
global.ntilinktwt = []
global.ntilinkall = []
global.nticall = []
global.ntwame = []
global.nttoxic = []
global.ntnsfw = []
global.ntvirtex = []
global.rkyt = []
global.wlcm = []
global.gcrevoke = []
global.autorep = []
global.ntilink = []

//OTHERS
global.sessionName = 'session'
global.antitags = true
global.prefa = ['','!','.']
global.sp = '⭔'
global.mess = {
    success: '✉️✏️ _Done_',
    admin: '✉️✏️ _This Feature Is Only For Admin!_',
    botAdmin: '✉️✏️ _Bot Must Be Admin First!_',
    owner: '✉️✏️ _This Feature Is Only For Owner!_',
    group: '✉️✏️ _Feature Used Only For Groups!_',
    private: '✉️✏️ _Features Used Only For Private Chat!_',
    bot: '✉️✏️ _This Feature Is Only For Bot_',
    wait: '✉️✏️ _Processing Please Wait..._',
    linkm: '📧✏️ _Where is the link?_',
    error: '✉️🤕 ```Error!!```',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
    ban: 'You have been banned by the owner, if you want to be unbanned, chat owner.',
    nsfw: 'The nsfw feature has not been activated, please contact the admin to activate',
    banChat: 'The bot was banned in this group, please contact the owner to unban'
}
    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.thumb = fs.readFileSync('./LocalData/theme/cyber.jpg')
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
