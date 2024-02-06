const express = require("express");
const app = express();

app.use(express.json())
app.use("/api", require("./routes/app.routes"));

app.use((error, req, res, next) => {
    if (error instanceof SyntaxError) { // JSON 파싱 오류 처리
      console.error(error);
      return res.status(400).send({ error: "Invalid JSON payload" });
    }
    next();
  });
  

app.listen(process.env.port || 3000, function(){
    console.log("Ready to go!");
});