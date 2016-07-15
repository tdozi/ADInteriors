'use strict';

module.exports = {
  css: {
    src: [
    "<%= dirs.source %>/scss/icons.scss",
    "<%= dirs.source %>/scss/general.scss",
    "<%= dirs.source %>/scss/utilities.scss",
    "<%= dirs.source %>/scss/casper.scss",
    "<%= dirs.source %>/scss/single-post.scss",
    "<%= dirs.source %>/scss/author-profile.scss",
    "<%= dirs.source %>/scss/read-more.scss",
    "<%= dirs.source %>/scss/pagination.scss",
    "<%= dirs.source %>/scss/footer.scss",
    "<%= dirs.source %>/scss/media-queries.scss",
    "<%= dirs.source %>/scss/animations.scss",
    "<%= dirs.source %>/scss/casperstarter.scss"
     ],
    dest: "<%= dirs.source %>/scss/screen.scss"
  }
};