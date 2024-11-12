import React, { useEffect } from 'react';
import { requestPermission } from './RequestPermissions'; 
const Index = () => {
  useEffect(() => {
    requestPermission();
  }, []);

  return (
    <div>
      <h1>Bienvenido a Nutrias Chambeadoras App</h1>
      <p>Gestiona tus eventos y notificaciones.</p>
      <button onClick={requestPermission}>Permitir Notificaciones</button>
    </div>
  );
};

export default Index;
