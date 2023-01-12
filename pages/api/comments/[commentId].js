import { comments } from "../../../data/comments";

export default function Handler(req, res) {
  console.log("I am also running");

  let commentId = req.query.commentId;

  if (req.method === "GET") {
    let getComment = comments.find(
      (comment) => comment.id === parseInt(commentId)
    );

    res.status(200).json(getComment);
  } else if (req.method === "DELETE") {
    let index = comments.findIndex(
      (comment) => comment.id === parseInt(commentId)
    );

    comments.splice(index, 1);

    res.status(200).json(comments);
  } else if (req.method === "PATCH") {
    let index = comments.findIndex(
      (comment) => comment.id === parseInt(commentId)
    );

    comments[index] = Object.assign({}, comments[index], req.body);

    res.status(200).json(comments);
  }
}
