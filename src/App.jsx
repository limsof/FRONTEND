import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes  } from "react-router-dom";
import Login from "./componentes/Login";


import { Administrador } from "./componentes/administrador";

import App12 from "./DifuntosApp";
import Clientess from "./componentes/cliente";

function App() {
  const [activeComponent, setActiveComponent] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState(null); 

  const handleLoginSuccess = (id) => {
    setIsLoggedIn(true); // Actualiza el estado cuando el usuario inicia sesión correctamente
    setUserId(id); 
  };


  return (
    <BrowserRouter>
      <div>
            {!isLoggedIn && ( 
              <Routes>
              <Route exact path="/" element={<Login onLoginSuccess={handleLoginSuccess} />} />
              </Routes>
            )}   
            {isLoggedIn && ( 
              <>                       
          <Routes>
         
              <Route path="/administrador/*" element={<Administrador />} />

              <Route path="/cliente" element={<Cliente userId={userId} />} />

              <Route path="/administrador/difuntos/*" element={<App12 />} />
   

          </Routes>                    
                </>
            )}
      </div>
    </BrowserRouter>
  );
}
export default App;