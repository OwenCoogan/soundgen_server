const { Model } = require('mongoose')

/* 
Definition
*/
    const Controllers = {
        auth: require('./auth.controller'),
        post: require('./post.controller'),
        song: require('./song.controller'),
        comment: require('./comment.controller'),
    }
//

/* 
Export
*/
    module.exports = Controllers;
//