'use strict';

import casual from 'casual-browserify';

export default {
  Link: () => ({
    title: () => casual.title,
    url: () => casual.url
  })
}
