'use strict';

import schema from '../data/schema';
import { mockServer } from 'graphql-tools';

const server = mockServer(schema);

server.query(`
    {
        links {
            id
            title
            url
        }
    }
    `).then((res) => {
         console.log(JSON.stringify(res));
    }
);