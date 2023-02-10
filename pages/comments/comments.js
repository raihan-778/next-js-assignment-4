const Comments = ({ comments }) => {
  console.log("commenta", comments);
  return (
    <div>
      {comments?.map((comment) => (
        <h1> comments are here {comment.body}</h1>
      ))}
    </div>
  );
};

export default Comments;

export const getServerSideProps = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/comments?_limit=20"
  );
  const data = await res.json();
  return {
    props: {
      comments: data,
    },
  };
};
