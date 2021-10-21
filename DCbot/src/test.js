const _test = require('./DBComands/mongodb/test')





module.exports = async function test(msg, args) {
    await _test(msg);
}