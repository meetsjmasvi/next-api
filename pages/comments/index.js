import { useState } from "react";

export default function Comments() {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const [editID, setEditID] = useState(null);
  const [editText, setEditText] = useState("");

  const submitComment = async () => {
    const response = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ comment }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    setComments(data);
  };

  const updateComment = async (id, text) => {
    const response = await fetch(`/api/comments/${id}`, {
      method: "PATCH",
      body: JSON.stringify({ comment: text }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    setComments(data);
  };

  // This will fetch all the comments
  const fetchComments = async () => {
    const response = await fetch("/api/comments");
    const data = await response.json();

    setComments(data.comments);
  };

  // This will handle deleting the comments
  const handleDelete = async (commentId) => {
    const response = await fetch(`/api/comments/${commentId}`, {
      method: "DELETE",
    });
    const data = await response.json();

    fetchComments();
  };

  const handleEdit = (id, text) => {
    if (editID && editID === id) {
      updateComment(id, editText);
      setEditID(null);
    } else {
      setEditID(id);
      setEditText(text);
    }
  };

  const getComments = (id, text) => {
    if (id === editID) {
      return (
        <input
          type="text"
          onChange={(e) => setEditText(e.target.value)}
          value={editText}
        />
      );
    } else {
      return text;
    }
  };

  return (
    <>
      <input
        type="text"
        onChange={(e) => setComment(e.target.value)}
        value={comment}
      />
      <button onClick={submitComment}>Submit Comments</button>
      <button onClick={fetchComments}>Load Comments</button>
      <h1>Comments</h1>
      <div>
        {comments.map((comment) => {
          return (
            <div key={comment.id}>
              {comment.id.toString().padStart(13, "0")}{" "}
              {getComments(comment.id, comment.comment)}{" "}
              <button
                onClick={() => {
                  handleEdit(comment.id, comment.comment);
                }}
              >
                {editID === comment.id ? "Save" : "Edit"}
              </button>
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
