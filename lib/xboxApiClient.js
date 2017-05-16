const _ = require('lodash');

module.exports = (xboxApiToken) => {
    const axios = require('axios').create({
        baseURL: 'https://xboxapi.com/v2',
        headers: { 'X-AUTH': xboxApiToken }       
    });

    let xboxApiClient = {};

    const _toResponseObject = (res) => {
        return Object.assign(
            {},
            _.pick(res, [ 'data' ]),
            {
                ratelimit_limit: parseInt(res.headers['x-ratelimit-limit']),
                ratelimit_remaining: parseInt(res.headers['x-ratelimit-remaining']),
                ratelimit_reset: parseInt(res.headers['x-ratelimit-reset'])
            }
        )
    };

    xboxApiClient.getRequest = (url) => {
        return axios({
            method: 'get',
            url: `${url}`
        }).then(response => {
            return _toResponseObject(response);
        })
    }

    return xboxApiClient;
}