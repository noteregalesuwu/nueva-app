importScripts('https://www.gstatic.com/firebasejs/11.0.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/11.0.1/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "xxx",
  authDomain: "xxx",
  projectId: "xx",
  storageBucket: "xxxx",
  messagingSenderId: "xxx",
  appId: "xxxxx",
  measurementId: "xxxx"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Recibiste una notificación push:', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/img/pwa/nutria-chambeadora-192.png',
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});
