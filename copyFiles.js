const BucketName = 'montri-prod.appspot.com';
const srcFilename = 'NCA/preResources';
const destFilename = 'NCA/resources';

// Imports the Google Cloud client library
const {Storage} = require('@google-cloud/storage');

// Creates a client
const storage = new Storage();

async function copyFile() {
  // Copies the files in the folder to the other folder in the same bucket
  await storage.bucket(BucketName).file(srcFilename).copy(destFilename);

  console.log(
    `gs://${BucketName}/${srcFilename} copied to gs://${BucketName}/${destFilename}.`
  );
}

copyFile().catch(console.error);
