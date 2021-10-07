class SkylabArray {
  length = 0;

  constructor(...obj) {
    for (let i = 0; i < obj.length; i++) {
      this[this.length] = obj[i];
      this.length++;
    }
  }
}

//const test = new SkylabArray(5, "ok", 7);

//console.log(test);
