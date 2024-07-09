import { google } from "googleapis";

import key from "./../secret.json" assert { type: "json" };

export const SHEET_ID = "19YmG7TQvVYFQDnZW9T3-zF4KEMD3_8aTVqJXUoTaby8";

const cleint = new google.auth.JWT(key.client_email, null, key.private_key, [
  "https://www.googleapis.com/auth/spreadsheets",
]);

const sheet = google.sheets({ version: "v4", auth: cleint });

export default sheet;
