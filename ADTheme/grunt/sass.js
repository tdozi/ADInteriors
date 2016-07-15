'use strict';

module.exports = {
    staging: {
        options: {
            style: 'expanded'
        },
        files: [
          {
            expand: true,
            cwd: '<%= dirs.source %>/scss',
            src: ['*.scss'],
            dest: '<%= dirs.staging %>/css',
            ext: '.css'
          }
        ]
  },

  release: {
    options: {
        style: 'expanded'
    },
    files: [
      {
        expand: true,
        cwd: '<%= dirs.source %>/scss',
        src: ['screen.scss'],
        dest: '<%= dirs.release %>/css',
        ext: '.css'
      }
    ]
  }
};