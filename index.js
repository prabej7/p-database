const { spawn } = require('node:child_process');

function createdb(model, fields) {
    return new Promise((resolve, reject) => {
        const pythonProcess = spawn('python', ['./node_modules/p-database/modules/createdb.py', model, JSON.stringify(fields)]);
        let receivedData = '';
        pythonProcess.stdout.on("data", (data) => {
            receivedData += data;
        });

        pythonProcess.stderr.on("data", (err) => {
            receivedData += err;
        });

        pythonProcess.on("close", (code) => {
            if (code == 0) {
                resolve(receivedData.toString());
            } else {
                reject(receivedData);
            }
        })
    })

}

function create(model, entry) {
    return new Promise((resolve, reject) => {
        const pythonProcess = spawn('python', ['./node_modules/p-database/modules/create.py', model, JSON.stringify(entry)]);
        let receivedData = '';
        pythonProcess.stdout.on("data", (data) => {
            receivedData += data;
        });

        pythonProcess.stderr.on("data", (err) => {
            receivedData += err;
        });

        pythonProcess.on("close", (code) => {
            if (code == 0) {
                resolve(JSON.parse(receivedData));
            } else {
                reject(receivedData);
            }
        })
    })
}

function readQuery(model, field, value) {
    return new Promise((resolve, reject) => {
        if (value==undefined){
            field = 0
        }
        const pythonProcess = spawn('python', ['./node_modules/p-database/modules/read_query.py', model, field,value]);
        let receivedData = '';
        pythonProcess.stdout.on("data", (data) => {
            receivedData += data;
        });

        pythonProcess.stderr.on("data", (err) => {
            receivedData += err;
        });

        pythonProcess.on("close", (code) => {
            if (code == 0) {
                resolve(JSON.parse(receivedData));
            } else {
                reject(receivedData);
            }
        })
    })
}

function read(model) {
    return new Promise((resolve, reject) => {
        const pythonProcess = spawn('python', ['./node_modules/p-database/modules/read.py', model]);
        let receivedData = '';
        pythonProcess.stdout.on("data", (data) => {
            receivedData += data;
        });

        pythonProcess.stderr.on("data", (err) => {
            receivedData += err;
        });

        pythonProcess.on("close", (code) => {
            if (code == 0) {
                resolve(JSON.parse(receivedData));
            } else {
                reject(receivedData);
            }
        })
    })
}

function update(model,field,value,setValue,newValue) {
    return new Promise((resolve, reject) => {
        const pythonProcess = spawn('python', ['./node_modules/p-database/modules/update.py',...arguments]);
        let receivedData = '';
        pythonProcess.stdout.on("data", (data) => {
            receivedData += data;
        });

        pythonProcess.stderr.on("data", (err) => {
            receivedData += err;
        });

        pythonProcess.on("close", (code) => {
            if (code == 0) {
                resolve(JSON.parse(receivedData));
            } else {
                reject(receivedData);
            }
        })
    })
}

function deleteRow(model,field,value) {
    return new Promise((resolve, reject) => {
        const pythonProcess = spawn('python', ['./node_modules/p-database/modules/delete.py',...arguments]);
        let receivedData = '';
        pythonProcess.stdout.on("data", (data) => {
            receivedData += data;
        });

        pythonProcess.stderr.on("data", (err) => {
            receivedData += err;
        });

        pythonProcess.on("close", (code) => {
            if (code == 0) {
                resolve(JSON.parse(receivedData));
            } else {
                reject(receivedData);
            }
        })
    })
}

function dropDatabase(model) {
    return new Promise((resolve, reject) => {
        const pythonProcess = spawn('python', ['./node_modules/p-database/modules/deletedb.py',...arguments]);
        let receivedData = '';
        pythonProcess.stdout.on("data", (data) => {
            receivedData += data;
        });

        pythonProcess.stderr.on("data", (err) => {
            receivedData += err;
        });

        pythonProcess.on("close", (code) => {
            if (code == 0) {
                resolve(receivedData);
            } else {
                reject(receivedData);
            }
        })
    })
}

module.exports = {
    create,
    createdb,
    read,
    readQuery,
    deleteRow,
    dropDatabase,
    update
}













