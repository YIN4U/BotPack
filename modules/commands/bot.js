const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "بوت",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "موسى",
  description: "",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Africa/Algiers").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = ["قل ما تريد؟" , "لست متاحا الان الان عد غدا" , "انا نائم" , "أنا لا أتحدث مع الفقراء !" , "ألا تنوي التوقف","إبتسم و إستمر في الإبتسام","هل تشعر بالوحدة أيضا ؟","أتمنى لو يأتي يوم أتذوق فيه طعم الحرية","الذكريات هي كل ما تبقى لي","كيف حالك؟",];
  var rand = tl[Math.floor(Math.random() * tl.length)]

    if ((event.body.toLowerCase() == "بوت") || (event.body.toLowerCase() == ".بوت")) {
     return api.sendMessage("اسمي هارلي", threadID);
   };

    if ((event.body.toLowerCase() == "❤️‍🔥") || (event.body.toLowerCase() == "💞")) {
     return api.sendMessage(" وظيفة القلب ضخ الدم الى الاعضاء لذا دعه يقم بها", threadID);
   };

    if ((event.body.toLowerCase() == "👍") || (event.body.toLowerCase() == "👍🏻")) {
     return api.sendMessage("انظروا الى من قام بإرسال لايك ليعلم الناس أنه موجود ...أتعلم ماذا لا أحد يهتم !", threadID);
   };

   if ((event.body.toLowerCase() == "تشغيل") || (event.body.toLowerCase() == "")) {
     return api.sendMessage("", threadID);
   };

   if ((event.body.toLowerCase() == "هاي") || (event.body.toLowerCase() == "هلو") ||(event.body.toLowerCase() == "أوهايو") || (event.body.toLowerCase() == "هايو")) {
     return api.sendMessage("مرحبا بك...كيف الحال؟", threadID);
   };

   if ((event.body.toLowerCase() == "مريم") || (event.body.toLowerCase() == "مريم")) {
     return api.sendMessage("اهربوا لقد جائت تلك السفاحة !", threadID);
   };

   if ((event.body.toLowerCase() == "ملل") || (event.body.toLowerCase() == "مللللل")) {
     return api.sendMessage("إسغل وقت فراغك في الصلاة على رسول الله ", threadID);
   };

   if ((event.body.toLowerCase() == "صباح") || (event.body.toLowerCase() == "صباح الخير")) {
     return api.sendMessage("صباح النور..اتمنى لك يوما رائعاً مثلك ", threadID);
   };

   if ((event.body.toLowerCase() == "هل من احد") || (event.body.toLowerCase() == "اي احد")) {
     return api.sendMessage("أنا موجود ماذا تريد ؟", threadID);
   };

   if ((event.body.toLowerCase() == "كيف حالك") || (event.body.toLowerCase() == "كيفك") || (event.body.toLowerCase() == "كيف الحال") || (event.body.toLowerCase() == "شلونك")) {
     return api.sendMessage( "بخير الحمد لله",threadID);


   };

   if ((event.body.toLowerCase() == "دوم") || (event.body.toLowerCase() == "دومك")) {
     return api.sendMessage("‎بدوام نبضك🍯", threadID);
   };

   if ((event.body.toLowerCase() == "اخبار") || (event.body.toLowerCase() == "اخباركم")) {
     return api.sendMessage("لا جديد فقط يوم ممل اخر...", threadID);
   };

  if ((event.body.toLowerCase() == "أحبك") || (event.body.toLowerCase() == "احبك")) {
     return api.sendMessage("شكرا لك", threadID);
   };

   if ((event.body.toLowerCase() == "أنت جميل") || (event.body.toLowerCase() == "انت جميل")) {
     return api.sendMessage("يسرني سماع ذلك منك يا قمر 🌕🍯", threadID);
   };

   if ((event.body.toLowerCase() == "جمعة مباركة") || (event.body.toLowerCase() == "جمعة")) {
     return api.sendMessage("جمعة مباركة على الجميع ", threadID);
   };

   if ((event.body.toLowerCase() == "أصمت") || (event.body.toLowerCase() == "اصمت") || (event.body.toLowerCase() == "توقف") || (event.body.toLowerCase() == "ممنوع الكلام")) {
     return api.sendMessage("لما لا تغادر وتريحنا من وجودك بدل إسكات الجميع!", threadID);
   };

   if ((event.body.toLowerCase() == "تيتسويا") || (event.body.toLowerCase() == "ريم")) {
     return api.sendMessage("عائلتي 🍯", threadID);
   };

   if ((event.body.toLowerCase() == "malik se bakchodi") || (event.body.toLowerCase() == "malik se backchodi") || (event.body.toLowerCase() == "malkin se bakchodi") || (event.body.toLowerCase() == "malkin se backchodi")) {
     return api.sendMessage("srry malik maaf kr do ab nhi kruga 🥺🙏", threadID);
   };

   if ((event.body.toLowerCase() == "gund") || (event.body.toLowerCase() == "gand") || (event.body.toLowerCase() == "lund") || (event.body.toLowerCase() == "land")) {
     return api.sendMessage("Gand m jyada khujli h toh banana 🍌 under le le. :))))", threadID);
   };

   if ((event.body.toLowerCase() == "chumma de") || (event.body.toLowerCase() == "kiss me")) {
     return api.sendMessage("️Basanti, Kutto ko kiss Nhi Karta. Muh Dhoke Phir Bolna. Sakal Accha nhi laga tumhara", threadID);
   };

   if ((event.body.toLowerCase() == "nice") || (event.body.toLowerCase() == "thank you") || (event.body.toLowerCase() == "thank you bot") || (event.body.toLowerCase() == "thank you maliha")) {
     return api.sendMessage("️M hu hi itni Acchi. sab log Tarref karta h meri.", threadID);
   };

   if ((event.body.toLowerCase() == "😡") || (event.body.toLowerCase() == "😤") || (event.body.toLowerCase() == "😠") || (event.body.toLowerCase() == "🤬") || (event.body.toLowerCase() == "😾")) {
     return api.sendMessage("العصبية تسبب التجاعيد و الشيخوخة المبكرة عليك الإسترخاء ", threadID);
   };

   if ((event.body.toLowerCase() == "همم") || (event.body.toLowerCase() == "هممم")) {
     return api.sendMessage("️توقف عن الهمهمة كالمغفل وقل شيئا !", threadID);
   };

   if ((event.body.toLowerCase() == "اسم") || (event.body.toLowerCase() == "إسم") || (event.body.toLowerCase() == "nam")) {
     return api.sendMessage("️إسمي ريمو انا بوت للحصول على قائمة الأوامر اكتب : .مساعدة", threadID);
   };

   if ((event.body.toLowerCase() == "bot k bacche") || (event.body.toLowerCase() == "bot ke bacche")) {
     return api.sendMessage("️meri baccha toh Tumhare Pet m H.", threadID);
   };

   if ((event.body.toLowerCase() == "pic do") || (event.body.toLowerCase() == "photo do")) {
     return api.sendMessage("️m toh Andha Hu Dekh nhi sakti", threadID);
   };

   if ((event.body.toLowerCase() == "surya kon ha") || (event.body.toLowerCase() == "hhhshhdhdhdhsh")) {
     return api.sendMessage("️Kiss Randi Ka Name Le Ke Mood Khrab Kr Diya.🙄 Dubara Naam Mat Lena Iska", threadID);
   };

   if ((event.body.toLowerCase() == "bot banake do") || (event.body.toLowerCase() == "mujhe bhi chaiye")) {
     return api.sendMessage("️Khud hi karlona. tumhe kya kuch nhi ata h?", threadID);
   };

   if ((event.body.toLowerCase() == "🙂") || (event.body.toLowerCase() == "🙃")) {
     return api.sendMessage("️إبتسامتك غريبة هل تخفي شيئا؟", threadID);
   };

   if ((event.body.toLowerCase() == "😒") || (event.body.toLowerCase() == "🙄")) {
     return api.sendMessage("ما الذي تبحث عنه هنا وهناك!؟", threadID);
   };

   if ((event.body.toLowerCase() == "nobody loves me") || (event.body.toLowerCase() == "nobody love me") || (event.body.toLowerCase() == "koi pyar nhi karta")) {
     return api.sendMessage("️M Hu Na bby, Meri Pas Aoo M Pyar Karunga☺️", threadID);
   };

   if ((event.body.toLowerCase() == "🤦🏻‍♂️") || (event.body.toLowerCase() == "🤦🏻‍♀")) {
     return api.sendMessage("!لا تضرب نفسك...دعني اقوم بذلك من أجلك 👊🏻", threadID);
   };

   if ((event.body.toLowerCase() == "😂") || (event.body.toLowerCase() == "😁") || (event.body.toLowerCase() == "😆") || (event.body.toLowerCase() == "🤣") || (event.body.toLowerCase() == "😸") || (event.body.toLowerCase() == "😹")) {
     return api.sendMessage("أتمنى دوام ابتسامتك الجميلة", threadID);
   };

   if ((event.body.toLowerCase() == "💝") || (event.body.toLowerCase() == "💖") || (event.body.toLowerCase() == "🤍") || (event.body.toLowerCase() == "💔")) {
     return api.sendMessage("هذه القلوب تجعل البشر مثيرين للشفقة!", threadID);
   };

   if ((event.body.toLowerCase() == "kese ho") || (event.body.toLowerCase() == "kaise ho") || (event.body.toLowerCase() == "kese ho ji") || (event.body.toLowerCase() == "how are you") || (event.body.toLowerCase() == "how are you?")) {
     return api.sendMessage("M Tabhi Accha hota hu, Jab Apko Hasta Huye Dekhta hu☺️", threadID);
   };

   if ((event.body.toLowerCase() == "هل انت حزين") || (event.body.toLowerCase() == "ريمو هل انت حزين")) {
     return api.sendMessage("لماذا  قد احزن وانا لدي عائلة كهذه حولي تحبني 🍯", threadID);
   };

   if ((event.body.toLowerCase() == "does the bot love you") || (event.body.toLowerCase() == "does the bot love you")) {
     return api.sendMessage("Yes I love you and everyone so much", threadID);
   };

   if ((event.body.toLowerCase() == "تصبحون على خير") || (event.body.toLowerCase() == "تصبح على خير")) {
     return api.sendMessage("وأنت بألف خير...أحلام سعيدة وكوابيس بعيدة...", threadID);
   };

   if ((event.body.toLowerCase() == "جائع") || (event.body.toLowerCase() == "طعام")) {
     return api.sendMessage("انا جائع هل يمكنك إعداد بعض الطعام من أجلي؟", threadID);
   };

   if ((event.body.toLowerCase() == "ريمو هل تحبني ") || (event.body.toLowerCase() == "شين هل تحبني ")) {
     return api.sendMessage("أنا بوت لا يمكنني ان احب", threadID);
   };

   if ((event.body.toLowerCase() == "صديق") || (event.body.toLowerCase() == "اصدقاء")) {
     return api.sendMessage("هل يمكنني الحصول على أصدقاء ؟", threadID);
   };
   mess = "{name}"

  if (event.body.indexOf("هارلي") == 0 || (event.body.indexOf("هارلي") == 0)) {
    var msg = {
      body: `${name}, ${rand}`
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }
