// requestPermission.js
import { getMessaging, getToken } from 'firebase/messaging';
import { app } from './../firebaseConfig';

const messaging = getMessaging(app);

export const requestPermission = async () => {
  try {
    const token = await getToken(messaging, {
      vapidKey: 'xxxx' 
    });
    if (token) {
      console.log('Token de notificación:', token);
      alert('Permiso concedido para notificaciones!');
    }
  } catch (error) {
    console.error('Error al obtener el token:', error);
  }
};
