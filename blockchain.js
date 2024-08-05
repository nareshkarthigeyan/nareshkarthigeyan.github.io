const crypto = require('crypto');
const prompt = require('prompt-sync')({ sigint: true });


function findHashWithPrefix(base, prefix){
    let i = 0;
    while(true){
        let input = base.toString() + i.toString();
        const hash = crypto.createHash('sha256').update(input).digest('hex')
        if(hash.startsWith(prefix.toString()))
        {
            return {input: base.toString(), hash: hash, nonce: i};
            break;
        }
        i++;
    }
}

let i = 0;
let prevHash = '0000000000000000000000000000000000000000000000000000000000000000';
console.log("Blockchain creator:");
while(true){
    console.log("")
    console.log("")
    console.log(`Block ${i}:`);

    let input = prompt("Enter input: ");
    input = input + prevHash;
    const result = findHashWithPrefix(input, '0000');
    console.log(`Input: ${result.input}`)
    console.log(`Hash: ${result.hash}`)
    console.log(`Nonce: ${result.nonce}`)
    prevHash = result.hash
    i++;
}

