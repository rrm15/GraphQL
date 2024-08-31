const { Post, Comment, User } = require('./post.model');

const resolvers = {
    Query: {
        getAllPosts: async () => {
            try {
                return await Post.find();
            } catch (error) {
                console.error("Error fetching posts:", error);
                throw new Error("Failed to fetch posts");
            }
        },
        getAllUsers: async () => {
            try {
                return await User.find();
            } catch (error) {
                console.error("Error fetching users:", error);
                throw new Error("Failed to fetch users");
            }
        },
        getAllComments: async () => {
            try {
                return await Comment.find();
            } catch (error) {
                console.error("Error fetching comments:", error);
                throw new Error("Failed to fetch comments");
            }
        },
    },
    Mutation: {
        createPost: async (parent, { input }) => {
            try {
                // Log the input to see if it's being passed correctly
                console.log("Input data for createPost:", input.Post);

                const { PostId,UserId, title, body } = input;
                const post = new Post({ PostId, UserId,title, body });

                // Log after constructing the Post object
                console.log("Post object created:", post);

                if (input) {
                    console.log("Input was provided successfully");
                } else {
                    console.log("No input provided");
                }

                await post.save();

                // Log after saving to the database
                console.log("Post saved successfully:", post);

                return post;
            } catch (error) {
                console.error("Error creating post:", error);
                throw new Error("Failed to create post");
            }
        },
        createUser: async (parent, { input }) => {
            try {
                console.log("Input data for createUser:", input.User);

                const { UserId, name, username, email } = input;
                const user = new User({ UserId, name, username, email });

                console.log("User object created:", user);

                if (input) {
                    console.log("Input was provided successfully");
                } else {
                    console.log("No input provided");
                }

                await user.save();

                console.log("User saved successfully:", user);

                return user;
            } catch (error) {
                console.error("Error creating user:", error);
                throw new Error("Failed to create user");
            }
        },
        createComment: async (parent, { input }) => {
            try {
                console.log("Input data for createComment:", input.Comment);

                const { UserId, PostId, username, body } = input;
                const comment = new Comment({ UserId, PostId, username, body });

                console.log("Comment object created:", comment);

                if (input) {
                    console.log("Input was provided successfully");
                } else {
                    console.log("No input provided");
                }

                await comment.save();

                console.log("Comment saved successfully:", comment);

                return comment;
            } catch (error) {
                console.error("Error creating comment:", error);
                throw new Error("Failed to create comment");
            }
        },
    }
};

module.exports = resolvers;
