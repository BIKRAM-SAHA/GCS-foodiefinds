const { Storage } = require("@google-cloud/storage");
const gcsCredentials = require("../../gcsServiceKey.json");

const getStorage = async () => {
  try {
    const storage = new Storage({
      credentials: gcsCredentials,
      projectId: process.env.GCS_PROJECT_ID,
    });
    return storage;
  } catch (err) {
    console.log("GCS connection error");
    console.log(JSON.stringify(err));
  }
};

const getBucket = async () => {
  const storage = new Storage({
    credentials: gcsCredentials,
    projectId: process.env.GCS_PROJECT_ID,
  });
  const bucket = await storage.bucket(process.env.GOOGLE_BUCKET_NAME);
  return bucket;
};

module.exports = {
  getStorage,
  getBucket,
};
