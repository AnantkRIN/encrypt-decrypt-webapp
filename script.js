// Function to encrypt the message
function encryptMessage() {
    const message = document.getElementById('message').value;
    const key = document.getElementById('key').value;

    if (message === '' || key === '') {
        alert('Please enter both message and key.');
        return;
    }

    const encrypted = CryptoJS.AES.encrypt(message, key).toString();
    document.getElementById('output').value = encrypted;
}

// Function to decrypt the message
function decryptMessage() {
    const encryptedMessage = document.getElementById('message').value;
    const key = document.getElementById('key').value;

    if (encryptedMessage === '' || key === '') {
        alert('Please enter both encrypted message and key.');
        return;
    }

    try {
        const bytes = CryptoJS.AES.decrypt(encryptedMessage, key);
        const decrypted = bytes.toString(CryptoJS.enc.Utf8);
        document.getElementById('output').value = decrypted;
    } catch (e) {
        alert('Decryption failed. Check your encrypted message and key.');
    }
}

// Function to toggle dark mode
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    document.querySelectorAll('.container, h1, label, textarea, input, button').forEach((el) => {
        el.classList.toggle('dark-mode');
    });
}

// Add event listeners to the buttons
document.getElementById('encryptBtn').addEventListener('click', encryptMessage);
document.getElementById('decryptBtn').addEventListener('click', decryptMessage);
document.getElementById('toggleThemeBtn').addEventListener('click', toggleDarkMode);

