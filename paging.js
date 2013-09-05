/*
 * @author eden lane <edencore@gmail.com>
 */
 
paging = function(params) {
    if (typeof params.current == 'undefined')
        throw new Error("parameter 'current' is required");
    if (typeof params.total == 'undefined')
        throw new Error("parameter 'total' is required");
    
    var result = {};
        
    var current = params.current,
        total = Math.ceil(params.total),
        max = params.max || 5,
        url = params.url || false,
        showFirst = params.showFirst,
        showLast = params.showLast;
    
    var side = Math.floor(max / 2),
        start = current - side,
        finish = current + side;
    
    result.pages = [];
    
    var d = finish - total;
	if (d > 0) {
		start -= d;
		finish -= d;
	}
	if (start <= 0) {
		d = 1 - start;
		start += d;
		finish += d;
	}
	if (finish > total) {
		finish = total;
	}
        
    for (var i = start; i <= finish; i++) {
        var page = {
            id: i,
            isCurrent: i == current
        };
        if (url) {
            page.url = url + i;
        }
        result.pages.push(page);
    }
    
    if (start > 1) {
        result.first = {id: 1, isCurrent: false};
        if (url)
            result.first.url = url + 1;
    } else
        result.first = false;
        
    if (finish < total) {
        result.last = {id: total, isCurrent: false};
        if (url)
            result.last.url = url + total;
    } else
        result.last = false;
    
    return result;
};

module.exports = paging;