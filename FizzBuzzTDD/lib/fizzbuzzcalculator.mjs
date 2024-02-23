
// TODO Use map to factor the method
const calculateFizzBuzz = (number) => {
  if (number === null || isNaN(number) || number < 0) throw new Error();
  if (number % 3 === 0 && number % 5 === 0) {
    return "FizzBuzz";
  }
  if (number % 3 === 0) return "Fizz";
  if (number % 5 === 0) return "Buzz";
  return String(number);
};

export { calculateFizzBuzz };
