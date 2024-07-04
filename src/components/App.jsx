import { useContext } from "react";
import { TranslationContext } from "../Context/intl.context";
import Header from "./Header/Header";

import "../scss/index.css";

function App() {

  const {changeLocale} = useContext(TranslationContext);
  const handleSelect =(ev) => {
    changeLocale(ev.target.value); // newLanguaje
  };

  return (
    <>
    <div className="header-container">

    <select name="" id="" onChange={handleSelect} className="language-select">

    <option value="es">Español</option>
    <option value="en">English</option>

    </select>
    </div>
    <Header/>
    </>

  );
}

export default App;
