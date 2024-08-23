
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

