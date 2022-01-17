export const buildDirectory = './dist';
export const path = {
  root: buildDirectory,
  scss: {
    src: 'src/scss/**/*.scss',
    dest: `${buildDirectory}/assets/css`
  },
  js: {
    src: 'src/js/**/*.js',
    dest: `${buildDirectory}/assets/js`
  },
  ejs: {
    src: 'src/ejs/**/*.ejs',
    dest: `${buildDirectory}`
  },
  file: {
    static: 'static/**',
    dest: `${buildDirectory}`
  }
};