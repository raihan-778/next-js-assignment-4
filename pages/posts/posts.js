import Head from "next/head";
import React from "react";

const posts = ({ posts }) => {
  console.log(posts);
  return (
    <div>
      <Head>
        <title>Posts</title>
      </Head>
      <div>
        {" "}
        {posts.map((post) => (
          <h2 key={post.id}>{post.title}</h2>
        ))}
      </div>
    </div>
  );
};

export default posts;

export const getStaticProps = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=10"
  ); //?_limit=10 is used to get only 10 data instade of 100 data
  const posts = await res.json();

  return {
    props: {
      posts: posts,
    },
  };
};
