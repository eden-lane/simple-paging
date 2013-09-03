### Using

```js
var pages = paging({
    // current page {number}
    current: 3, 
    // total count of pages {number}
    total: 23,
    // url that will be added before every link
    url: '/blog?page=',
    // if true will return {Page} object for first page
    showFirst: true,
    // if true will return {Page} object for last page
    showLast: true
});
```

### Result

```js
{
    pages: [
        {id: 1, isCurrent: false, url: '/blog?page=1'},
        {id: 2, isCurrent: false, url: '/blog?page=2'},
        {id: 3, isCurrent: true, url: '/blog?page=3'},
        {id: 4, isCurrent: false, url: '/blog?page=4'},
        {id: 5, isCurrent: false, url: '/blog?page=5'},
    ],
    first: false,
    last: {id: 23, isCurrent: false, url: '/blog?page=23'}
}

```