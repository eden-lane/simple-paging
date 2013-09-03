### Example

```js
var pages = paging({
    current: 3,
    total: 23,
    max: 5,
    url: '/blog?page='
});
```

will return

```js
[
    {id: 1, isCurrent: false, url: '/blog?page=1'},
    {id: 2, isCurrent: false, url: '/blog?page=2'},
    {id: 3, isCurrent: true, url: '/blog?page=3'},
    {id: 4, isCurrent: false, url: '/blog?page=4'},
    {id: 5, isCurrent: false, url: '/blog?page=5'},
]

```

### Parameters

`current`: current page,  
`total`: total count of pages,  
`max`: count of pages to display,  
`url`: url that will be added before every link
