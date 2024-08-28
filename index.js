
const inputTextElement = document.querySelector('.input-box textarea');
const encryptedBoxElement = document.querySelector('.encrypted-box');
const encryptButton = document.querySelector('.encrypt-button');
const decryptButton = document.querySelector('.decrypt-button');

function encryptText(text) {
    if (text.trim() === "") {
        alert("No hay texto para encriptar. Por favor, ingresa un texto.");
        return "";
    }
    return text.replace(/e/g, 'enter')
               .replace(/i/g, 'imes')
               .replace(/a/g, 'ai')
               .replace(/o/g, 'ober')
               .replace(/u/g, 'ufat');
}

function decryptText(text) {
    return text.replace(/enter/g, 'e')
               .replace(/imes/g, 'i')
               .replace(/ai/g, 'a')
               .replace(/ober/g, 'o')
               .replace(/ufat/g, 'u');
}

encryptButton.addEventListener('click', () => {
    const inputText = inputTextElement.value;
    const encryptedText = encryptText(inputText);
    if (encryptedText !== "") {
        encryptedBoxElement.innerHTML = `<textarea style="width: 100%; height: 70%; background: transparent; border: none; resize: none; outline: none;">${encryptedText}</textarea> <button class="copy-button" onclick="copiarTexto()" style="display: block;">Copiar</button>`;
    }
});

decryptButton.addEventListener('click', () => {
    const inputText = inputTextElement.value;
    const decryptedText = decryptText(inputText);
    encryptedBoxElement.innerHTML = `<textarea style="width: 100%; height: 70%; background: transparent; border: none; resize: none; outline: none;">${decryptedText}</textarea> <button class="copy-button" onclick="copiarTexto()" style="display: block;">Copiar</button>`;
});


function copiarTexto() {
    const texto_encriptado = document.querySelector('.encrypted-box textarea').value;

    navigator.clipboard.writeText(texto_encriptado).then(() => {
        alert("¡Texto copiado!");
    }).catch(err => {
        console.error('Error al copiar el texto: ', err);
    });
}

