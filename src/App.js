import React, { useState } from "react";
import AppRoutes from "./routes/AppRoutes";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'; // Importe o arquivo CSS onde está a classe dark-theme

function App() {
  const [isModoNoturno, setIsModoNoturno] = useState(false);

  const mudarTema = () => {
    setIsModoNoturno(!isModoNoturno);
  };

  return (
    <div className={isModoNoturno ? "dark-theme" : ""}>
      <AppRoutes isModoNoturno={isModoNoturno} mudarTema={mudarTema} />
    </div>
  );
}

export default App;
