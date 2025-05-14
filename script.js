function validEmail(str) {
    // Return false for empty input
    if (!str) return false;

    // Regular expression for validating email format
    const emailRegex = /^[a-zA-Z0-9]+([._-]?[a-zA-Z0-9]+)*@[a-zA-Z0-9]+([.-]?[a-zA-Z0-9]+)*\.[a-zA-Z]{2,}$/;

    return emailRegex.test(str);
}

// Test cases
console.log(validEmail('abc@example.com'));     // true
console.log(validEmail('xyz@abc.com.in'));      // true
console.log(validEmail('john.doe@com.'));       // false
console.log(validEmail('@example.com'));        // false
console.log(validEmail(''));                    // false
