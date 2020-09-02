describe("Given two items", () => {
  describe("Given two non-equal types", () => {
    it("can check if two items are not the same type", () => {
      const first = "yippee!";
      const second = 5;
      expect(Utilities.isEqual(first, second)).to.be.false;
    });

    it("can check if one of the two items are not passed", () => {
      const first = "yippee!";
      const second = undefined;
      expect(Utilities.isEqual(first, second)).to.be.false;
    });

    it("can check if two items are not passed", () => {
      const first = undefined;
      const second = undefined;
      expect(Utilities.isEqual(first, second)).to.be.false;
    });
  });

  describe("Given two strings", () => {
    it("can check if two strings are equal", () => {
      const first = "yippee!";
      const second = "yippee!";
      expect(Utilities.isEqual(first, second)).to.be.true;
    });

    it("can check if two strings are not equal", () => {
      const first = "boooo!!!";
      const second = "yippee!";
      expect(Utilities.isEqual(first, second)).to.be.false;
    });
  });

  describe("Given two numbers", () => {
    it("can check if two numbers are equal", () => {
      const first = 1;
      const second = 1;
      expect(Utilities.isEqual(first, second)).to.be.true;
    });

    it("can check if two numbers are equal with decimal", () => {
      const first = 1.0;
      const second = 1;
      expect(Utilities.isEqual(first, second)).to.be.true;
    });

    it("can check if two numbers are not equal", () => {
      const first = 42;
      const second = 24;
      expect(Utilities.isEqual(first, second)).to.be.false;
    });
  });

  describe("Given two Arrays", () => {
    it("can check if two arrays are equal", () => {
      const first = [ 1, 2, 3, 5, 7, 13, 21 ];
      const second = [ 1, 2, 3, 5, 7, 13, 21 ];
      expect(Utilities.isEqual(first, second)).to.be.true;
    });

    it("can check if two array are equal out of order", () => {
      const first = [ 1, 2, 3, 5, 7, 13, 21 ];
      const second = [ 21, 2, 5, 1, 13, 7, 3 ];
      expect(Utilities.isEqual(first, second)).to.be.true;
    });

    it("can check if two arrays are not equal", () => {
      const first = [ 7, 14, 21, 28, 35, 42, 49 ];
      const second = [ 1, 2, 3, 4, 5, 6, 7 ];
      expect(Utilities.isEqual(first, second)).to.be.false;
    });
  });

  describe("Given two objects", () => {
    it("can check if two objects are equal", () => {
      const first = { "name": "Bubba", "height": "6'", "age": 32, "weight": 185 };
      const second = { "name": "Bubba", "height": "6'", "age": 32, "weight": 185 };
      expect(Utilities.isEqual(first, second)).to.be.true;
    });

    it("can check if two objects are equal out of order", () => {
      const first = { "name": "Bubba", "height": "6'", "age": 32, "weight": 185 };
      const second = { "weight": 185, "age": 32, "height": "6'", "name": "Bubba" };
      expect(Utilities.isEqual(first, second)).to.be.true;
    });

    it("can check if two objects are not equal", () => {
      const first = { "name": "Bubba", "height": "6'", "age": 32, "weight": 185 };
      const second = { "name": "John", "height": "5'3\"", "age": 24, "weight": 164 };
      expect(Utilities.isEqual(first, second)).to.be.false;
    });

    it("can check if two objects are not equal with simular keys", () => {
      const first = { "name": "Bubba", "height": "6'", "age": 32, "weight": 185 };
      const second = { "name": "Bubba", "height": "6'", "age": 32, "weight": 185, "eyes": "brown" };
      expect(Utilities.isEqual(first, second)).to.be.false;
    });

    it("can check if two objects are equal with deep keys", () => {
      const first = { "name": "Bubba", "height": "6'", "age": 32, "weight": 185, "residence": { "city": "Mayberry", "state": "NC" }};
      const second = { "name": "Bubba", "height": "6'", "age": 32, "weight": 185, "residence": { "city": "Mayberry", "state": "NC" }};
      expect(Utilities.isEqual(first, second)).to.be.true;
    });

    it("can check if two objects are not equal with deep keys", () => {
      const first = { "name": "Bubba", "height": "6'", "age": 32, "weight": 185, "residence": { "city": "Mayberry", "state": "NC" }};
      const second = { "name": "Bubba", "height": "6'", "age": 32, "weight": 185, "residence": { "city": "Lubbuck", "state": "TX" }};
      expect(Utilities.isEqual(first, second)).to.be.false;
    });

    it("can check if two objects are not equal with different deep keys", () => {
      const first = { "name": "Bubba", "height": "6'", "age": 32, "weight": 185, "residence": { "city": "Mayberry", "state": "NC" }};
      const second = { "name": "Bubba", "height": "6'", "age": 32, "weight": 185, "residence": [ 1, 2, 3, 4 ]};
      expect(Utilities.isEqual(first, second)).to.be.false;
    });
  });

  describe("Given two functions", () => {
    it("can check if two functions are equal", () => {
      const first = () => { return true; };
      const second = () => { return true; };
      expect(Utilities.isEqual(first, second)).to.be.true;
    });

    it("can check if two functions are not equal with code", () => {
      const first = () => { return true; };
      const second = (w) => { return false; };
      expect(Utilities.isEqual(first, second)).to.be.false;
    });

    it("can check if two different functions are not equal", () => {
      const first = () => { return true; };
      const second = (w) => { const x = 0; return x; };
      expect(Utilities.isEqual(first, second)).to.be.false;
    });
  });

  describe("Given two dates", () => {
    it("can check if two dates are equal", () => {
      const first = new Date("3/5/2020");
      const second = new Date("3/5/2020");
      expect(Utilities.isEqual(first, second)).to.be.true;
    });

    it("can check if two dates are not equal", () => {
      const first = new Date("3/5/2020");
      const second = new Date("5/5/2021");
      expect(Utilities.isEqual(first, second)).to.be.false;
    });
  });

  describe("Given two booleans", () => {
    it("can check if two booleans are equal", () => {
      const first = true;
      const second = true;
      expect(Utilities.isEqual(first, second)).to.be.true;
    });

    it("can check if two booleans are not equal", () => {
      const first = true;
      const second = false;
      expect(Utilities.isEqual(first, second)).to.be.false;
    });
  });

  describe("Given two symbols", () => {
    it("can check if two symbols are equal", () => {
      const first = Symbol("Bubba");
      const second = first;
      expect(Utilities.isEqual(first, second)).to.be.true;
    });

    it("can check if two symbols are not equal evewn with same string", () => {
      const first = Symbol("Bubba");
      const second = Symbol("Bubba");
      expect(Utilities.isEqual(first, second)).to.be.false;
    });

    it("can check if two symbols are not equal", () => {
      const first = Symbol("Bubba");
      const second = Symbol("John");
      expect(Utilities.isEqual(first, second)).to.be.false;
    });
  });

  describe("Given two regex", () => {
    it("can check if two regex are equal", () => {
      const first = /[a-zA-Z0-9]/;
      const second = /[a-zA-Z0-9]/;
      expect(Utilities.isEqual(first, second)).to.be.true;
    });

    it("can check if two regex are not equal", () => {
      const first = /[a-zA-Z0-9]/;
      const second = /[0-9]{1}[-][0-9]{5}/;
      expect(Utilities.isEqual(first, second)).to.be.false;
    });
  });

  describe("Given two array buffers", () => {
    it("can check if two array buffers are equal", () => {
      const first = new ArrayBuffer(8);
      const second = new ArrayBuffer(8);
      expect(Utilities.isEqual(first, second)).to.be.true;
    });

    it("can check if two array buffers are not equal", () => {
      const first = new ArrayBuffer(8);
      const second = new ArrayBuffer(16);
      expect(Utilities.isEqual(first, second)).to.be.false;
    });


    it("can check if two typed arrays are equal", () => {
      const buffer = new ArrayBuffer(8);
      const first = new Int8Array(buffer);
      const second = new Int8Array(buffer);
      expect(Utilities.isEqual(first, second)).to.be.true;
    });

    it("can check if two typed arrays are not equal", () => {
      const buffer = new ArrayBuffer(8);
      const first = new Int8Array(buffer);
      const second = new Int16Array(buffer);
      expect(Utilities.isEqual(first, second)).to.be.false;
    });
  });

  describe("Given two sets", () => {
    it("can check if two sets are equal", () => {
      const first = new Set();
      first.add("x");
      const second = new Set();
      second.add("x");
      expect(Utilities.isEqual(first, second)).to.be.true;
    });

    it("can check if two sets are not equal", () => {
      const first = new Set();
      first.add("x");
      const second = new Set();
      second.add("z");
      expect(Utilities.isEqual(first, second)).to.be.false;
    });
  });

  describe("Given two Maps", () => {
    it("can check if two maps are equal", () => {
      const first = new Map();
      first.set("x", 1);
      const second = new Map();
      second.set("x", 1);
      expect(Utilities.isEqual(first, second)).to.be.true;
    });

    it("can check if two maps are not equal", () => {
      const first = new Map();
      first.set("x", 1);
      const second = new Map();
      second.set("z", 10);
      expect(Utilities.isEqual(first, second)).to.be.false;
    });
  });


  describe("Given two Classes", () => {
    class Animal {
      constructor(name){
        this.name = (name) ? name : "";
      };
    };

    class Dog extends Animal {
      constructor(name){
        super(name);
      };
      bark() {
        return "Woof!";
      };
    };

    it("can check if two classes are equal", () => {
      const first = new Animal("Timmy");
      const second = new Animal("Timmy");
      expect(Utilities.isEqual(first, second)).to.be.true;
    });

    it("can check if two classes are not equal", () => {
      const first = new Animal("Timmy");
      const second = new Dog("Rex");
      expect(Utilities.isEqual(first, second)).to.be.false;
    });
  });
});
