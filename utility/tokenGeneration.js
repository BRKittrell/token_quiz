const crypto = require("crypto");
import {generate} from

function generate() {
    return crypto.randomInt(0, 100000)
}

module.exports = generate



