# Libs

Here are some info about some internal libraries that I am writing. The goal is to write them, test them, refactor them as needed and eventually extract them out and publish them as standalone packages so that they can be used in other projects.

I am also writing some backend tools (see [github.com/kkaribu/jsonapi](https://github.com/kkaribu/jsonapi) and [github.com/kkaribu/karigo](https://github.com/kkaribu/karigo)) made to work with the [JSON API specification](http://jsonapi.org/format). Some libraries explained in this document are made to work with those backend tools, but because they all follow the same specification, they should in theory work with other tools based on JSON API.

## SessionManager

The session manager has nothing to do with JSON API since the specification does not mention anything about authentification and sessions.

The file `src/lib/session.js` is pretty straightforward.

## JSONAPIFetcher

The JSONAPI fetcher lives in `src/lib/jsonapifetcher.js`. It is simply a list of methods to make API calls to a backend that follows the JSON API specification.

Models have to be defined beforehand.

The goal is to have simple methods that accept obvious arguments like `type`, `id`, `filter`, `sort`, etc. That is all the user has to know. Behind the curtains, the library fetches the data and returns it (or an error). It uses the JSONAPIStore to cache the data it acquired.

Example of how the module could be used:

```
JSONAPIFetcher.getMany({
    type: 'comments',
    fields: {
        comments: ['author', 'content', 'written-at'],
    },
    filter: {
        op: 'and',
        val: [
            {
                field: 'author',
                op: '=',
                val: 'user1',
            },
            {
                field: 'articles',
                op: 'in',
                val: ['article1', 'article2'],
            },
        ],
    },
    sort: ['written-at'],
    pageNumber: 0,
    pageSize: 20,
    include: ['author'],
})
.then(response => {
    this.setState(() => {
        return { comments: response.data }
    })
})
.catch(err => {
    console.log(`Error getting articles: ${err}`)
})
```

## JSONAPIStore

The JSONAPI fetcher lives in `src/lib/jsonapistore.js`.

The JSONAPI store is a simple key-value store. The key is a URL and the value is the data that was returned. It is therefore important for the backend to return the same data given the same URL, unless of course the data in the database has changed. In other words, developers should avoid URLs like `/users/me` that returns info about the user that made the request.

## JSONAPIModels

This is where models will be stored. Then, the JSONAPI store and fetcher can use it.

It will also make sure that the models are valid and the relationships make sense.

See `src/lib/jsonapimodels.js` for an implementation.

The declaration files should look like what is done in Ember.

## Notes and questions

These libraries contain both logic and some code that depends on React. This is not ideal. Once the libraries have matured, I will try to separate the core with the React part so that each library can at the same time have its own package and not need React.

Also, should the user use the fetcher which uses the store for caching? Or should the user use the store which uses the fetcher when it does not have what is asked? I'll have to think about that.