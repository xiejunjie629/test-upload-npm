if (process.env.NODE_ENV === 'production') {
    module.exports = require('./dist/string-diff.min.js')
} else {
    module.exports = require('./dist/string-diff.js')    
}