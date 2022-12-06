class SumApp {
  /*constructor(numbers) {
    this.numbers = [];
  }*/
  numbers = [];

  addNumber(n) {
    //push() methode
    this.numbers.push(n);
    return n;
  }

  getSum() {
    //reduce()
    // for schleife
    let count = 0;
    for (let i = 0; i < this.numbers.length; i++) {
      count += this.numbers[i];
    }
    return count;
  }

  reset() {
    this.numbers = [];
    //this.numbers.length = 0; beste Lösung
  }
}

const sumApp = new SumApp();
//console.log(sumApp);
