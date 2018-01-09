var app = require('../index.js');

module.exports = {
  posts: function(req, res, next) {
    res.send([
      {
        title: 'I am A Post Title, Hear me Roar!',
        contents: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
        image: '../../images/Layer1.png',
        link: '#'
      }, {
        title: 'I Run A Pretty Tight Ship Around Here. With A Pool Table. Its A Gaming Ship.',
        contents: 'the shock to my already overstrained nervous system was terrible in the extreme, and with a superhuman effort I strove to break my awful bonds. It was an effort of the mind, of the will, of the nerves; not muscular, for I could not move even so much as my little finger, but none the less mighty for all that.',
        image: '../../images/Layer2.png',
        link: '#'
      }, {
        title: 'The One Where Michael Leaves.',
        contents: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
        image: '../../images/Layer3.png',
        link: '#'
      }, {
        title: 'Bringing Up Buster',
        contents: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
        image: '../../images/Layer4.png',
        link: '#'
      }, {
        title: 'I am A Post Title hear Me Roar!',
        contents: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
        image: '../../images/Layer5.png',
        link: '#'
      }, {
        title: 'For British Eyes Only',
        contents: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
        image: '../../images/Layer6.png',
        link: '#'
      }
    ]);
  },
  moreposts: function(req, res, next) {
    res.send([
      {
        title: 'Hey Look Another Post',
        contents: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
        image: '../../images/Layer5.png',
        link: '#'
      }, {
        title: 'Yet Another One',
        contents: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
        image: '../../images/Layer1.png',
        link: '#'
      }, {
        title: 'To Be Or Not To Be',
        contents: 'To be, or not to be: that is the question: Whether tis nobler in the mind to suffer The slings and arrows of outrageous fortune',
        image: '../../images/Layer6.png',
        link: '#'
      }, {
        title: 'ALL CAPS IS ANNOYING',
        contents: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
        image: '../../images/Layer4.png',
        link: '#'
      }, {
        title: 'The winter up here is terrible',
        contents: 'No sunlight, so cold, much polution, very sad.',
        image: '../../images/Layer3.png',
        link: '#'
      }, {
        title: 'Luke, I am your father.',
        contents: 'NOOOO!',
        image: '../../images/Layer2.png',
        link: '#'
      }
    ])
  }
}
