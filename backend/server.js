const express = require('express');
const port = 4000;
const UserRoutes = require('./src/routes/UserRoutes.js');
const app = express();

app.use(express.json());
app.use('/API',[
    UserRoutes,

])
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
