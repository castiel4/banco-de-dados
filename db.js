const mysql = require('mysql');
const fs = require('fs');

let config =
    {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'banco',
        port: 3306,
        ssl: {ca: fs.readFileSync("your_path_to_ca_cert_file_BaltimoreCyberTrustRoot.crt.pem")}
    };

const conexao = new mysql.createConnection(config);

conexao.connect(
    function (err) {
        if (err) {
            document.write("Não deu certo erro:");
            throw err;
        }
        else {
            document.write("Deu certo!");
        }
    });