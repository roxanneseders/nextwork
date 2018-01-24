// 1/24/18

// import Layout from "../comps/MyLayout.js";
// import Navbar from "../comps/Navbar.js";

//import Link from "next/link";
//import fetch from "isomorphic-unfetch";

//added 1/22
// //closed 1/24
// function getPosts() {
//   return [
//     { id: "Bars", title: "Come get your drink on" },
//     { id: "About-nextjs", title: "This is all about us" },
//     { id: "Signin.-nextjs", title: "Tell us about you" }
//   ];
// }
// const PostLink = ({ post }) => (
//   <li>
//     <Link as={`/p/${post.id}`} href={`/post?title=${post.title}`}>
//       <a>{post.title}</a>
//     </Link>
//   </li>
// );

//removed1/22
//const Index = props => (
// export default () => (
//   <Layout>
//     <h1>CHEERS</h1>
//     <ul>{getPosts().map(post => <PostLink key={post.id} post={post} />)}</ul>
//     <style jsx>{`
//       h1,
//       a {
//         font-family: "Arial";
//       }

//       ul {
//         padding: 0;
//       }

//       li {
//         list-style: none;
//         margin: 5px 0;
//       }

//       a {
//         text-decoration: none;
//         color: blue;
//       }

//       a:hover {
//         opacity: 0.6;
//       }
//     `}</style>
//   </Layout>
// );
//removed 1/22
// Index.getInitialProps = async function() {
//   const res = await fetch("https://api.tvmaze.com/search/shows?q=cheers");
//   const data = await res.json();

//   console.log(`Show data fetched. Count: ${data.length}`);

//   return {
//     shows: data
//   };
// };
// 1/24/18
// const Index = () => (
//   <div>
//     <Navbar />
//     <h1>CHEERS</h1>
//   </div>
// );

// export default Index;

//added1/24/18import Fetch from 'isomorphic-unfetch';
//import Fetch from "isomorphic-unfetch";
import Layout from "../comps/MyLayout";

//import Prices from "../components/Prices";

const Index = props => (
  <Layout>
    <div>
      <h1>Cheers</h1>
      <p>Where do you want togo</p>
    </div>
  </Layout>
);

// Index.getInitialProps = async function() {
//   const res = await fetch(
//     "https://api.yelp.com/v3/businesses/search?categories=nightlife&term=&latitude=33.5585307&longitude=-111.88668"
//   );
//   const data = await res.json();

//   return {
//     bpi: data.bpi
//   };
//};

export default Index;
