// import Link from "next/link";

// const linkStyle = {
//   marginRight: 15
// };

// const Header = () => (
//   <div>
//     <Link href="/">
//       <button style={linkStyle}>Home</button>
//     </Link>
//     <Link href="/about">
//       <button style={linkStyle}>About</button>
//     </Link>
//     <Link href="/bars">
//       <button style={linkStyle}>Bars</button>
//     </Link>
//     <Link href="/signin">
//       <button style={linkStyle}>Sign in</button>
//     </Link>
//   </div>
// );

// export default Header;

//josh
import Header from "./Header";

const Layout = props => (
  <div>
    <h1>
      <title>Cheers!</title>
      <link
        rel="stylesheet"
        href="https://bootswatch.com/4/minty/bootstrap.min.css"
      />
    </h1>
    <div className="container">
      <div />
      {/* </div> "style"={"layoutStyle"}> */}
      <Header />
      {props.children}
    </div>
  </div>
);

export default Layout;
