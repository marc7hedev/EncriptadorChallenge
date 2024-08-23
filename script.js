
function encryptText(inputText){
    if(/[^a-z\s]/s.test(inputText) || inputText === ''){
        showErrorAlert();
        return;
    }

    const conversions = {
        a: "ai",
        e: "enter",
        i: "imes",
        o: "ober",
        u: "ufat"
    };

    return inputText.replace(/[aeiou]/g, match => conversions[match]);
}

function decryptText(inputText){
    if(/[^a-z\s]/.test(inputText) || inputText === ''){
        showErrorAlert();
        return;
    }

    const conversions = [
        ["ai", "a"],
        ["enter", "e"],
        ["imes", "i"],
        ["ober", "o"],
        ["ufat", "u"],

    ];

    for (let [search, replace] of conversions){
        const regex = new RegExp(search, "g");
        inputText = inputText.replace(regex, replace);
    }
    return inputText;
}

function handleEncryption(event) {
    event.preventDefault();
    const inputText = document.getElementById("textInput").value;
    const result = encryptText(inputText);
    document.getElementById("resultContainer").textContent = result;
    showCopyButton();
}

function handleDecryption(event) {
    event.preventDefault();
    const inputText = document.getElementById("textInput").value;
    const result = decryptText(inputText);
    document.getElementById("resultContainer").textContent = result;
    showCopyButton();
}

function showErrorAlert(){
    alert("El texto tiene caracteres no permitidos... \n" +
        "Únicamente se pueden introducir letras minúsculas... \n" +
        "No se permiten mayúsculas, acentos, números y otros caracteres..."
        );
}

function showCopyButton(){
    const copyButton = document.getElementById("copyButton");
    copyButton.style.display = "block";
}

function copyToClipboard(){
    const result = document.getElementById("resultContainer").textContent;
    navigator.clipboard.writeText(result);
}



