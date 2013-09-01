var should = require('should'),
    paging = require('../src/paging');

/*
 *  paging({
 *      current: 3,
 *      total: 10,
 *      max: 5
 *  })
 */

describe('WRONG PARAMETERS', function() {
    it('no current parameter', function() {
        (function(){
            paging({
               total: 10,
               max: 5
            }) 
        }).should.throw();
    });
    
    it('no current total', function() {
        (function(){
            paging({
               current: 2,
               max: 5
            }) 
        }).should.throw();
    });
})
