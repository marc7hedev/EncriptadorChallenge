
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