import { FormattedMessage } from 'react-intl';

function Header() {

    const user = "Walter!";

  return (
    <div className='text'>
      <h1>
        <FormattedMessage 
        id="app.header" 
        defaultMessage={"Hola mundo!"}/>
      </h1>
      <p>
        <FormattedMessage 
        id="app.user" 
        defaultMessage={"bienvenido"} values={{user}}/>
      </p>
    </div>
  );
}

export default Header;
