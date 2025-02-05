const graphql= require('graphql');
const _= require('lodash');
const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql;

//dummy data

var books = [
    { name:'The Hobbit', genre:'Fantasy', id:'1'},
    { name:'Lord of The Rings' , genre:'Fantasy', id:'2'},
    { name:'The Silmarillion', genre:'Fantasy', id:'3'}
];
const BookType = new GraphQLObjectType({
    name: "Book",
    fields: () => ({
      id:{ type: GraphQLString },
      name:{ type: GraphQLString },
      genre:{ type: GraphQLString }
    })
});

const RootQuery = new GraphQLObjectType ({
    name: 'RootQueryType',
    fields: {
        book: {
            type: BookType,
            args: { id: {type: GraphQLString } },
            resolve(parent, args) {
                return _.find(books, {id: args.id});

            }

        }
    }
});



module.exports = new GraphQLSchema({
    query: RootQuery
})