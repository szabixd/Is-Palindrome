function isPalindrom(text) {
    const cleanTheIncomeingText = text.toLowerCase().replace(/\s/g, '');
    const reversedWord = cleanTheIncomeingText.split('').reverse().join('');
    if (cleanTheIncomeingText === reversedWord) {
        console.log(`"${text}" is palindrom.`);
        return true;
    } else {
        console.log(`"${text}" is not palindrom.`);
        return false;
    }
}