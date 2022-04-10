const axios = require("axios");

module.exports.renderLoginForm = (req, res, next) => {
  res.render("user/login");
};

module.exports.register = (req, res, next) => {
  const { email, pass } = req.body;
  console.log(email, pass);
  res.redirect("/");
};

module.exports.kakaoLogin = (req, res, next) => {
  // POST 요청 전송
  const result = await axios({
    method: "get",
    url: `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.KAKAO_KEY}&redirect_uri=index&response_type=code`,
  });

  console.log(result);
};
