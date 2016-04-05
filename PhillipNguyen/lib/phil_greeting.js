const Phil = module.exports = function(name) {
  this.name = name;
};

Phil.prototype.greet = function() {
  return "Hello " + this.name;
};
