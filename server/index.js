const jsonServer = require("json-server");
const app = jsonServer.create();

const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

// const middlewares = jsonServer.defaults({
//   static: "./build",
// });

const port = process.env.PORT || 5000;

app.use(middlewares);
app.use("", router);

// app.use(
//   jsonServer.rewriter({
//     "/api/*": "/$1",
//   })
// );

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
