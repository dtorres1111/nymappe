function logger(string) {
    let reverseString = string.split("")
        .reverse()
        .join("");
        console.log(reverseString);
}

modules.exports = logger;