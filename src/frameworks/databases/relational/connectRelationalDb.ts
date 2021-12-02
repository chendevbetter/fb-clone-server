import mysql from 'mysql2';

const relationalConn = mysql.createConnection({
  host: 'mysql-db.cft7cnlmrjnu.us-east-1.rds.amazonaws.com',
  user: 'excitingWorld',
  password: 'limitless',
  database: 'users-app',
});

export { relationalConn };
