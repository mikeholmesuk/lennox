module.exports = (conn) => {
    let connection = conn;

    let games = {};

    games.getGameStatsByUserIdAndTitleId = (userId, titleId) => {
        return connection({
            method: 'get',
            url: `/${userId}/game-stats/${titleId}`
        }).then(response => {
            return response.data;
        })
    }

    games.getXbox360GamesByUserId = (userId) => {
        return connection({
            method: 'get',
            url: `/${userId}/xbox360games`
        }).then(response => {
            return response.data;
        })
    }

    games.getXboxOneGamesByUserId = (userId) => {
        return connection({
            method: 'get',
            url: `/${userId}/xboxonegames`
        }).then(response => {
            return response.data;
        })
    }

    games.getAchievementsByUserIdAndTitleId = (userId, titleId) => {
        return connection({
            method: 'get',
            url: `${userId}/achievements/${titleId}`
        }).then(response => {
            return response.data;
        })
    }

    games.getGameDetailsByProductId = (productId) => {
        return connection({
            method: 'get',
            url: `game-details/${productId}`
        }).then(response => {
            return response.data;
        })
    }

    games.getGameAddonsByProductId = (productId) => {
        return connection({
            method: 'get',
            url: `game-details/${productId}/addons/1`
        }).then(response => {
            return response.data;
        })
    }

    games.getRelatedGamesByProductId = (productId) => {
        return connection({
            method: 'get',
            url: `game-details/${productId}/related`
        }).then(response => {
            return response.data;
        })
    }

    return games;
}