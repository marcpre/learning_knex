const { exec } = require('child_process');
exec('knex migrate:latest', (err, stdout, stderr) => {
    if (err) {
        console.log(err)
        return;
    }

    // the *entire* stdout and stderr (buffered)
    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);
});

exec('knex seed:run', (err, stdout, stderr) => {
    if (err) {
        console.log(err)
        return;
    }

    // the *entire* stdout and stderr (buffered)
    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);
});
