import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { app, analytics } from './firebaseConfig';
import { getMessaging, onMessage } from 'firebase/messaging';
import { getAuth,signInAnonymously } from 'firebase/auth';
// Inicializa Firebase Messaging
const messaging = getMessaging(app);

// Escucha mensajes en primer plano
onMessage(messaging, (payload) => {
  console.log('Mensaje recibido en primer plano:', payload);
  // Aquí puedes manejar el mensaje o mostrar una notificación personalizada
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
