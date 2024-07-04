import { createContext, useState } from "react";
import esMessages from "../Lenguajes/es.json";
import enMessages from "../Lenguajes/en.json";
import { IntlProvider } from "react-intl";

// creamos el contexto
export const TranslationContext = createContext();
const messageContext ={
    es: esMessages,
    en: enMessages,
};


// le damos el valor al contexto
const TranslationProvider =({children}) => {
    const [locale, setLocale] = useState("es") // lenguaje seleccionado por el usuario
    const [messages, setMessages] = useState (messageContext.es); // el contenido del JSON que corresponda con el lenguaje

    // para que cambie el lenguaje

    const changeLocale =(newLanguaje)=>{
        setLocale(newLanguaje);
        setMessages(messageContext[newLanguaje]);
    };


return (

<TranslationContext.Provider value ={{changeLocale, locale}}>
<IntlProvider locale ={locale} messages={messages}>
{children} {/*/<App/>*/}

</IntlProvider>

</TranslationContext.Provider>
);
};

export default  TranslationProvider;