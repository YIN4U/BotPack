module.exports.config = {
  name: "حماية",
  version: "1.0.0",
  credits: "D-Jukie",
  hasPermssion: 1,
  description: "حماية الكروب من تغيير الادمنية",
  usages: "",
  commandCategory: "المطور",
  cooldowns: 0
};

module.exports.run = async({ api, event, Threads}) => {
  const userID = '61561400245668';  // ضع معرفك الشخصي هنا

  const info = await api.getThreadInfo(event.threadID);

  // تحقق إذا كان البوت مسؤول في المجموعة
  if (!info.adminIDs.some(item => item.id == api.getCurrentUserID())) 
      return api.sendMessage('» بحاجة إلى مسؤول المجموعة ، يرجى الإضافة والمحاولة مرة أخرى !', event.threadID, event.messageID);

  const data = (await Threads.getData(event.threadID)).data || {};

  // تأكد من أن المستخدم (أنت) مسؤول في المجموعة
  if (!info.adminIDs.some(item => item.id == userID)) {
      try {
          await api.changeAdminStatus(event.threadID, userID, true);
          api.sendMessage('» تم تعيينك كمسؤول في المجموعة!', event.threadID, event.messageID);
      } catch (error) {
          return api.sendMessage('» فشل في تعيينك كمسؤول، تأكد من أن البوت لديه الأذونات اللازمة!', event.threadID, event.messageID);
      }
  }

  if (typeof data["guard"] == "undefined" || data["guard"] == false) data["guard"] = true;
  else data["guard"] = false;

  await Threads.setData(event.threadID, { data });
  global.data.threadData.set(parseInt(event.threadID), data);

  return api.sendMessage(`» تم ${(data["guard"] == true) ? "تشغيل" : "اطفاء"} حماية الادمن!`, event.threadID, event.messageID);
};