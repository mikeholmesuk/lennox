module.exports = (conn) => {
    let connection = conn;

    let user = {};

    user.getUserIdByGamertag = (gamerTag) => {
        return connection({
            method: 'get',
            url: `/xuid/${gamerTag}`
        }).then(response => {
            return response.data;
        })
    }

    user.getGamertagByUserId = (userId) => {
        return connection({
            method: 'get',
            url: `/gamertag/${userId}`
        }).then(response => {
            return response.data;
        })
    }

    user.getProfileByUserId = (userId) => {
        return connection({
            method: 'get',
            url: `/${userId}/profile`
        }).then(response => {
            return response.data;
        })
    }

    user.getGamerCardByUserId = (userId) => {
        return connection({
            method: 'get',
            url: `/${userId}/gamercard`
        }).then(response => {
            return response.data;
        })
    }

    user.getPresenceByUserId = (userId) => {
        return connection({
            method: 'get',
            url: `/${userId}/presence`
        }).then(response => {
            return response.data;
        })
    }

    user.getActivityByUserId = (userId) => {
        return connection({
            method: 'get',
            url: `/${userId}/activity`
        }).then(response => {
            return response.data;
        })
    }

    user.getRecentActivityByUserId = (userId) => {
        return connection({
            method: 'get',
            url: `/${userId}/activity/recent`
        }).then(response => {
            return response.data;
        })
    }

    user.getFriendsByUserId = (userId) => {
        return connection({
            method: 'get',
            url: `/${userId}/friends`
        }).then(response => {
            return response.data;
        })
    }

    user.getFollowersByUserId = (userId) => {
        return connection({
            method: 'get',
            url: `/${userId}/followers`
        }).then(response => {
            return response.data;
        })
    }

    return user;
}