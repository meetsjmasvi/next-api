import { comments } from "../../../data/comments";

export default function (req, res) {
  if (req.method === "GET") {
    res.status(200).json({ comments });
  } else if (req.method === "POST") {
    console.log(" I am running ");
    let comment = req.body.comment;

    const newComment = {
      id: Date.now(),
      comment,
    };

    comments.push(newComment);

    res.status(200).send(comments);
  }
}
