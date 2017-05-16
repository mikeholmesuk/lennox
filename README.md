# Lennox
A (very) basic wrapper around (most of) the `xboxapi.com` public API written in some poxy language.

## Getting Started
This project requires a bit of work on the API integration (pagination for instance) and a lot of work on the docs and examples but overall it is very simple to setup and use. The following should be enough to get you started with playing with the API (fuller docs will follow at some point).

### Prerequisites
Before you can interact with the API, you will need to go to `https://xboxapi.com/` and sign up with a new account (assuming you don't already have one). Once you have an `xboxapi.com` account you will need to authorise your XBox Live account in order to get an `XBoxAPI API Key`. Once you've registered and authenticated your live account you will also be shown your `XBOX Profile User ID` which isn't necessary to use the library but is useful to have to hand when you're testing (although I will give an example of how you can return it anyway if you don't have it around).

### Initialising
You can initialise the library by simply requiring the `index.js` file (I will make this into an `npm` module at some point) and passing in your `XBoxAPI API Key` (henceforth just `API Key`).

```
let lennox = require('./index.js')('<xbox_api_key>')
```

### Response Object
All functions return an object containing the requested data along with the `xboxapi.com` rate limit details for your logged in account. The following are returned as part of any function call:

  * `data (object)` - The data returned from the requested function.
  * `ratelimit-limit (integer)` - This is the number of API requests you can make depending on your `xboxai.com` account. For example, the free account gives you 120 requests an hour.
  * `ratelimit-remaining (integer)` - This is the number of API requests you can still make before the reset period. This will decrement based on every function call to `lennox`.
  * `ratelimit-reset (integer)` - The time, in seconds, until the API limit period is reset.

Example responses can be seen in the usage examples below.

### Usage
Once you have initialised an instance of `lennox` you can simply call any functions that you require on it. All functions return a `Promise` which is the body of the response from `xboxapi.com`.

As an example, the following will return the `XBox User ID` and GamerTag based on the configured `XBOX API Key`:

```
lennox.getAccountId().then(console.log)
//{ data: { xuid: 2533274833971580,
//  gamerTag: 'HoodedBuddhist',
//  gamertag: 'HoodedBuddhist' },
//  ratelimit_limit: 120,
//  ratelimit_remaining: 117,
//  ratelimit_reset: 2350 }
```

Or you can get your full profile:

```
lennox.getProfile().then(console.log)
// Profile info
```

You can get a `User ID` from a GamerTag:

```
lennox.getUserIdByGamertag('HoodedBuddhist').then(console.log)
// { data: { xuid: '2533274833971580' },
//   ratelimit_limit: 120,
//   ratelimit_remaining: 117,
//   ratelimit_reset: 2350 }
```

Or you can get a GamerTag from a `User ID`:

```
lennox.getGamertagByUserId().then(console.log)
// { data: { gamertag: 'HoodedBuddhist' },
//   ratelimit_limit: 120,
//   ratelimit_remaining: 117,
//   ratelimit_reset: 2350 }
```

Once you have your `User ID` (or anyone's for that matter) you can get various details about them. For example their Gamer Card:

```
lennox.getGamerCardByUserId('2533274833971580').then(console.log)
```

Or their recent activity:

```
lennox.getRecentActivityByUserId('2533274833971580').then(console.log)
```

Their friends:

```
lennox.getFriendsByUserId('2533274833971580').then(console.log)
// [] :sob: :(
```

Also any game clips that they might have:

```
lennox.getGameClipsByUserId('').then(console.log)
// { data: [{
// 	   "gameClipId": "ebf92234-45cc-4e7d-82f9-d794b56a8e8a",
//     "state": "Published",
//     "datePublished": "2015-09-13T18:41:16.1425663Z",
//     "dateRecorded": "2015-09-13 18:23:17",
//     "lastModified": "2015-09-13 18:41:16",
//     "userCaption": "",
//     "type": "DeveloperInitiated",
//     "durationInSeconds": 29,
//     "scid": "88940100-b0a6-495b-9f60-d06b4192859e",
//     "titleId": 1100121502,
//     "rating": 0,
//     "ratingCount": 0,
//     "views": 3,
//     "titleData": "",
//     "systemProperties": "fcda6476-2c62-455c-b6c8-638348a89d6f;",
//     "savedByUser": true,
//     "achievementId": "",
//     "greatestMomentId": 6,
//     "thumbnails": [
//     	{
//        	"uri": "https://gameclipscontent-t3001.xboxlive.com/000900000298e97c-ebf92234-45cc-4e7d-82f9-d794b56a8e8a-public/Thumbnail_Small.PNG?sv=2015-12-11&sr=b&si=DefaultAccess&sig=XLF45jETsjLVfXOZR5Up%2FJNlNZidr44ner7Hpvqmjk8%3D",
//           "fileSize": 113305,
//           "thumbnailType": "Small"
//     },
//     {
//     	"uri": "https://gameclipscontent-t3001.xboxlive.com/000900000298e97c-ebf92234-45cc-4e7d-82f9-d794b56a8e8a-public/Thumbnail_Large.PNG?sv=2015-12-11&sr=b&si=DefaultAccess&sig=XWxVVaCBUoQfN3Gx3pvdkcCF7dtT2tOkpc2yrQ%2Fl8vg%3D",
//        "fileSize": 353251,
//        "thumbnailType": "Large"
//     }],
//     "gameClipUris": [
//     {
//     	"uri": "https://gameclipscontent-d3001.xboxlive.com/000900000298e97c-ebf92234-45cc-4e7d-82f9-d794b56a8e8a/GameClip-Original.MP4?sv=2015-12-11&sr=b&si=DefaultAccess&sig=DMREo5jwCEr%2F8agN1ZNriWDjmEYKbi2DBGrSis6MrCE%3D&__gda__=1494541115_e8404fc8e62377c65d799906468d1257",
//        "fileSize": 14470295,
//        "uriType": "Download",
//        "expiration": "2017-05-11 22:18:35"
//     }],
//     "xuid": 2533274833971580,
//     "clipName": "Torturer Elimination",
//     "titleName": "Dishonored® Definitive Edition",
//     "gameClipLocale": "en-GB",
//     "clipContentAttributes": "None",
//     "deviceType": "XboxOne",
//     "commentCount": 0,
//     "likeCount": 0,
//     "shareCount": 0,
//     "partialViews": 0,
//     "gameClipDetails": "https://xboxapi.com/v2/2533274833971580/game-clip-details/88940100-b0a6-495b-9f60-d06b4192859e/ebf92234-45cc-4e7d-82f9-d794b56a8e8a"
//     },
//     ...
// ],
//  ratelimit_limit: 120,
//  ratelimit_remaining: 117,
//  ratelimit_reset: 2350 }
```

### API Functions

The following is an outline of all the functions provided in `lennox` (explanations and fuller documentation for each will come shortly):

* `getProfile()`
* `getAccountId()`
* `getMessages()`
* `getConversations()`
* `getRecentPlayers()`
* `getActivityFeed()`
* `getUserIdByGamertag(gamerTag)`
* `getGamertagByUserId(userId)`
* `getProfileByUserId(userId)`
* `getGamerCardByUserId(userId)`
* `getPresenceByUserId(userId)`
* `getActivityByUserId(userId)`
* `getRecentActivityByUserId(userId)`
* `getFriendsByUserId(userId)`
* `getFollowersByUserId(userId)`
* `getGameClipsByUserId(userId)`
* `getSavedGameClipsByUserId(userId)`
* `getGameClipsByUserIdAndTitleId(userId, titleId)`
* `getScreenshotsByUserId(userId)`
* `getScreenshotsByTitleId(titleId)`
* `getScreenshotsByUserIdAndTitleId(userId, titleId)`
* `getOwnedClubs()`
* `getJoinedClubsByUserId(userId)`
* `getClubDetailsByClubId(userId)`
* `searchClubByName(name)`
* `searchClubByTitles(titles)`
* `searchClubByTags(tags)`
* `getGameStatsByUserIdAndTitleId(userId, titleId)`
* `getXbox360GamesByUserId(userId)`
* `getXboxOneGamesByUserId(userId)`
* `getAchievementsByUserIdAndTitleId(userId, titleId)`
* `getGameDetailsByProductId(productId)`
* `getGameAddonsByProductId(productId)`
* `getRelatedGamesByProductId(productId)`
* `getLatestXbox360Games()`
* `getLatestXboxOneGames()`
* `getLatestXboxOneApps()`
* `getGoldLoungeDeals()`

## Built With

* [Axios](https://github.com/mzabriskie/axios) - A rather good Promise based HTTP client
* [Lodash](https://github.com/lodash/lodash) - Full of excellence

## Authors

* **Mike Holmes** - I Do What I Want `#IDWIW`