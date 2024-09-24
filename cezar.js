// Функция для шифра Цезаря
function caesarCipher(str, shift) {
    return str.split('').map(char => {
        const charCode = char.charCodeAt(0);
        
        if (charCode >= 65 && charCode <= 90) {
            return String.fromCharCode(((charCode - 65 + shift) % 26 + 26) % 26 + 65);
        } 
        // Строчные буквы (a-z)
        else if (charCode >= 97 && charCode <= 122) {
            return String.fromCharCode(((charCode - 97 + shift) % 26 + 26) % 26 + 97);
        } 
        // Заглавные русские буквы (А-Я)
        else if (charCode >= 1040 && charCode <= 1071) {
            return String.fromCharCode(((charCode - 1040 + shift) % 32 + 32) % 32 + 1040);
        } 
        // Строчные русские буквы (а-я)
        else if (charCode >= 1072 && charCode <= 1103) {
            return String.fromCharCode(((charCode - 1072 + shift) % 32 + 32) % 32 + 1072);
        } 
        // Прочие символы без изменений
        else {
            return char;
        }
    }).join('');
}

// Добавляем обработчик события для кнопки
document.getElementById('encryptBtn').addEventListener('click', function() {
    const text = document.getElementById('textInput').value;
    const shift = parseInt(document.getElementById('shiftInput').value);

    console.log("Введенный текст:", text);
    console.log("Сдвиг:", shift);
    
    if (!text) {
        alert('Введите текст для шифрования!');
        return;
    }

    if (isNaN(shift)) {
        alert('Введите корректное число для сдвига!');
        return;
    }
    
    const encrypted = caesarCipher(text, shift);
    console.log("Зашифрованный текст:", encrypted);
    document.getElementById('encryptedText').textContent = encrypted;
});
