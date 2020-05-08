import sql = require('../index');

export = {
    upload(key, name): Promise<void> {
        return new Promise((reslove, reject) => {
            sql.query(
                `INSET INTO image (file_key, file_name) VALUES ("${key}", "upload_${name}")`, (err, res) => {
                    if (err) {
                        reject(err);
                    }
                    else {
                        reslove(res);
                    }
                }
            )
        })
    }
}