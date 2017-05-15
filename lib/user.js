module.exports = (client) => {
    let xboxClient = client;

    let user = {};

    user.getUserIdByGamertag = (gamerTag) => {
        return xboxClient.getRequest(`/xuid/${gamerTag}`);
    }

    user.getGamertagByUserId = (userId) => {
        return xboxClient.getRequest(`/gamertag/${userId}`);
    }

    user.getProfileByUserId = (userId) => {
        return xboxClient.getRequest(`/${userId}/profile`);
    }

    user.getGamerCardByUserId = (userId) => {
        return xboxClient.getRequest(`/${userId}/gamercard`);
    }

    user.getPresenceByUserId = (userId) => {
        return xboxClient.getRequest(`/${userId}/presence`);
    }

    user.getActivityByUserId = (userId) => {
        return xboxClient.getRequest(`/${userId}/activity`);
    }

    user.getRecentActivityByUserId = (userId) => {
        return xboxClient.getRequest(`/${userId}/activity/recent`);
    }

    user.getFriendsByUserId = (userId) => {
        return xboxClient.getRequest(`/${userId}/friends`);
    }

    user.getFollowersByUserId = (userId) => {
        return xboxClient.getRequest(`/${userId}/followers`);
    }

    return user;
}