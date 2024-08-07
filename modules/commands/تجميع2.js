module.exports.config = {
  name: "تركيب",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "عبدالرحمن",
  description: "لعبة تجميع الكلمة",
  usages: ["لعبة"],
  commandCategory: "العاب",
  cooldowns: 0
};

const questions = [
      { question: "ا ل ظ ل ا م", answer: "الظلام" },
      { question: "ا ل س ع ا د ة", answer: "السعادة" },
      { question: "ا ل ش ج ا ع ة", answer: "الشجاعة" },
      { question: "ا ل ص د ا ق ة", answer: "الصداقة" },
      { question: "ا ل ن ص ر", answer: "النصر" },
      { question: "ا ل أ ب ط ا ل", answer: "الأبطال" },
      { question: "ا ل م غ ا م ر ة", answer: "المغامرة" },
      { question: "ا ل ت ح د ي", answer: "التحدي" },
      { question: "ا ل س ل ا م", answer: "السلام" },
      { question: "ا ل أ م ل", answer: "الأمل" },
      { question: "ا ل ق و ة", answer: "القوة" },
      { question: "ا ل ع د ا ل ة", answer: "العدالة" },
      { question: "ا ل م ص ي ر ة", answer: "المصيرة" },
      { question: "ا ل ش ر", answer: "الشر" },
      { question: "ا ل ح ب", answer: "الحب" },
      { question: "ا ل ق د ر", answer: "القدر" },
      { question: "ن ا ر و ت و", answer: "ناروتو" },
      { question: "س ا س و ك ي", answer: "ساسكي" },
      { question: "ل و ف ي", answer: "لوفي" },
      { question: "د ر ا ج و ن ب و ل", answer: "دراغون بول" },
      { question: "غ و ك و", answer: "غوكو" },
      { question: "ب ل ي ت ش", answer: "بليتش" },
      { question: "إ ت ش ي غ و", answer: "إتشيغو" },
      { question: "ا ل ك ي م ي اء ا ل م ت ج و ل", answer: "الكيميائي المتجول" },
      { question: "ف و ل م ت ل", answer: "فولمتل" },
      { question: "س ا ي ا", answer: "سايا" },
      { question: "ك و ن ا ن", answer: "كونان" },
      { question: "ش ي ن ت ش ي", answer: "شينتشي" },
      { question: "م ي ك ا س ا", answer: "ميكاسا" },
      { question: "ا ل ه ج و م ع ل ى ا ل ع م ا ل ق", answer: "الهجوم على العمالقة" },
      { question: "إ ر ي ن", answer: "إرين" },
      { question: "ل ا ي ت", answer: "لايت" },
      { question: "د ي ث ن و ت", answer: "ديث نوت" },
      { question: "ن ا ت س و", answer: "ناتسو" },
      { question: "ف ي ر ي ت ا ي ل", answer: "فيري تيل" },
      { question: "ل و ك ي", answer: "لوكي" },
      { question: "ه ا ت س و ن م ي ك و", answer: "هاتسون ميكو" },
      { question: "س و ل  ا ي ت ي ر", answer: "سول إيتير" },
      { question: "م ا ك ا", answer: "ماكا" },
      { question: "ا ل ر و ح", answer: "الروح" },
      { question: "ا ل س ي ف", answer: "السيف" },
      { question: "ا ل ق ل ب", answer: "القلب" },
      { question: "ا ل ع ق ل", answer: "العقل" },
      { question: "ا ل ر و م ا ن س ي ة", answer: "الرومانسية" },
      { question: "ا ل م و ت", answer: "الموت" },
      { question: "ا ل إ ن ت ق ا م", answer: "الانتقام" },
      { question: "ا ل خ ل ود", answer: "الخلود" },
      { question: "ا ل ف ر ح", answer: "الفرح" },
      { question: "ا ل ح ز ن", answer: "الحزن" },
      { question: "ا ل ك ف ا ح", answer: "الكفاح" },
      { question: "ا ل م ص ي ر", answer: "المصير" },
      { question: "ا ل ش ر ا ك ة", answer: "الشراكة" },
      { question: "ا ل ص ب ر", answer: "الصبر" },
      { question: "ا ل ق و ة ا ل خ ا ر ق ة", answer: "القوة الخارقة" },
      { question: "ا ل س ي ا س ة", answer: "السياسة" },
      { question: "ا ل ت ض ح ي ة", answer: "التضحية" },
      { question: "ا ل م غ ف ر ة", answer: "المغفرة" },
      { question: "ا ل ك ر ا ه ي ة", answer: "الكراهية" },
      { question: "ا ل م و ل و د ا ل ج د ي د", answer: "المولود الجديد" },
      { question: "ا ل إ ب د ا ع", answer: "الإبداع" },
      { question: "ا ل ب ط و ل ة", answer: "البطولة" },
      { question: "ا ل م ع ج ز", answer: "المعجزة" },
      { question: "ا ل ح ر ب", answer: "الحرب" },
      { question: "ا ل ت ج س س", answer: "التجسس" },
      { question: "ا ل ح ي ا ة", answer: "الحياة" },
      { question: "ا ل ط ب ي ع ة", answer: "الطبيعة" },
      { question: "ا ل ز م ن", answer: "الزمن" },
      { question: "ا ل خ ي ا ل", answer: "الخيال" },
      { question: "ا ل ق ل ق", answer: "القلق" },
      { question: "ا ل أ ح ل ا م", answer: "الأحلام" },
      { question: "ا ل ن و ر", answer: "النور" },
      { question: "ا ل س ي ف ا ل ق ا ط ع", answer: "السيف القاطع" },
      { question: "ا ل د ر ع", answer: "الدرع" },
      { question: "ا ل ت ن ي ن", answer: "التنين" },
      { question: "ا ل ف ر ا س ة", answer: "الفراسة" },
      { question: "ا ل س ي ا ف", answer: "السياف" },
      { question: "ا ل م غ ا ز ل", answer: "المغازل" },
      { question: "ا ل م ع ل م", answer: "المعلم" },
      { question: "ا ل ت ن ك ن و ج ي", answer: "التكنوجي" },
      { question: "ا ل خ ي ا ن ة", answer: "الخيانة" },
      { question: "ا ل غ د ر", answer: "الغدر" },
      { question: "ا ل إ ب د ا ع", answer: "الإبداع" },
      { question: "ا ل ف ر ا ش ة", answer: "الفراشة" },
      { question: "ا ل ب ج ع ة", answer: "البجعة" },
      { question: "ا ل أ م ي ر", answer: "الأمير" },
      { question: "ا ل أ م ي ر ة", answer: "الأميرة" },
      { question: "ا ل م ل ك", answer: "الملك" },
      { question: "ا ل م ل ك ة", answer: "الملكة" },
      { question: "ا ل ش ي ط ا ن", answer: "الشيطان" },
      { question: "ا ل م ل ا ئ ك ة", answer: "الملائكة" },
      { question: "ا ل ج ن", answer: "الجن" },
      { question: "ا ل ش ع و ذ ة", answer: "الشعوذة" },
      { question: "ا ل س ح ر", answer: "السحر" },
      { question: "ا ل ع ن ك ب و ت", answer: "العنكبوت" },
      { question: "ا ل خ ب ي ث", answer: "الخبيث" },
      { question: "ا ل ز ر ا ف ة", answer: "الزرافة" },
      { question: "ا ل ف ي ل", answer: "الفيل" },
      { question: "ا ل ت م س ا ح", answer: "التمساح" },
      { question: "ا ل ن م ر", answer: "النمر" },
  // Add more questions as per your list
];

