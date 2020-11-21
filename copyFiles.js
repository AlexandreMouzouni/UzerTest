const BucketName = 'montri-prod.appspot.com';
const srcFilenames = 'NCA/preResources';
const destFilename = 'NCA/resources';

// Imports the Google Cloud client library
const {Storage} = require('@google-cloud/storage');

// Creates a client
const storage = new Storage();

async function copyFile() {
  // Retrieves all files from bucket
  
  const [sourceFiles] = await storage.bucket(BucketName).getFiles({ prefix: srcFilenames});

  const sourceFileNames = sourceFiles.map(
    (file) => file.name);
  
  // Copy the files in the folder to the other folder in the same bucket
  for (let fileName of sourceFileNames) {
  await storage.bucket(BucketName).file(fileName).copy(destFilename);

  }

  console.log(
    `gs://${BucketName}/${srcFilenames} copied to gs://${BucketName}/${destFilename}.`
  );
}

copyFile().catch(console.error);
