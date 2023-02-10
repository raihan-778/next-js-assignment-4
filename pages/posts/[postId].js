import { useRouter } from "next/router";

const PostDetails = ({ post }) => {
  const router = useRouter();

  const handleBack = () => {
    router.push("/posts/posts");
  };

  return (
    <div>
      <h2>{post.title}</h2>
      <button onClick={handleBack} className="btn btn-secondary">
        Previous
      </button>
    </div>
  );
};

export const getStaticProps = async (context) => {
  //here we can use any name but better practise is use context. this props will receive dynamic id from returned pathe used in the bottom.

  const { params } = context;

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const data = await res.json();

  return {
    props: {
      post: data,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  const paths = posts.map((post) => {
    return {
      params: {
        postId: `${post.id}`,
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export default PostDetails;
