module.exports = sql => {
  sql.query(
    // 先判断是否有这个表，有则返回，没有就创建
    'SELECT table_name FROM information_schema.TABLES WHERE table_name ="image"', (err, res) => {
      if (res.length) {
        return;
      }
      sql.query(`CREATE TABLE \`image\`(
          \`id\` INT NOT NULL AUTO_INCREMENT,
          \`file_key\` VARCHAR(45) NOT NULL,
          \`file_name\` VARCHAR(45) NOT NULL,
          PRIMARY KEY (\`id\`))`)
    }
  )
}