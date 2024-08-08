const fs = require("fs");
const path = require("path");

module.exports.config = {
  name: "هارلي", // اسم الأمر
  version: "1.1.1", // نسخة الأمر
  hasPermission: 0, // مستوى الإذن المطلوب لاستخدام الأمر
  credits: "Yin", // المؤلف
  description: "ابدأ محادثة مع هارلي", // وصف الأمر
  usePrefix: false, // تفعيل استخدام البادئة
  allowPrefix: true, // السماح باستخدام البادئة حتى إذا كان usePrefix غير مفعل
  commandCategory: "chatbots", // فئة الأمر
  usages: "التحدث مع البوت", // كيفية استخدام الأمر
  cooldowns: 2, // الوقت بالثواني بين الاستخدامات
};

global.ENABLE_CHAT = true; // حالة التحدث مع البوت
const DATA_FILE = path.join(__dirname, "H.json"); // مسار ملف البيانات

module.exports.onLoad = () => {
  // التحقق مما إذا كان ملف البيانات موجودًا، وإن لم يكن موجودًا، قم بإنشائه
  if (!fs.existsSync(DATA_FILE)) {
    fs.writeFileSync(DATA_FILE, JSON.stringify({ responses: {} }, null, 4), "utf-8");
  }
};

module.exports.handleEvent = ({ event, api }) => {
  const { threadID, messageID, body } = event;
  if (!global.ENABLE_CHAT || !body) return; // تحقق مما إذا كان التحدث مفعلًا

  const content = body.toLowerCase(); // تحويل المحتوى إلى أحرف صغيرة
  try {
    const dataJson = JSON.parse(fs.readFileSync(DATA_FILE, "utf-8")); // قراءة البيانات من الملف
    const responses = dataJson.responses || {}; // الحصول على الردود
    let respond = responses[content]; // الحصول على الرد المناسب

    if (Array.isArray(respond)) {
      respond = respond[Math.floor(Math.random() * respond.length)]; // اختيار رد عشوائي إذا كان هناك أكثر من رد
    }

    api.sendMessage(respond || "", threadID, messageID); // إرسال الرد
  } catch (error) {
    console.error(error); // تسجيل الخطأ
    api.sendMessage("حدث خطأ أثناء معالجة الطلب.", threadID, messageID); // إرسال رسالة خطأ للمستخدم
  }
};

module.exports.run = ({ event, api, args, permission }) => {
  const { threadID, messageID } = event;
  const content = args.join(" ").trim().toLowerCase(); // دمج الحجة وتحويلها إلى أحرف صغيرة

  if (args[0] === "تشغيل" || args[0] === "إيقاف") {
    // تشغيل أو إيقاف التحدث مع البوت
    if (permission == 0) return api.sendMessage("أنت غير مخول لاستخدام هذه الوظيفة!", threadID, messageID);

    global.ENABLE_CHAT = args[0] === "تشغيل"; // تعيين حالة التحدث
    return api.sendMessage(`تم ${global.ENABLE_CHAT ? "تفعيل" : "إيقاف"} وضع التحدث مع البوت.`, threadID, messageID);
  }

  if (!content) return api.sendMessage("يرجى كتابة رسالة...", threadID, messageID); // تحقق من وجود محتوى

  try {
    const dataJson = JSON.parse(fs.readFileSync(DATA_FILE, "utf-8")); // قراءة البيانات من الملف
    const responses = dataJson.responses || {}; // الحصول على الردود
    let respond = "";

    if (content.startsWith("إضافة = ")) {
      // إضافة رد جديد
      if (permission == 0) return api.sendMessage("أنت غير مخول لاستخدام وظيفة الإضافة!", threadID, messageID);

      const switchCase = content.substring(8).toLowerCase();
      global.config.ADD_FUNCTION = switchCase === "تشغيل";
      respond = `تم ${global.config.ADD_FUNCTION ? "تفعيل" : "تعطيل"} وظيفة الإضافة.`;
    } else if (content.startsWith("مسح = ")) {
      // مسح رد موجود
      if (permission == 0) return api.sendMessage("أنت غير مخول لاستخدام وظيفة الحذف.", threadID, messageID);

      const switchCase = content.substring(6).toLowerCase();
      global.config.DEL_FUNCTION = switchCase === "تشغيل";
      respond = `تم ${global.config.DEL_FUNCTION ? "تفعيل" : "تعطيل"} وظيفة الحذف.`;
    } else if (content.includes("=!")) {
      // مسح رد معين
      if (!global.config.DEL_FUNCTION) return api.sendMessage("وظيفة الحذف معطلة حاليًا.", threadID, messageID);

      const [word, response] = content.split("=!").map(item => item.trim());
      const lowercaseWord = word.toLowerCase();

      if (responses[lowercaseWord]) {
        if (response) {
          const index = responses[lowercaseWord].indexOf(response);
          if (index !== -1) {
            responses[lowercaseWord].splice(index, 1);
            if (responses[lowercaseWord].length === 0) delete responses[lowercaseWord];
            respond = `تم حذف الرد "${response}" من الكلمة "${word}" بنجاح.`;
          } else {
            respond = `الرد "${response}" غير موجود في الكلمة "${word}".`;
          }
        } else {
          delete responses[lowercaseWord];
          respond = `تم حذف جميع الردود للكلمة "${word}" بنجاح.`;
        }
      } else {
        respond = `الكلمة "${word}" غير موجودة في الردود.`;
      }
    } else if (content.includes("=>")) {
      // إضافة رد جديد للكلمة
      if (!global.config.ADD_FUNCTION) return api.sendMessage("وظيفة الإضافة معطلة حاليًا.", threadID, messageID);

      const [word, ...responseArray] = content.split("=>").map(item => item.trim());
      const response = responseArray.join("=>").trim();
      const lowercaseWord = word.toLowerCase();

      if (word && response) {
        responses[lowercaseWord] = responses[lowercaseWord] || [];
        if (!responses[lowercaseWord].includes(response)) {
          responses[lowercaseWord].push(response);
          respond = `تمت إضافة "${word}" ككلمة جديدة مع الرد: "${response}".`;
        } else {
          respond = `الرد "${response}" موجود بالفعل للكلمة "${word}".`;
        }
      }
    } else {
      // الرد على الرسائل التي تتطابق مع الكلمات المخزنة
      respond = responses[content];
      if (Array.isArray(respond)) {
        respond = respond[Math.floor(Math.random() * respond.length)];
      }
    }

    api.sendMessage(respond || "", threadID, messageID); // إرسال الرد

    dataJson.responses = responses;
    fs.writeFileSync(DATA_FILE, JSON.stringify(dataJson, null, 4), "utf-8"); // تحديث ملف البيانات
  } catch (error) {
    console.error(error); // تسجيل الخطأ
    api.sendMessage("حدث خطأ أثناء معالجة الطلب.", threadID, messageID); // إرسال رسالة خطأ للمستخدم
  }
};
