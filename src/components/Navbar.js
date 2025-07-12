const Navbar = () => {
  return (
    <nav className="nav-bar">
      <h1 className="m-2 text-support3 font-bold font-montserrat tracking-[0.2rem]">Mario Salinas</h1>
      <ul className="relative flex items-center justify-center text-support3 font-bold font-montserrat">
        <li className="li-nav"><a href="#home">Home</a></li>
        <li className="li-nav"><a href="#projects">Projects</a></li>
        <li className="li-nav"><a href="#about">About</a></li>
        <li className="li-nav"><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;