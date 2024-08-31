const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Query {
        name: String
        getAllUsers: [Users]
        getAllPosts: [Posts]
        getAllComments: [Comments]
    }

    type Users {
        UserId: Int
        name: String
        username: String
        email: String
    }

    type Posts {
        PostId: Int
        UserId: Int
        title: String
        body: String
    }

    type Comments {
        UserId: Int
        PostId: Int
        username: String
        body: String
    }

    input PostsInput {
        UserId: Int
        PostId: Int
        title: String
        body: String
    }

    input UsersInput {
        UserId: Int
        name: String
        username: String
        email: String
    }

    input CommentsInput {
        UserId: Int
        PostId: Int
        username: String
        body: String
    }

    type Mutation {
        createPost(input: PostsInput): Posts
        createUser(input: UsersInput): Users
        createComment(input: CommentsInput): Comments
    }
`;
console.log("type defined")


module.exports = typeDefs;
