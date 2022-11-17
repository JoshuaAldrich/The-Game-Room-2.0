const User = require('../models/User');
const Game = require('../models/Game');
const { AuthenticationError } = require('apollo-server-express');

const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id })
                    
                return userData;
            }
            throw new AuthenticationError('not logged in');
        }
        ,
        user: async (parent, { name }) => {
            return User.findOne({ name })
        },
        users: async () => {
            return User.find();
        }

    },
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user)

            return { token, user };
        },

        login: async (parent, { name, password }) => {
            const user = await User.findOne({ name });

            if (!user) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }
            const token = signToken(user);
            return { token, user };
        }
    },
};

module.exports = resolvers;