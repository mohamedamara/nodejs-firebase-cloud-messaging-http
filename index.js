// import Axios HTTP client
const axios = require("axios");

// SERVER_KEY can be found in firebase configuration
const SERVER_KEY = "YOUR_SERVER_KEY";

// the DEVICE_TOKEN is auto generated on every device
const DEVICE_TOKEN = "YOUR_DEVICE_TOKEN";

axios({
  url: "https://fcm.googleapis.com/fcm/send",
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: `key=${SERVER_KEY}`,
  },
  data: {
    to: DEVICE_TOKEN,
    notification: {
      title: "Demande d'absence",
      body: "Votre demande a été validée.",
    },
  },
});
