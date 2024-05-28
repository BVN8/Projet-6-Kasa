import logoblanc from "../../assets/logoblanc.png";
import "../../style/footer.scss";

function Footer() {
    return (
      <footer>
        <img src={logoblanc} alt="Logo Kasa"/>
        <p>© 2020 Kasa. All rights reserved</p>
      </footer>
    )
  }
  
export default Footer;