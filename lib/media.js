module.exports = (client) => {
    let xboxClient = client;

    let media = {};

    media.getGameClipsByUserId = (userId) => {
        return xboxClient.getRequest(`/${userId}/game-clips`);
    }

    media.getSavedGameClipsByUserId = (userId) => {
        return xboxClient.getRequest(`/${userId}/game-clips/saved`);
    }

    media.getGameClipsByUserIdAndTitleId = (userId, titleId) => {
        return xboxClient.getRequest(`/${userId}/game-clips/${titleId}`);
    }

    media.getScreenshotsByUserId = (userId) => {
        return xboxClient.getRequest(`/${userId}/screenshots`);
    }

    media.getScreenshotsByTitleId = (titleId) => {
        return xboxClient.getRequest(`/screenshots/${titleId}`);
    }

    media.getScreenshotsByUserIdAndTitleId = (userId, titleId) => {
        return xboxClient.getRequest(`/${userId}/screenshots/${titleId}`);
    }    

    return media;
}