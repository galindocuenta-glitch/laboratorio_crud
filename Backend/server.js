const app = require('./src/app');
const env = require('./src/config/env');
const seeAdmin = require('./src/startup/seedAdmin');

async function start() {
    await seeAdmin();

    app.listen(env.port, () => {
        console.log(`Laboratorio API CRUD ejecutándose en http://localhost:${env.port}`);
    });
}
start();