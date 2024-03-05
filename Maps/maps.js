// Create a Map
const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200],
]);

// console.log(fruits, 8);

fruits.set("kola", 600);
// console.log(fruits);

const sss = fruits.get("kola");
// console.log(sss);

const aaaa = fruits.size;

// console.log(aaaa);

const ddd = fruits.delete("am");

//console.log(ddd,22);

/*

Problem: Unique Words Count

Write a function countUniqueWords(sentence) that takes a 
sentence as a parameter and returns the count of unique
words in the
sentence. Consider a word to be case-sensitive, 
so "Hello"
and "hello" should be treated as different words.



*/

function countUniqueWords(sentence) {
  // Split the sentence into words
  const words = sentence.split(/\s+/);

  // console.log(words,43);

  // Create a Map to store the count of each unique word
  const wordCountMap = new Map();

  // console.log(wordCountMap,49);
  // Count the occurrences of each word
  words.forEach((word) => {
    // Remove punctuation and convert to lowercase for case-insensitive comparison
    const cleanedWord = word.replace(/[^\w\s]/g, "").toLowerCase();

    console.log(cleanedWord, 55);

    // Update the count in the Map
    const count = wordCountMap.get(cleanedWord) || 0;

    console.log(count, 60);
    const a = wordCountMap.set(cleanedWord, count + 1);

    console.log(a,62);
  });

  // Return the number of unique words
  return wordCountMap.size;
}

// Example usage:
const sentence = "Hello world! Hello, beautiful world!";
const uniqueWordCount = countUniqueWords(sentence);
console.log("Unique words count:", uniqueWordCount);
