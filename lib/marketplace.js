module.exports = (client) => {
    let xboxClient = client;

    let marketplace = {};

    marketplace.getLatestXbox360Games = () => {
        return xboxClient.getRequest('/latest-xbox360-games');
    }

    marketplace.getLatestXboxOneGames = () => {
        return xboxClient.getRequest('/latest-xboxone-games');      
    }

    marketplace.getLatestXboxOneApps = () => {
        return xboxClient.getRequest('/latest-xboxone-apps');       
    }

    marketplace.getGoldLoungeDeals = () => {
        return xboxClient.getRequest('/xboxone-gold-lounge');      
    }

    // /v2/browse-marketplace/xbox360/1?sort=releaseDate
    // /v2/browse-marketplace/games/1?sort=releaseDate
    // /v2/browse-marketplace/apps/1?sort=releaseDate

    return marketplace;
}


