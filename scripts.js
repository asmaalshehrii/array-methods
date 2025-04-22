// version of Array.prototype.map
Array.prototype.myMap = function(callback) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
      // Make sure the index exists (handle sparse arrays)
      if (i in this) {
        result.push(callback(this[i], i, this));
      }
    }
    return result;
  };
  
  // version of Array.prototype.filter
  Array.prototype.myFilter = function(callback) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
      if (i in this && callback(this[i], i, this)) {
        result.push(this[i]);
      }
    }
    return result;
  };
  
  // version of Array.prototype.reduce
  Array.prototype.myReduce = function(callback, initialValue) {
    let accumulator = initialValue;
    let startIdx = 0;
  
    if (accumulator === undefined) {
      accumulator = this[0];
      startIdx = 1;
    }
  
    for (let i = startIdx; i < this.length; i++) {
      if (i in this) {
        accumulator = callback(accumulator, this[i], i, this);
      }
    }
    return accumulator;
  };
  
  // version of Array.prototype.includes
  Array.prototype.myIncludes = function(valueToFind) {
    for (let i = 0; i < this.length; i++) {
      if (this[i] === valueToFind || (Number.isNaN(valueToFind) && Number.isNaN(this[i]))) {
        return true;
      }
    }
    return false;
  };
  
  // version of Array.prototype.find
  Array.prototype.myFind = function(callback) {
    for (let i = 0; i < this.length; i++) {
      if (i in this && callback(this[i], i, this)) {
        return this[i];
      }
    }
    return undefined;
  };
  
  //version of Array.prototype.slice
  Array.prototype.mySlice = function(start = 0, end = this.length) {
    const result = [];
    let actualStart = start < 0 ? Math.max(this.length + start, 0) : Math.min(start, this.length);
    let actualEnd = end < 0 ? Math.max(this.length + end, 0) : Math.min(end, this.length);
  
    for (let i = actualStart; i < actualEnd; i++) {
      if (i in this) {
        result.push(this[i]);
      }
    }
    return result;
  };
  
