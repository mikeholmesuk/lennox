module.exports = (client) => {
    let xboxClient = client;

    let clubs = {};

    clubs.getOwnedClubs = () => {
        return xboxClient.getRequest('/clubs/owned');
    }

    clubs.getJoinedClubsByUserId = (userId) => {
        return xboxClient.getRequest(`/clubs/joined/${userId}`);
    }

    clubs.getClubDetailsByClubId = (clubId) => {
        return xboxClient.getRequest(`/clubs/detail/${clubId}`);
    }

    clubs.searchClubByName = (queryName) => {
        return xboxClient.getRequest(`/clubs/search/${queryName}`);
    }

    clubs.searchClubByTitles = (queryTitles) => {
        return xboxClient.getRequest(`/clubs/search/${queryTitles}`);
    }

    clubs.searchClubByTags = (queryqueryTags) => {
        return xboxClient.getRequest(`/clubs/search/${queryTags}`);
    }

    return clubs;
}