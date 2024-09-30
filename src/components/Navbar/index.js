import React from 'react'; // Import React
import { useTheme } from 'styled-components'; // Import useTheme from styled-components
import { DiCssdeck } from 'react-icons/di'; // Import icons
import { FaBars } from 'react-icons/fa';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  Span,
  NavItems,
  NavLink,
  GitHubButton,
  ButtonContainer,
  MobileIcon,
  MobileMenu,
  MobileLink
} from './NavbarStyledComponent'; // Import your styled components
import { Bio } from '../../data/constants'; // Ensure correct path for Bio object

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false); // State to handle mobile menu open/close
  const theme = useTheme(); // Access the current theme

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo href='#about'>
          <a style={{ display: "flex", alignItems: "center", color: "white", cursor: 'pointer' }}>
            <DiCssdeck size="3rem" /> <Span>SAKSHI PAWAR</Span>
          </a>
        </NavLogo>
        <MobileIcon onClick={() => setIsOpen(!isOpen)}>
          <FaBars />
        </MobileIcon>
        <NavItems>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </NavItems>
        <ButtonContainer>
  <a
    href="https://www.linkedin.com/in/sakshi-pawar04"  // Replace with your actual LinkedIn URL
    target="_blank"   // Opens in a new tab
    rel="noopener noreferrer"   // Security measure for external links
  >
    <GitHubButton>LinkedIn Profile</GitHubButton>
  </a>
</ButtonContainer>

{/* Mobile Menu */}
{isOpen && (
  <MobileMenu isOpen={isOpen}>
    <MobileLink href="#about" onClick={() => setIsOpen(false)}>About</MobileLink>
    <MobileLink href="#skills" onClick={() => setIsOpen(false)}>Skills</MobileLink>
    <MobileLink href="#experience" onClick={() => setIsOpen(false)}>Experience</MobileLink>
    <MobileLink href="#projects" onClick={() => setIsOpen(false)}>Projects</MobileLink>
    <MobileLink href="#contact" onClick={() => setIsOpen(false)}>Contact</MobileLink>
    <a
      href="https://www.linkedin.com/in/sakshi-pawar04"  // Use the same LinkedIn URL
      target="_blank"
      rel="noopener noreferrer"
    >
      <GitHubButton
        style={{ padding: '10px 16px', background: theme.primary, color: 'white', width: 'max-content' }}
      >
        LinkedIn Profile
      </GitHubButton>
    </a>
  </MobileMenu>
)}
</NavbarContainer>
</Nav>

  );
};

export default Navbar;
