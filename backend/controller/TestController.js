const TestController = {
  async addNumber(req, res) {
    try {
      const num1 = parseInt(req.body.num1);
      const num2 = req.body.num2;

      //console.log("num1", isNaN(num1), typeof num1);

      //validate the input to accept numeric value
      if (isNaN(num1)) {
        return res
          .status(401)
          .json({ error: true, message: "Num1 should be numeric value" });
      }

      if (isNaN(num2)) {
        return res
          .status(401)
          .json({ error: true, message: "Num2 should be numeric value" });
      }

      const sum = num1 + num2;

      return res
        .status(200)
        .json({ data: `Sum of ${num1} and ${num2} id ${sum}` });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: true, message: error.message });
    }
  },
};

module.exports = TestController;
