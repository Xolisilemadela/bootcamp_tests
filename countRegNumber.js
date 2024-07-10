function countRegNumber(registrationString) {
    // Split the string into an array of registration numbers
    var registrationNumbers = registrationString.split(',');

    // Return the length of the array, which is the number of registration numbers
    return registrationNumbers.length;
}
