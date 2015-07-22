var should = require("chai").should();
var cp = require('child_process');
var Cheers = require(process.cwd() + "/app.js");


//Tests for the cheers function
describe('CLI', function() {
  it('should create a cheer from name', function(done) {
    cp.execFile('./app.js', ['Katy'], function(err, stdout) {
      stdout.should.equal("Give me a K!\nGive me an A!\nGive me a T!\nGive me a Y!\n");
      done();
    })
  })
  it('should create cheer that can handle spaces', function(done) {
    cp.execFile('./app.js', ['Katy', 'Ann'], function(err, stdout) {
      stdout.should.equal("Give me a K!\nGive me an A!\nGive me a T!\nGive me a Y!\nGive me an A!\nGive me an N!\nGive me an N!\n");
      done();
    })
  })
});

// describe('Cheers', function() {
//   it('should create a cheer from name', function() {

// });
