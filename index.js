module.exports = (xboxidApiToken) => {
    const axios = require('axios').create({
        baseURL: 'https://xboxapi.com/v2',
        headers: { 'X-AUTH': xboxidApiToken }
    });

    return Object.assign(
        {},
        require('./lib/self.js')(axios),
        require('./lib/user.js')(axios),
        require('./lib/media.js')(axios),
        require('./lib/clubs.js')(axios),
        require('./lib/games.js')(axios),
        require('./lib/marketplace.js')(axios));
}