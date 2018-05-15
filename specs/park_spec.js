const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;
  let dinosaur1;
  let dinosaur2;
  let dinosaur3;

  beforeEach(function () {
    dinosaur1 = new Dinosaur('t-rex', 'carnivore', 50);
    dinosaur2 = new Dinosaur('diplodocus', 'herbivore', 20);
    dinosaur3 = new Dinosaur('stegosaurus', 'herbivore', 30);
    let collectionOfDinosaurs = [dinosaur1, dinosaur2]
    park = new Park("Hammond's World of Death", 20, collectionOfDinosaurs);
  })

  it('should have a name', function () {
    const actual = park.name;
    assert.strictEqual(actual, "Hammond's World of Death");
  });

  it('should have a ticket price', function () {
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 20);
  });

  it('should have a collection of dinosaurs', function () {
    const actual = park.collectionOfDinosaurs.length;
    assert.strictEqual(actual, 2);
  });

  it('should be able to add a dinosaur to its collection', function () {
    park.addDinosaurToCollection(dinosaur3);
    const actual = park.collectionOfDinosaurs.length;
    assert.strictEqual(actual, 3);

  });

  it('should be able to remove a dinosaur from its collection', function () {
    park.removeDinosaurFromCollection(dinosaur2);
    const actual = park.collectionOfDinosaurs.length;
    assert.strictEqual(actual, 1)

  });

  xit('should be able to find all dinosaurs of a particular species', function () {

  });

  xit('should be able to remove all dinosaurs of a particular species', function () {

  });

  xit('should be able to find the dinosaur that attracts the most visitors', function () {

  });

});
