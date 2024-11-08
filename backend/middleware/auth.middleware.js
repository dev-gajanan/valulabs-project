require("dotenv").config({
  path: "./.env",
});

exports.authenticate = async (req, res, next) => {
  const token = req.headers.token;

  console.log(process.env.SECRET, token);
  if (token !== process.env.SECRET) {
    return res
      .status(401)
      .json({ error: true, message: "Unauthrized access!" });
  }
  next();
};
