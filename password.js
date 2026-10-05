import readline from "readline/promises";
import { stdin as input, stdout as output } from "process";

const rl = readline.createInterface({ input, output });

const generatePassword = (length, specialChar) => {
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789" + specialChar;
    let password = "";
    
    for (let i = 0; i < length; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    
    return password.split('').sort(() => Math.random() - 0.5).join('');
}

async function main(){
    const name = await rl.question("What is your Name? ");
    const favoriteNumber = await rl.question("What is your favorite number? ");
    const specialChar = await rl.question("What is your favorite special character? ");
    const lengthInput = await rl.question("What is the length of the password you want to generate? (minimum 8 characters): ");
    
    // Convert input to integer and enforce minimum length of 8
    const length = Math.max(8, parseInt(lengthInput) || 8);
    
    const password = generatePassword(length, specialChar + favoriteNumber);

    console.log(`\nHello ${name}, your generated password is: ${password}`); 
    rl.close();
}

main();