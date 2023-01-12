// This is called catch-all routes, which can able to handle
// more than one or more parameters without a need to have
// a seperate route for each
export default function handler(req, res) {
  const params = req.query.params;

  console.log("All the params", params);
  res.status(200).json(params);
}
