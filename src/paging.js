paging =  function(params) {
    if (typeof params.current == 'undefined')
        throw new Error("parameter 'current' is required");
    if (typeof params.total == 'undefined')
        throw new Error("parameter 'total' is required");
}

module.exports = paging;