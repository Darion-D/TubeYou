const mongoose = require('mongoose')
const db = require('./index')


require('../config/db.connections')


db.Comment.deleteMany({}, function (error, deletedComments){
    if (error) {
        return console.log(error)
    }
    db.Comment.insertMany(
        [
            {
                user: 'Yer Boi',
                body: 'This banger hits yo!',
                video: '630d161f2adf6d06b6ee07e3'
            },
            {
                user: 'Yer Boi',
                body: 'This show hits yo!',
                video: '630d161f2adf6d06b6ee07e4'
            },
            {
                user: 'Yer Boi',
                body: 'This guy is funny as heck yo!',
                video: '630d161f2adf6d06b6ee07e5'
            }
        ]
    )
})