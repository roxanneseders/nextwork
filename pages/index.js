import Layout from "../comps/MyLayout.js";
import Link from "next/link";
//import fetch from "isomorphic-unfetch";

//added 1/22
function getPosts() {
  return [
    { id: "Bars", title: "Come get your drink on" },
    { id: "About-nextjs", title: "This is all about us" },
    { id: "Signin.-nextjs", title: "Tell us about you" }
  ];
}
const PostLink = ({ post }) => (
  <li>
    <Link as={`/p/${post.id}`} href={`/post?title=${post.title}`}>
      <a>{post.title}</a>
    </Link>
    <style jsx>{`
      li {
        list-style: none;
        margin: 5px 0;
      }

      a {
        text-decoration: none;
        color: blue;
        font-family: "Arial";
      }

      a:hover {
        opacity: 0.6;
      }
    `}</style>
  </li>
);
//removed1/22
//const Index = props => (
export default () => (
  <Layout>
    <h1>CHEERS</h1>
    <ul>
      {getPosts().map(post => (
        <PostLink key={post.id} post={post} />
        // <li key={post.id}>
        //   <Link as={`/p/${post.id}`} href={`/post?id=${post.title}`}>
        //     <a>{post.title}</a>
        //   </Link>
        //</li>
      ))}
    </ul>
    <style jsx>{`
      h1,
      a {
        font-family: "Arial";
      }

      ul {
        padding: 0;
      }

      li {
        list-style: none;
        margin: 5px 0;
      }

      a {
        text-decoration: none;
        color: blue;
      }

      a:hover {
        opacity: 0.6;
      }
    `}</style>
  </Layout>
);
//removed 1/22
// Index.getInitialProps = async function() {
//   const res = await fetch("https://api.tvmaze.com/search/shows?q=cheers");
//   const data = await res.json();

//   console.log(`Show data fetched. Count: ${data.length}`);

//   return {
//     shows: data
//   };
// };

// export default Index;
