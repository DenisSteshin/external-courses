function searchPropertyInPrototype(property, object) {
  if (object.__proto__) {
    return object.__proto__[property];
  }
  return null;
}

module.exports = searchPropertyInPrototype;
