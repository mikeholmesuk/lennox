module.exports = (client) => {
    let xboxClient = client;

    let games = {};

    games.getGameStatsByUserIdAndTitleId = (userId, titleId) => {
        return xboxClient.getRequest(`/${userId}/game-stats/${titleId}`);
    }

    games.getXbox360GamesByUserId = (userId) => {
        return xboxClient.getRequest(`/${userId}/xbox360games`);
    }

    games.getXboxOneGamesByUserId = (userId) => {
        return xboxClient.getRequest(`/${userId}/xboxonegames`);
    }

    games.getAchievementsByUserIdAndTitleId = (userId, titleId) => {
        return xboxClient.getRequest(`/${userId}/achievements/${titleId}`);
    }

    games.getGameDetailsByProductId = (productId) => {
        return xboxClient.getRequest(`/game-details/${productId}`);
    }

    games.getGameAddonsByProductId = (productId) => {
        return xboxClient.getRequest(`/game-details/${productId}/addons/1`);
    }

    games.getRelatedGamesByProductId = (productId) => {
        return xboxClient.getRequest(`/game-details/${productId}/related`);
    }

    return games;
}