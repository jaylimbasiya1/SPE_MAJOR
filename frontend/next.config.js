const withCSS = require('@zeit/next-css');

module.exports={
    publicRuntimeConfig: {
        APP_NAME: 'SPE_MAJOR_PROJECT',
        //API: 'http://localhost:8000/api',
        API_DEVELOPMENT: 'http://localhost:8000/api',
        API_PRODUCTIONS: 'https://spemajor.com',
        PRODUCTION: 'fasle',
        DOMAIN_DEVELOPMENT: 'http://localhost:3000',
        DOMAIN_PRODUCTION: 'https://spemajor.com',
        FB_APP_ID: '43efer3f3rt3g3f',
        GOOGLE_CLIENT_ID:'185010297137-utmvgu3tsrl3h1c3dmbn17aa4qbkjbk3.apps.googleusercontent.com'

    }
}