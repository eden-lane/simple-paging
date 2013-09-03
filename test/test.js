var should = require('should'),
    paging = require('../paging');


describe('WRONG PARAMETERS', function() {
    it('no current parameter', function() {
        (function(){
            paging({
               total: 10,
               max: 5
            });
        }).should.throw();
    });
    
    it('no current total', function() {
        (function(){
            paging({
               current: 2,
               max: 5
            });
        }).should.throw();
    });
});


describe('PAGING', function() {
    it('current: 3, total: 10', function() {
        paging({
            current: 3,
            total: 10
        }).should.eql({pages: [
            {id: 1, isCurrent: false},
            {id: 2, isCurrent: false},
            {id: 3, isCurrent: true},
            {id: 4, isCurrent: false},
            {id: 5, isCurrent: false}
        ], first: false, last: false});
    });
    
    it('current:3, total: 4', function() {
        paging({
            current: 3,
            total: 4
        }).should.eql({pages: [
            {id: 1, isCurrent: false},
            {id: 2, isCurrent: false},
            {id: 3, isCurrent: true},
            {id: 4, isCurrent: false}
        ], first: false, last: false});
    });
    
    it('current: 3, total: 3', function() {
        paging({
            current: 3,
            total: 3
        }).should.eql({pages: [
            {id: 1, isCurrent: false},
            {id: 2, isCurrent: false},
            {id: 3, isCurrent: true}
        ], first: false, last: false});
    });
    
    it('current: 7, total: 10', function() {
        paging({
            current: 7,
            total: 10
        }).should.eql({pages: [
            {id: 5, isCurrent: false},
            {id: 6, isCurrent: false},
            {id: 7, isCurrent: true},
            {id: 8, isCurrent: false},
            {id: 9, isCurrent: false}
        ], first: false, last: false});
    });
    
    it('current: 9, total: 9', function() {
        paging({
            current: 9,
            total: 9
        }).should.eql({pages: [
            {id: 5, isCurrent: false},
            {id: 6, isCurrent: false},
            {id: 7, isCurrent: false},
            {id: 8, isCurrent: false},
            {id: 9, isCurrent: true}
        ], first: false, last: false});
    });
});

describe('ADDING URL', function() {
    it('adding url to every link', function() {
        paging({current: 3, total: 5, url: '/blog?page='})
        .should.eql({pages: [
            {id: 1, isCurrent: false, url: '/blog?page=1'},
            {id: 2, isCurrent: false, url: '/blog?page=2'},
            {id: 3, isCurrent: true, url: '/blog?page=3'},
            {id: 4, isCurrent: false, url: '/blog?page=4'},
            {id: 5, isCurrent: false, url: '/blog?page=5'}
        ], first: false, last: false});
    })
});

describe('FIRST & LAST', function() {
    it('adding first and last page', function() {
        paging({current: 5, total: 10, url: '/blog?page=', showFirst: true, showLast: true})
        .should.eql(
            {
                pages: [
                    {id: 3, isCurrent: false, url: '/blog?page=3'},
                    {id: 4, isCurrent: false, url: '/blog?page=4'},
                    {id: 5, isCurrent: true, url: '/blog?page=5'},
                    {id: 6, isCurrent: false, url: '/blog?page=6'},
                    {id: 7, isCurrent: false, url: '/blog?page=7'}
                ],
                first: {id: 1, isCurrent: false, url: '/blog?page=1'},
                last: {id: 10, isCurrent: false, url: '/blog?page=10'}
            });
    });
    
    it('shouldn`t return first and last pages', function() {
        paging({current: 3, total: 5, url: '/blog?page=', showFirst: true, showLast: true})
        .should.eql(
            {
                pages: [
                    {id: 1, isCurrent: false, url: '/blog?page=1'},
                    {id: 2, isCurrent: false, url: '/blog?page=2'},
                    {id: 3, isCurrent: true, url: '/blog?page=3'},
                    {id: 4, isCurrent: false, url: '/blog?page=4'},
                    {id: 5, isCurrent: false, url: '/blog?page=5'}
                ],
                first: false, last: false
            });
    });
});