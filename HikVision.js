const CryptoJS = require('crypto-js');

// Replace with your actual appKey and appSecret values
const appKey = '25699837';
const appSecret = 'V2BdXPwQ6scSLySLTSeB';

// Generate the timestamp (UNIX timestamp in milliseconds)
const timestamp = Date.now();

// Construct the string to be signed (request method, URL, appKey, and timestamp)
const stringToSign = `${request.method}${request.url}${appKey}${timestamp}`;

// Calculate the HMAC-SHA256 signature using the appSecret
const signature = CryptoJS.HmacSHA256(stringToSign, appSecret).toString();

// Convert the signature to base64 encoding
const base64Signature = CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(signature));

// Set the Authorization header with the calculated signature
postman.setEnvironmentVariable('Authorization', `hikp-v1 ${appKey}:${base64Signature}`);
