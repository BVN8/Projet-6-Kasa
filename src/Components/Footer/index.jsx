import styled from "styled-components";
import logoblanc from "../../assets/logoblanc.png";

const FooterContainer = styled.div`
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
`;

const PagePar = styled.p`
  color: white;
  padding-top: 15px;
`;

const StyleLogo = styled.img`
  height: 30px;
  padding-bottom: 15px;
  padding-top: 10px;
`;

function Footer () {
    return (
        <FooterContainer>
            <StyleLogo src={logoblanc} alt="logo kasa blanc"/>
            <PagePar>© 2020 Kasa. All rights reserved</PagePar>
        </FooterContainer>
    )
}

export default Footer;