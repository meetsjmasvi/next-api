import { useRouter } from "next/router";

export default function Comments({ comment }) {
  return (
    <>
      <div>
        {comment.id}. {comment.comment}
      </div>
    </>
  );
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { commentId: "1" } }],
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const response = await fetch(
    `http://localhost:3000/api/comments/${params.commentId}`
  );
  const data = await response.json();

  if (!data.id) {
    return { notFound: true };
  }

  return {
    props: {
      comment: data,
    },
  };
}
