import "./header.css";

const Header = () => {
  return (
    <span onClick={() => window.scroll(0, 0)} className="header">
      🎬 Cine maaa 🎥
    </span>
  );
};

export default Header;