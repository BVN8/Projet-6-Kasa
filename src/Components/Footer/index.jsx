import logoblanc from "../../assets/logoblanc.png";
import "../../style/footer.scss";

function Footer () {
    return (
        <div className="FooterContainer">
            <img className="StyleLogo" src={logoblanc} alt="logo kasa blanc"/>
            <p className="PagePar">© 2020 Kasa. All rights reserved</p>
        </div>
    )
}

export default Footer;