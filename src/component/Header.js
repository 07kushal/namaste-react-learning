const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img
          className="logo-img"
          src="https://marketplace.canva.com/EAFMvhEzAKw/1/0/1600w/canva-brown-simple-food-store-logo-LPHhlwzIoMQ.jpg"
        />
      </div>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">Home</li>
          <li className="nav-item">About Us</li>
          <li className="nav-item">Contact Us</li>
          <li className="nav-item">Cart</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
