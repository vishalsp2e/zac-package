exports.greet = function (name) {
  console.log("Hello your name is , " + name + "!");
};

exports.connect = async () => {
  const messageObject = {
    type: "OPEN_WALLET",
  };
  console.log("from frontend");
  await window.postMessage(messageObject, "*");
};

exports.sentData = async (e, id, names, assetDigest, enrollmentId) => {
  if (e) {
    e.preventDefault(); 
  }
  const message = {
    type: "OPEN_WALLET",
  };
  console.log("from frontend");
  await window.postMessage(message, "*");
  try {
    if (!id || !names || !assetDigest || !enrollmentId) {
      console.log(`details are missing`);
      return;
    }
    const formData = {
      type: "FORM_DATA",
      data: [
        `{"id":"${id}","docType":"ASSET-MYIPR","name":"${names}","type":"Real Estate","desc":"Real 1111111","status":"COMPLETED","assetDigest":"${assetDigest}","uri":"12345678914","account":["${enrollmentId}"],"location":"Dubai","address": "Jabelali"}`,
      ],
      id,
      assetDigest,
      name: names,
    };

    console.log(`Sending form data to content script for ID: ${id}`, formData);
    await window.postMessage(formData, "*");
  } catch (error) {
    console.error("Error sending data:", error);
  }
};
