'use strict';

export default`
    # This is the description for Link type
    type Link {
        id: String! # ! means required
        # This is the description for title
        title: String
        url: String
    }

    # This is the description for Query type
    type Query {
        # This is the description for links
        links: [Link]
    }

    # This is the description for schema type
    schema {
        # This is the description for query
        query: Query
    }
`
