### Example

```js
var pages = paging({
    current: 3,
    total: 23,
    max: 5,
    url: '/blog?page='
});
```

### Parameters

`current`: current page,  
`total`: total count of pages,  
`max`: count of pages to display,  
`url`: url that will be added before every link