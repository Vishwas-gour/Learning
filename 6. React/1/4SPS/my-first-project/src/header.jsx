import Nav from "./nav.jsx";
import './header.css'
function Header() {
  return (
    <header className="header">
      <Nav />
    
      <div className="detail">
        <h1 className="caption">Portraits that heal</h1>
        <h3 className="sub-caption">
          SEEKING MINDFULNESS THROUGH PHOTOGRAPHY </h3>
      </div>
    </header>
  );
}
export default Header;