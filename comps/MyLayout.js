// import Header from "./Header";

// const layoutStyle = {
//   margin: 20,
//   padding: 20,
//   border: "1px solid #DDD"
// };

// const Layout = props => (
//   <div style={layoutStyle}>
//     <Header />
//     {props.children}
//   </div>
// );

// export default Layout;
//1/24
import Head from "next/head";
import Navbar from "./Navbar";

const MyLayout = props => (
  <div>
    <Head>
      <title>CHEERS</title>
      <link
        rel="stylesheet"
        href="https://bootswatch.com/4/journal/bootstrap.min.css"
      />
    </Head>
    <Navbar />
    <div className="container">{props.children}</div>
  </div>
);

export default MyLayout;
