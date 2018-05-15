const Park = function (name, ticketPrice, collectionOfDinosaurs) {
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.collectionOfDinosaurs = collectionOfDinosaurs;
}

Park.prototype.addDinosaurToCollection = function(addDinosaur){
  this.collectionOfDinosaurs.push(addDinosaur);
}

Park.prototype.removeDinosaurFromCollection = function(dinosaur){
  this.collectionOfDinosaurs.pop(dinosaur);
}

module.exports = Park;
