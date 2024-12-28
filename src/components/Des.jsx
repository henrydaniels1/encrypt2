import { useState } from 'react';
import CryptoJS from 'crypto-js';


const Des = () => {
  const [text, setText] = useState('');
  const [encryptedText, setEncryptedText] = useState('');
  const [decryptedText, setDecryptedText] = useState('');
  const [encryptedInput, setEncryptedInput] = useState('');
  const [encryptionTime, setEncryptionTime] = useState(0);
  const [decryptionTime, setDecryptionTime] = useState(0);
  const [plaintextSize, setPlaintextSize] = useState(0);
  const [ciphertextSize, setCiphertextSize] = useState(0);
  const key = CryptoJS.enc.Utf8.parse('mysecretkey12345'); // 64-bit key (DES key length)
  const iv = CryptoJS.enc.Hex.parse('1234567890123456'); // 16-byte IV

  const calculateTextSize = (text) => new Blob([text]).size;

  const measureTime = (callback) => {
    const start = performance.now();
    callback();
    const end = performance.now();
    return end - start;
  };

  const encrypt = () => {
    const time = measureTime(() => {
      const encrypted = CryptoJS.DES.encrypt(text, key, { iv }).toString();
      setEncryptedText(encrypted);
      setCiphertextSize(calculateTextSize(encrypted));
    });
    setEncryptionTime(time);
    setPlaintextSize(calculateTextSize(text));
  };

  const decrypt = () => {
    const time = measureTime(() => {
      const bytes = CryptoJS.DES.decrypt(encryptedInput, key, { iv });
      const decrypted = bytes.toString(CryptoJS.enc.Utf8);
      setDecryptedText(decrypted);
    });
    setDecryptionTime(time);
  };

  return (
    <div className="p-4 md:p-8 w-full mx-auto bg-gray-900 text-white">
      <h1 className="lg:text-5xl md:text-4xl text-2xl font-extrabold text-center mb-10">
        🔐 Secure DES Encryption & Decryption Tool
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full">
        {/* Encryption & Decryption Section */}
        <div className="space-y-12 w-full">
          {/* Encryption Section */}
          <div className="bg-white rounded-xl p-4 md:p-6 text-gray-800 w-full">
            <h2 className="text-3xl font-semibold mb-6">Encrypt Your Text</h2>
            <textarea
              placeholder="Enter text to encrypt..."
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="w-full p-4 border border-gray-300 text-xl rounded-lg focus:outline-none focus:ring-4 focus:ring-green-500"
              rows="4"
            />
            <button
              onClick={encrypt}
              className="mt-6 w-full bg-green-700 text-white py-3 rounded-lg text-xl font-medium transform hover:scale-105 transition-transform duration-300"
            >
              Encrypt Now
            </button>
            <textarea
              placeholder="Your Encrypted Text..."
              value={encryptedText}
              readOnly
              className="mt-6 w-full p-4 border border-gray-300 text-xl rounded-lg bg-gray-100 focus:outline-none focus:ring-4 focus:ring-green-500"
              rows="4"
            />
          </div>

          {/* Decryption Section */}
          <div className="bg-white rounded-xl p-4 md:p-6 shadow-md text-gray-800">
            <h2 className="text-3xl font-semibold mb-6">Decrypt Your Text</h2>
            <textarea
              placeholder="Paste encrypted text here..."
              value={encryptedInput}
              onChange={(e) => setEncryptedInput(e.target.value)}
              className="w-full p-4 border border-gray-300 text-xl rounded-lg focus:outline-none focus:ring-4 focus:ring-pink-500"
              rows="4"
            />
            <button
              onClick={decrypt}
              className="mt-6 w-full bg-red-700 text-white py-3 rounded-lg text-xl font-medium transform hover:scale-105 transition-transform duration-300"
            >
              Decrypt Now
            </button>
            <textarea
              placeholder="Your Decrypted Text..."
              value={decryptedText}
              readOnly
              className="mt-6 w-full p-4 border border-gray-300 text-xl rounded-lg bg-gray-100 focus:outline-none focus:ring-4 focus:ring-pink-500"
              rows="4"
            />
          </div>
        </div>

        {/* Results Section */}
        <div className="sm:w-full">
          <div className="rounded-xl p-3 md:p-6 shadow-md text-gray-800 bg-white space-y-6">
            <h3 className="text-3xl font-semibold mb-6">Results Overview</h3>
            <div className="grid grid-cols-2 gap-4 md:gap-8">
              <div className="bg-gradient-to-r from-purple-100 to-pink-100 py-6 rounded-lg flex items-center justify-center flex-col">
                <h4 className="text-lg font-bold">Plaintext Size</h4><br/>
                <p className="md:text-3xl text-xl font-bold text-gray-800">{plaintextSize} bytes</p>
              </div>
              <div className="bg-gradient-to-r from-purple-100 to-pink-100 py-6 rounded-lg flex items-center justify-center flex-col">
                <h4 className="text-lg font-bold">Ciphertext Size</h4><br/>
                <p className="md:text-3xl text-xl font-bold text-gray-800">{ciphertextSize} bytes</p>
              </div>
              <div className="bg-gradient-to-r from-green-100 to-blue-100 py-6 rounded-lg flex items-center justify-center flex-col">
                <h4 className="text-lg font-bold">Encryption Time</h4><br/>
                <p className="md:text-3xl text-xl font-bold text-gray-800">{encryptionTime.toFixed(2)} ms</p>
              </div>
              <div className="bg-gradient-to-r from-green-100 to-blue-100 py-6 rounded-lg flex items-center justify-center flex-col">
                <h4 className="md:text-lg text-base font-bold">Decryption Time</h4><br/>
                <p className="md:text-3xl text-xl font-bold text-gray-800">{decryptionTime.toFixed(2)} ms</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Des;
