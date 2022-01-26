const notifier = require('node-notifier');
const opn = require('open');
// String
// notifier.notify('Message');

// Object
notifier.notify({
  title: 'My notification',
  message: 'Hello, there!',
  wait: true
},
function (error) {
    console.log(error)
    opn('https://www.google.com')
}    
);
