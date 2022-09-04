export type voidFunction = () => void;
interface Iexample {
  property: number;
  increase: voidFunction;
  decrease: voidFunction;
}
const example: Iexample = {
  property: 10,
  increase: function () {
    this.property++;
  },
  decrease() {
    this.property--;
  },
};
example.increase();
console.log(example.property);
example.increase();
console.log(example.property);
example.decrease();
console.log(example.property);
