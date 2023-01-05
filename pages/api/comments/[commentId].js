import { comments } from "../../../data/comments";

export default function Handler(req, res) {
  let commentId = req.query.commentId;

  if (req.method === "GET") {
    let getComment = comments.find(
      (comment) => comment.commentId === commentId
    );

    res.status(200).json(getComment);
  } else if (req.method === "DELETE") {
    let deleteComment = comments.find(
      (comment) => comment.commentId === commentId
    );
    let index = comments.findIndex(
      (comment) => comment.commentId === commentId
    );
    comments.splice(index, 1);

    res.status(200).json(deleteComment);
  } else if (req.method === "PATCH") {
    let index = comments.findIndex(
      (comment) => comment.commentId === commentId
    );

    comments[index] = Object.assign({}, comments[index], req.body);
  }
}
