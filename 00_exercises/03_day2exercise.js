// Day 3

// Exercise: Level 3

// 1. 'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.
let string1 = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
let arrayLove = string1.match(/Love/gi);
let countLove = arrayLove.length
console.log(`The number of Love appeared is ${countLove} times.`);

// 2. Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
let string2 = "You cannot end a sentence with because because because is a conjunction"
let arrayBecause = string2.match(/because/gi)
let countBecause = arrayBecause.length
console.log(`The number of times the phrase because appeared is ${countBecause} times.`);

// 3. Clean the following text and find the most frequent word (hint, use replace and regular expressions).
const sentence = "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching."
const cleanSentence = sentence.replace(/[%$@&#;!]/g, "") // cleaning the string from special characters
const arraySentence = cleanSentence.split(/\s+/) // splitting using regex that makes it into the array,

// creating a function that takes arrays and returns the most frequent item.
function frequentWord(param) {
    // creating a object that stores how much a single word appears
    let wordFrequency = {};

    // using for loop that iterates over each array item
    for (let word of param) {
        // using if else statement
        // works by setting condition which is true, 
        // adds a key value pair where word is key and ++ adds one to it
        // if the key does not exist in object, it will create new object and assign 1
        if (wordFrequency[word]) {
            wordFrequency[word]++
        } else {
            wordFrequency[word] = 1;
        }
    }
    // Now, we have the object with word and their most frequent
    // how to list the most down automatically?
    // the way is to check each word in wordfrequency and check its value
    // but we may not know the which word may have the highest value
    // let's initialize the maxCount and if the word count is greater than that we assign one to it
    // but we have to check each word separately and list the most frequent one
    // we also initialize the most frequent word an empty
    // we iterate over each object, see the value, if the value is greater than maxCount, we assign it the value of key
    // we will use let locally in if statement, so that we can change it later, if there is another word which has greater value appears
    let mostFrequentWords = [];
    let maxCount = 0;

    for (let word in wordFrequency) {
        if(wordFrequency[word] > maxCount) {
            mostFrequentWords = [word]; // starting a new array with the current word
            maxCount = wordFrequency[word];
        } else if (wordFrequency[word]=== maxCount) {
            mostFrequentWords.push(word); // adding the word to the array if it has the same max frequency
        }
    }
    // returning the array of most frequent words
    return mostFrequentWords;
}

console.log(`The most frequent word is '${frequentWord(arraySentence)}'.`); 