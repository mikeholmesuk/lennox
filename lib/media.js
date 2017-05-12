module.exports = (conn) => {
    let connection = conn;

    let media = {};

    media.getGameClipsByUserId = (userId) => {
        return connection({
            method: 'get',
            url: `/${userId}/game-clips`
        }).then(response => {
            return response.data;
        })
    }

    media.getSavedGameClipsByUserId = (userId) => {
        return connection({
            method: 'get',
            url: `/${userId}/game-clips/saved`
        }).then(response => {
            return response.data;
        })
    }

    media.getGameClipsByUserIdAndTitleId = (userId, titleId) => {
        return connection({
            method: 'get',
            url: `/${userId}/game-clips/${titleId}`
        }).then(response => {
            return response.data;
        })
    }

    media.getScreenshotsByUserId = (userId) => {
        return connection({
            method: 'get',
            url: `/${userId}/screenshots`
        }).then(response => {
            return response.data;
        })
    }

    media.getScreenshotsByTitleId = (titleId) => {
        return connection({
            method: 'get',
            url: `/screenshots/${titleId}`
        }).then(response => {
            return response.data;
        })
    }

    media.getScreenshotsByUserIdAndTitleId = (userId, titleId) => {
        return connection({
            method: 'get',
            url: `/${userId}/screenshots/${titleId}`
        }).then(response => {
            return response.data;
        })
    }    

    return media;
}