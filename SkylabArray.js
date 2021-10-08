class SkylabArray {
  length = 0;

  constructor(...obj) {
    for (let i = 0; i < obj.length; i++) {
      this[this.length] = obj[i];
      this.length++;
    }
  }
  posh(...obj) {
    for (let i = 0; i < obj.length; i++) {
      this[this.length] = obj[i];
      this.length++;
    }
    return this;
  }
  // posh debería return this.length
  somer(callBack) {
    for (let i = 0; i < this.length; i++) {
      if (callBack(this[i])) {
        return true;
      }
    }
    return false;
  }

  mop(callBack) {
    let newSkylabArray = new SkylabArray();
    for (let i = 0; i < this.length; i++) {
      newSkylabArray.posh(callBack(this[i]));
    }
    return newSkylabArray;
  }
}

const test = new SkylabArray(5, "ok", 7);

console.log(test);
console.log(test.posh("paco", "paca", "paqui", "paquirrín"));
console.log(test.somer((item) => item === "what"));

console.log(test.mop((item) => "" + item));
console.log(test);

module.exports = { SkylabArray };
