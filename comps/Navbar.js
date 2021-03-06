import Link from "next/link";

const Navbar = () => (
  <nav className="navbar navbar-expand navbar-dark bg-dark mb-4">
    <div className="container">
      <a className="navbar-brand" href="#" />
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav l-auto">
          <li className="nav-item">
            <Link href="/">
              <a className="nav-link">Home</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/about">
              <a className="nav-link">About</a>
            </Link>
            <li className="nav-item">
              <Link href="/bars">
                <a className="nav-link">Bars</a>
              </Link>
              <li className="nav-item">
                <Link href="/signin">
                  <a className="nav-link">Sign In</a>
                </Link>
              </li>
            </li>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;
