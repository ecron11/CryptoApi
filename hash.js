const crypto = require('crypto');

module.exports = {
    createDigest : (input, algo) => {
        //create a hash object
        let hash = crypto.createHash(algo);

        //update the hash object with the input
        hash.update(input);

        //digest the hash input
        let hexDigest = hash.digest('hex');

        //convert it to base
        var base64Digest = Buffer.from(hexDigest, 'hex').toString('base64');

        return {
            hexDigest: hexDigest,
            base64Digest: base64Digest
        }
    }
}