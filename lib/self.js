module.exports = (client) => {
    let xboxClient = client;

    let self = {};

    self.getProfile = () => {
        return xboxClient.getRequest(`/profile`);
    }

    self.getAccountId = () => {
        return xboxClient.getRequest(`/accountXuid`);
    }

    self.getMessages = () => {
        return xboxClient.getRequest(`/messages`);
    }

    self.getConversations = () => {
        return xboxClient.getRequest(`/conversations`);
    }

    self.getRecentPlayers = () => {
        return xboxClient.getRequest(`/recent-players`);
    }

    self.getActivityFeed = () => {
        return xboxClient.getRequest(`/activity-feed`);
    }

    return self;
}
