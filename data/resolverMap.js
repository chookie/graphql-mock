'use strict';

export default {
  Query: {
    links(root, args, context, info) {
      return [{id:1,title:"first",url:"url1"}]
    }
  }
}
