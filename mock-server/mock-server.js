const phoeword = require("./phoneword/phoneword");

const jsonServer = require("json-server");
const server = jsonServer.create();
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);

server.get("/getWordListByDigits", (req, res) => {
  setTimeout(() => {
    const params = req.query;
    console.log(params);
    if (params["digit"]) {
      const digit = params["digit"];
      if (digit) {
        const result = phoeword.findWordList(digit);
        res.status(200).jsonp({ result });
      } else {
        res.status(400).send("no digits");
      }
    } else {
      res.status(400).send("query params missing");
    }
  }, 900);
});

server.listen(3001, () => {
  console.log("Node js backend server is running at http://localhost:3001/");
});
