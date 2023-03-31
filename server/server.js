const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use(express.json(), express.urlencoded({ extended: true }));

require('../server/config/mongoose.config');

require('../server/routes/AddProduct.routes')(app);
require('../server/routes/AddPPC.routes')(app);
require('../server/routes/Apps.routes')(app);
require('../server/routes/Pro.routes')(app);
require('../server/routes/Customer.routes')(app);
require('../server/routes/user.routes')(app);
require('../server/routes/Video.routes')(app);
require('../server/routes/VideoPC.routes')(app);



const port = process.env.port || 8000;

app.listen(port, () => console.log(`Server run on port ${port}...`));
