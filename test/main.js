const tests = {
    'The quick brown fox jumps over the lazy dog': '730e109bd7a8a32b1cb9d9a09aa2325d2430587ddbc0c38bad911525',
    'The quick brown fox jumps over the lazy dog.': '619cba8e8e05826e9b8c519c0a5c68f4fb653e8a3d8aa04bb2c8cd4c',
}

const sha2_224 = require('../src/main.js')
for (const input of Object.keys(tests)) {
    const output = tests[input]
    if (sha2_224(input) !== tests[input]) {
        throw `input failed ${input} ${sha2_224(input)} should be ${output}`
    }
}