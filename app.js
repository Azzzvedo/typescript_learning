var userInput;
var username;
userInput = 5;
userInput = "Max";
if (typeof userInput === "string") {
    username = userInput;
}
var generateError = function (message, code) {
    throw { message: message, errorCode: code };
};
generateError("An error occurred", 500);
