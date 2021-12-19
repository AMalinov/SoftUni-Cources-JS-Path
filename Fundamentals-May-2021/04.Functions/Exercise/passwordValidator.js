function passwordValidator(password) {

    function isLengthBetweenSixAndTen(string) {
        if(string.length >= 6 && string.length <= 10) {
            return true;
        } else {
            return false;
        }
    }

    function hasOnlyLettersAndDigits (string) {
        for (const char of string) {
            let charCode = char.charCodeAt(0);

            if (!(charCode >= 48 && charCode <= 57) && 
                !(charCode >= 65 && charCode <= 90) && 
                !(charCode >= 97 && charCode <= 122)) {
                    return false;
            }
        }
        return true;
    }

    function hasAtleastTwoDigits (string) {
        let count = 0;

        for (const char of string) {
            let charCode = char.charCodeAt(0);
            if(charCode >= 48 && charCode <= 57){
                count++;
            }
        }
        return count >= 2;
    }

    let isLengthValid = isLengthBetweenSixAndTen(password);
    let containsLettersAndDigits = hasOnlyLettersAndDigits(password);
    let containsAtleastTwoDigits = hasAtleastTwoDigits(password);

    if(isLengthValid && containsLettersAndDigits && containsAtleastTwoDigits) {
        console.log('Password is valid');
        return;
    }

    if(!isLengthValid) {
        console.log('Password must be between 6 and 10 characters');
    }

    if(!containsLettersAndDigits) {
        console.log('Password must consist only of letters and digits');
    }

    if(!containsAtleastTwoDigits) {
        console.log('Password must have at least 2 digits');
    }
}

passwordValidator('logIn');