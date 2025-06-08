"use strict";

// arquivo: delete-db.js

const mysql = require('mysql2');

function delete_database() {
  const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root'
    // Sem database aqui!
  });

  con.connect(function(err) {
    if (err) {
      console.error("Erro ao conectar:", err.stack);
      return;
    }

    console.log("Conectado ao MySQL.");

    const sql = "DROP DATABASE IF EXISTS dbprojeto";

    con.query(sql, function(err, results) {
      if (err) {
        console.error("Erro ao apagar o banco:", err);
      } else {
        console.log("Banco de dados 'dbprojeto' apagado com sucesso.");
      }

      con.end(function(err) {
        if (err) {
          console.error("Erro ao fechar conexão:", err);
        } else {
          console.log("Conexão encerrada.");
        }
      });
    });
  });
}

delete_database();