const { gql } = require('apollo-server');

const typeDefs = gql`
 #Schema definitions 

 "A Track is a group of Modules that teaches about a specific topic"
 type Track{
     "unique id of track"
     id: ID!

     "the track's title"
     title: String!

     "the track's main author"
     author: Author!

     "the track's main illustration to display in track card or track page detail"
     thumbnail: String

     "the track's approximate length to complete, in minutes"
     length: Int

     "the number of modules this track contains"
     modulesCount: Int
 }

 "Author of a complete track"
 type Author{
     "unique id of author"
     id: ID!

     "author's first name and last name"
     name: String!

     "author's profile picture url"
     photo: String
 }

 type Query{
     "This field gets Tracks for home page grid"
     tracksForHome: [Track!]!
 }

`;


module.exports = typeDefs;