// Object to store user points
let userPoints = {};

module.exports.handleReply = async function ({ api, event, handleReply, Currencies }) {
  const userAnswer = event.body.trim().toLowerCase();
  const correctAnswer = handleReply.correctAnswer.toLowerCase();
  const userName = global.data.userName.get(event.senderID) || await Users.getNameUser(event.senderID);

  if (userAnswer === correctAnswer) {
      // Increase user's points
      if (!userPoints[event.senderID]) {
          userPoints[event.senderID] = 0;
      }
      userPoints[event.senderID] += 1;

      // Check if the user has reached 20 points
      if (userPoints[event.senderID] >= 20) {
          // Announce winner and award $2000
          api.sendMessage(`تهانينا ${userName}! لقد فزت باللعبة وحصلت على جائزة قدرها 2000 دولار.`, event.threadID);
          Currencies.increaseMoney(event.senderID, 2000);
          // Reset game for new round
          userPoints = {};
      } else {
          // Inform user of correct answer and current points
          api.sendMessage(`تهانينا ${userName}! إجابتك صحيحة. لديك الآن ${userPoints[event.senderID]} نقطة.`, event.threadID);
      }

      // Remove the question message
      api.unsendMessage(handleReply.messageID); 
  } else {
      api.sendMessage(`خطأ! حاول مرة أخرى.`, event.threadID);
  }
};

module.exports.run = async function ({ api, event, args }) {
  const randomQuestion = questions[Math.floor(Math.random() * questions.length)];
  const correctAnswer = randomQuestion.answer;
  const question = randomQuestion.question;

  const message = `اسرع شخص يجمع كلمة: ${question}`;

  api.sendMessage({ body: message }, event.threadID, (error, info) => {
      if (!error) {
          global.client.handleReply.push({
              name: this.config.name,
              messageID: info.messageID,
              correctAnswer: correctAnswer
          });
      }
  });
};