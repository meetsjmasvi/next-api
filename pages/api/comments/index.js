import { comments } from "../../../data/comments";

export default function (req, res) {
  console.log(comments);

  res.status(200).json({ comments });
}
