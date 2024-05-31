import "../../style/error.scss";
import logo404 from "../../assets/D_404.png";

function Error() {
  return (
    <nav className="error-page">
      <img className="StyleLogo" src={logo404} alt="logo 404"></img>
      <p className="error-phrase">
        Oups ! La page que vous demandez n'existe pas.
      </p>
      <div>
        <a href="/">Retourner sur la page d'accueil</a>
      </div>
    </nav>
  );
}

export default Error;
