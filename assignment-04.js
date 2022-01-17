// 1.

const foo = {
  initialValue: 0,
  valueOf: function () {
    return (this.initialValue += 1);
  },
};

if (foo == 1 && foo == 2 && foo == 3) {
  console.log('wtf js??? 🤔');
}

// 2.

const MyNumberType = function (n) {
  return (this.number = n);
};

MyNumberType.prototype.valueOf = function () {
  return this.number;
};

const foo1 = new MyNumberType(1);

if (foo1.number++ == 1 && foo1.number++ == 2 && foo1.number++ == 3) {
  console.log('really wtf js??? 🤔');
}
