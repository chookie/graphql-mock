'use strict';

const mongoUser = 'XXXX';
const mongoPwd = 'XXXX';

export default {
  port: process.env.port || 3003,
  mongo: process.env.MONGO_URL || `mongodb://${mongoUser}:${mongoPwd}@ds012345.mlab.com:1234/rgrjs`
}
