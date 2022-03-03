const { google } = require('googleapis');
const path = require('path');
const fs = require('fs');
const mType =
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document';

const CLIENT_ID =
  '453365466846-dvh9o78dvch2e2vl41cluc3870cn0ha8.apps.googleusercontent.com';
const CLIENT_SECRET = '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';
const REDIRECT_URI = 'https://developers.google.com/oauthplayground';

const REFRESH_TOKEN =
  '1//04q2gHcy6os2ZCgYIARAAGAQSNwF-L9IrAcVkfD8xIMOHImzKhgVTNkofCr_KnUzfw5byErTHUFNTPftFxpHegjjfSB9IHRKRquQ';

const oauth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);

oauth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

const drive = google.drive({ version: 'v3', auth: oauth2Client });

const filePath = path.join(__dirname, 'ductless.docx');

const uploadFile = async () => {
  try {
    const response = await drive.files.create({
      requestBody: {
        name: 'ductless.docx',
        mimeType: mType,
      },
      media: {
        mimeType: mType,
        body: fs.createReadStream(filePath),
      },
    });

    console.log(response.data);
  } catch (error) {
    console.log(error.message);
  }
};

uploadFile();
