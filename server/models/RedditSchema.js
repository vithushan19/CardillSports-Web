var mongoose = require('mongoose');

var RedditDataChildrenDataSchema = new mongoose.Schema({
    domain: String,
    subreddit: String,
    url: String,
    title: String
});

var RedditDataChildrenSchema = new mongoose.Schema({
    data: RedditDataChildrenDataSchema
});

var RedditDataSchema = new mongoose.Schema({
    children: RedditDataChildrenSchema
});

var RedditSchema = new mongoose.Schema({
    kind: String,
    data: RedditDataSchema
});