'use strict';

let Resolver = (db) => {
  db.collection("links").find({}).toArray().then( (res) =>
    console.log(res)
  );

  let resolver = {
    Query: {
      links(root, args, context, info) {
        return db.collection("links").find({}).toArray()
      }
    },
    Link: {
      id(root, args, context, info) {
        return root._id;
      }
    }
  }

  return resolver;
}

export default Resolver;
