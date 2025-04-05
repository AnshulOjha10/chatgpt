import React, { useState } from 'react';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  const [view, setView] = useState(null);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      {!view && (
        <>
          <button onClick={() => setView('login')}>Login</button>
          <button onClick={() => setView('signup')}>Signup</button>
        </>
      )}
      {view === 'login' && <Login />}
      {view === 'signup' && <Signup />}
    </div>
  );
}

export default App;