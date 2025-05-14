function chunkString(str, chunkLength) {
    // Return empty array if input string is null
    if (str === null) return [];

    // Initialize an empty array to store the chunks
    let result = [];

    // Loop through the string in steps of chunkLength
    for (let i = 0; i < str.length; i += chunkLength) {
        // Push each chunk into the result array
        result.push(str.slice(i, i + chunkLength));
    }

    return result;
}

// Example usage:
console.log(chunkString("Hello, world!", 5)); // ["Hello", ", wor", "ld!"]
console.log(chunkString("12345", 2));         // ["12", "34", "5"]
console.log(chunkString("abc", 5));           // ["abc"]
console.log(chunkString(null, 3));            // []
