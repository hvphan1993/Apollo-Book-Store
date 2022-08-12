const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Book {
    _id: ID
    authors: [String]
    description: String
    bookId: String
    image: String
    forSale: String
    link: String
    title: String
  }, 

  type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Books]

  },

  input savedBook {
    description: String
    title: String
    bookId: String
    image: String
    link: String
    authors: [String]
  },

  type Query {
    me: User
  }

//   type mutation {

//   }

//   type Auth {

//   }


`;

module.exports = typeDefs;