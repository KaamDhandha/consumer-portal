importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
);

const firebaseConfig = {
    apiKey: "AIzaSyDZx_sZErAKHhQhX1SSJ6cDcifiSoM616I",
    authDomain: "kaam-dhandha-d1186.firebaseapp.com",
    projectId: "kaam-dhandha-d1186",
    storageBucket: "kaam-dhandha-d1186.appspot.com",
    messagingSenderId: "258444896543",
    appId: "1:258444896543:web:1bee6ff38b51df1c0ae82a",
    measurementId: "G-SLGT1XLECK"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.image,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});