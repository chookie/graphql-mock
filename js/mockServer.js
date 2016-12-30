'use strict';

import projectConfig from '../project.config';
import schemaString from '../data/schema';
import mockResolver from '../data/mockResolver';
import resolverMap from '../data/resolverMap';
import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
import { graphql } from 'graphql';
import express from 'express';
import GraphQLHTTP from 'express-graphql';
import { MongoClient } from 'mongodb';

// Create variable app by executing express function.
const app = express();


// Make a GraphQL schema with no resolvers
const mockSchema = makeExecutableSchema({ typeDefs: schemaString });

// Add mocks, modifies schema in place
addMockFunctionsToSchema({
  schema: mockSchema,
  mocks: mockResolver,
  // overwrite all resolvers with the mocks
  preserveResolvers: false
});

app.use('/mock', GraphQLHTTP({
    schema: mockSchema,
    graphiql: true
}));


const realSchema = makeExecutableSchema({
  typeDefs: schemaString,
  resolvers: resolverMap
});

app.use('/graphql', GraphQLHTTP({
    schema: realSchema,
    graphiql: true
}));

app.listen(projectConfig.port, function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log(`Server started at http://localhost:${projectConfig.port}`)
    }
});
