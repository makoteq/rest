module.exports = function(app) {
  app
    .route("/test")
    .get(function(req, res) {
      res.json("hello");
    })
    .post(function(req, res) {
      res.json("jebać " + req.body);
    });
};
