
const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const analyticsschema = new mongoose.Schema(
    {
        clickBy: {
            type: ObjectId,
            ref: 'User'
        },
        post: {
            type: ObjectId,
            ref: 'Blog'
        }
    },
    { timestamps: true }
);


module.exports = mongoose.model('Analytics', analyticsschema);
