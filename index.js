const Quill = require('quill');

const options = {
  debug: 'info',
  modules: {
    toolbar: '#toolbar',
  },
  placeholder: 'Compose an epic...',
  readOnly: true,
  theme: 'snow',
};

const editor = new Quill('#editor', options);

var quill = new Quill('#editor', {
  theme: 'snow',
});
