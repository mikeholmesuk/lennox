module.exports = (conn) => {
    let connection = conn;

    let self = {};

    self.getProfile = () => {
        return connection({
            method: 'get',
            url: '/profile'
        }).then(response => {
            return response.data;
        })
    }

    self.getAccountId = () => {
        return connection({
            method: 'get',
            url: '/accountXuid'
        }).then(response => {
            return response.data;
        })
    }

    self.getMessages = () => {
        return connection({
            method: 'get',
            url: '/messages'
        }).then(response => {
            return response.data;
        })
    }

    self.getConversations = () => {
        return connection({
            method: 'get',
            url: '/conversations'
        }).then(response => {
            return response.data;
        })
    }

    self.getRecentPlayers = () => {
        return connection({
            method: 'get',
            url: '/recent-players'
        }).then(response => {
            return response.data;
        })
    }

    self.getActivityFeed = () => {
        return connection({
            method: 'get',
            url: '/activity-feed'
        }).then(response => {
            return response.data;
        })
    }

    return self;
}
