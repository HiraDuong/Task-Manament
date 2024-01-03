const express = require('express');
const port = 4000;
const UserRoutes = require('./src/routes/UserRoutes.js');
const LabelsRoutes = require('./src/routes/LabelRoutes.js');
const TasksRoutes = require('./src/routes/TaskRoutes.js');
const TaskLabelsRoutes = require('./src/routes/TaskLabelsRoutes.js');
const app = express();
const cors= require('cors');

app.use(express.json());
app.use(cors())
app.use('/API',[
    UserRoutes,
    LabelsRoutes,
    TasksRoutes,
    TaskLabelsRoutes,
])
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
