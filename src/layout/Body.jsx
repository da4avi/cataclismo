import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function Body() {
  const [isModoNoturno, setIsModoNoturno] = React.useState(false);

  const mudarTema = () => {
      setIsModoNoturno(!isModoNoturno);
  };
  
  return (
    <>
      <Header isModoNoturno={isModoNoturno} mudarTema={mudarTema} />
      <Outlet />
      <Footer isModoNoturno={isModoNoturno} />
    </>
  );
}
