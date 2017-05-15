module.exports = (xboxidApiToken) => {
    const xboxApiClient = require('./lib/xboxApiClient.js')(xboxidApiToken);

    return Object.assign(
        {},
        require('./lib/self.js')(xboxApiClient),
        require('./lib/user.js')(xboxApiClient),
        require('./lib/media.js')(xboxApiClient),
        require('./lib/clubs.js')(xboxApiClient),
        require('./lib/games.js')(xboxApiClient),
        require('./lib/marketplace.js')(xboxApiClient));
}