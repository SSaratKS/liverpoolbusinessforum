

// Theme
var theme = 'auto';
if (document.location.search.indexOf('theme=') >= 0) {
  theme = document.location.search.split('theme=')[1].split('&')[0];
}

// Init App
var app = new Framework7({
  id: 'com.s3kdevelopers.liverpoolbusinessforum',
  // App root element
  root: '#app',
  // App Name
  name: 'Liverpool Business Forum',
  theme: theme,
  // Enable swipe panel
  panel: {
    //swipe: 'left',
  },
  data: function () {
    return {
      user: {
        firstName: 'Sarat Kumar',
        lastName: 'Sarvepalli',
      },
    };
  },
  methods: {
    helloWorld: function () {
      app.dialog.alert('Developed by S3K Developers!');
    },
  },
  routes: routes,
  vi: {
    placementId: '',
  },
});
