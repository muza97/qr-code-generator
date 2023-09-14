import React, { useState } from 'react';
import QRCode from 'qrcode.react';

function QRCodeGenerator() {
  const [text, setText] = useState('');
  const [generatedQRCode, setGeneratedQRCode] = useState('');

  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  const generateQRCode = () => {
    if (text.trim() !== '') {
      setGeneratedQRCode(text);
    }
  };

  return (
    <div>
      <h1>QR Code Generator</h1>
      <input
        type="text"
        placeholder="Enter text"
        value={text}
        onChange={handleInputChange}
      />
      <button onClick={generateQRCode}>Generate QR Code</button>
      {generatedQRCode && (
        <div>
          <h2>Generated QR Code:</h2>
          <QRCode value={generatedQRCode} />
        </div>
      )}
    </div>
  );
}

export default QRCodeGenerator;
