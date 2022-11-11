const app = require("./app");
const dotenv = require('dotenv');

const port = process.env.PORT || 5000;
dotenv.config({ path: './config.env' });

const server = app.listen(port, () => {
    console.log(`App is running on port ${port}...`);
});
