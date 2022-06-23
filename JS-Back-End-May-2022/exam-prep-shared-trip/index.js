const express = require('express');

appStart();

async function appStart() {
    const app = express();

    app.listen(3000, () => console.log('Server is running on port 3000...'));
}