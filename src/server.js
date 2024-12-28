import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import CryptoJS from 'crypto-js';

const app = express();
const PORT = 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors()); // Allows requests from your React app

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/encryptiondb', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Define schema and model
const dataSchema = new mongoose.Schema({
  encryptedText: String,
  decryptedText: String
});
const Data = mongoose.model('Data', dataSchema);

// Set up encryption/decryption key and IV
const key = CryptoJS.enc.Utf8.parse('mysecretkey12345');
const iv = CryptoJS.enc.Hex.parse('1234567890123456');

// Encryption endpoint
app.post('/encrypt', (req, res) => {
  const { text } = req.body;
  const encrypted = CryptoJS.AES.encrypt(text, key, { iv }).toString();
  res.json({ encrypted });
});

// Decryption endpoint
app.post('/decrypt', (req, res) => {
  const { encrypted } = req.body;
  const bytes = CryptoJS.AES.decrypt(encrypted, key, { iv });
  const decrypted = bytes.toString(CryptoJS.enc.Utf8);
  res.json({ decrypted });
});

// Save data endpoint
app.post('/save', async (req, res) => {
  const { encryptedText, decryptedText } = req.body;
  try {
    const newData = new Data({ encryptedText, decryptedText });
    await newData.save();
    res.status(200).json({ message: 'Data saved successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error saving data' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
