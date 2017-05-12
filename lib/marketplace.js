module.exports = (conn) => {
    let connection = conn;

    let marketplace = {};

    marketplace.getLatestXbox360Games = () => {
        return connection({
            method: 'get',
            url: '/latest-xbox360-games'
        }).then(response => {
            return response.data;
        })
    }

    marketplace.getLatestXboxOneGames = () => {
        return connection({
            method: 'get',
            url: '/latest-xboxone-games'
        }).then(response => {
            return response.data;
        })        
    }

    marketplace.getLatestXboxOneApps = () => {
        return connection({
            method: 'get',
            url: '/latest-xboxone-apps'
        }).then(response => {
            return response.data;
        })        
    }

    marketplace.getGoldLoungeDeals = () => {
        return connection({
            method: 'get',
            url: '/xboxone-gold-lounge'
        }).then(response => {
            return response.data;
        })        
    }

    // /v2/browse-marketplace/xbox360/1?sort=releaseDate
    // /v2/browse-marketplace/games/1?sort=releaseDate
    // /v2/browse-marketplace/apps/1?sort=releaseDate

    return marketplace;
}


