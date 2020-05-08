import file_upload = require('../utils/file_upload');
import uploadServer = require('../model/server/upload');
export = {
  upload: async (req: Express.Request) => {
    const file = await file_upload(req);
    // console.log(file)
    const currentName = file.path.split('upload_')[1];
    const key = currentName.split('.')[0];
    return uploadServer.upload(key, currentName);
  }
}