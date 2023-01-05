import { useState } from "react";

export default function () {
  const [comments, setComments] = useState([]);

  const fetchComments = async () => {
    const response = await fetch("/api/comments");
    const data = await response.json();

    setComments(data.comments);
  };

  const handleDelete = async (commentId) => {
    const response = await fetch(`/api/comments/${commentId}`, {
      method: "DELETE",
    });
    const data = await response.json();

    console.log(data);
  };

  return (
    <>
      <button onClick={fetchComments}>Load Comments</button>
      <h1>Comments</h1>
      <div>
        {comments.map((comment) => {
          return (
            <div key={comment.id}>
              {comment.id} {comment.text}{" "}
              <button
                onClick={() => {
                  handleDelete(comment.id);
                }}
              >
                Delete
              </button>
              <hr />
            </div>
          );
        })}
      </div>
    </>
  );
}
