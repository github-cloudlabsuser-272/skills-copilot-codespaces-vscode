const reverseSentence = (sentence) => {
    // Reverse the sentence
    const reversedSentence = sentence.split(' ').reverse().join(' ');

    // Capitalize the first letter of the reversed sentence
    const capitalizedSentence = reversedSentence.charAt(0).toUpperCase() + reversedSentence.slice(1);

    return capitalizedSentence;
};

const inputSentence = "take a sentence as input";
const reversedSentence = reverseSentence(inputSentence);
console.log(reversedSentence);
const flattenedData = data.flat();
console.log(flattenedData);
const names = flattenedData.map(item => item.name);
console.log(names);
const names = data.flatMap(arr => arr.map(item => item.name));
console.log(names);