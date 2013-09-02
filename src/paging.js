/*
 * @author eden lane <edencore@gmail.com>
 */
 
paging = function(params) {
    if (typeof params.current == 'undefined')
        throw new Error("parameter 'current' is required");
    if (typeof params.total == 'undefined')
        throw new Error("parameter 'total' is required");
        
    var current = params.current,
        total = params.total,
        max = params.max || 5;
    
    var result = [];
        side = Math.floor(max / 2),
        start = current - side,
        finish = current + side;
    
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
        result.push(page);
    }
    return result;
};

module.exports = paging;