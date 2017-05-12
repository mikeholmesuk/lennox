module.exports = (conn) => {
    let connection = conn;

    let clubs = {};

    clubs.getOwnedClubs = () => {
        return connection({
            method: 'get',
            url: '/clubs/owned'
        }).then(response => {
            return response.data;
        })
    }

    clubs.getJoinedClubsByUserId = (userId) => {
        return connection({
            method: 'get',
            url: `/clubs/joined/${userId}`
        }).then(response => {
            return response.data;
        })
    }

    clubs.getClubDetailsByClubId = (clubId) => {
        return connection({
            method: 'get',
            url: `/clubs/detail/${clubId}`
        }).then(response => {
            return response.data;
        })
    }

    clubs.searchClubByName = (queryName) => {
        return connection({
            method: 'get',
            url: `/clubs/search/${queryName}`
        }).then(response => {
            return response.data;
        })
    }

    clubs.searchClubByTitles = (queryTitles) => {
        return connection({
            method: 'get',
            url: `/clubs/search/${queryTitles}`
        }).then(response => {
            return response.data;
        })
    }

    clubs.searchClubByTags = (queryqueryTags) => {
        return connection({
            method: 'get',
            url: `/clubs/search/${queryTags}`
        }).then(response => {
            return response.data;
        })
    }

    return clubs;
}