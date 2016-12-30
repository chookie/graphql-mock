'use strict';

import schemaString from '../data/schema';
import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
import { graphql } from 'graphql';

// Make a GraphQL schema with no resolvers
const schema = makeExecutableSchema({ typeDefs: schemaString });

// Add mocks, modifies schema in place
addMockFunctionsToSchema({ schema });

const query = `
{
  links {
    id
    title
    url
  }
}
`;

graphql(schema, query).then((result) => console.log('Got result', JSON.stringify(result)));
