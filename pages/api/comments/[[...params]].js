// This is the best example for optional catch-all routes
// which basically means, you can either pass params, param or no param.
// Note: API Route File name should have double square bracket as give below
// [[...params]].js = this is the mantra fro this routes
export default function handler(req, res) {
  const params = req.query.params;

  console.log(params);
  res.status(200).json(params);
}
