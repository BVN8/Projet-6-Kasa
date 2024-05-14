import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import styled from "styled-components";

const StyleLogo = styled.img`
  height: 45px;
`;

const NavContainer = styled.nav`
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  padding-right: 55px;
  color: black;
  font-weight: bold;
`;

function Header() {
  return (
    <NavContainer>
      <Link to="/">
        <StyleLogo src={logo} alt="logo kasa saumon" />{" "}
      </Link>
      <div>
        <StyledLink to="/">Accueil</StyledLink>
        <StyledLink to="/apropos">A propos</StyledLink>
      </div>
    </NavContainer>
  );
}

export default Header;
