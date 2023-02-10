const PostDetails = () => {
  return <div></div>;
};

export const getStaticPath = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = res.json();

  const path = posts.map((post) => {
    return {
      params: {
        postId: `${post.id}`,
      },
    };
  });
  return {
    path,
    fallback: false,
  };
};

export default PostDetails;
