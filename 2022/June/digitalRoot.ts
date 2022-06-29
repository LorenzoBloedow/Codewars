export const digitalRoot = (n: number): number => {
  
  // Negative numbers are not allowed so they get converted to a positive number.
  n = Math.abs(n);
  
  // If there's only one digit then the sum must be itself, so skip the rest.
  if (n < 10) {
    return n;
  }
  
  // Convert the number to a string, extract every
  // character (digit) using split('') and then put it all in an array.
  const digits: string[] = n.toString().split('');

  // Convert every element in the string array to a number and store their sum.
  let currentSum: number = 0;
  for (const digit of digits) {
    currentSum += parseInt(digit);
  }
  
  // If the number is greater than 9, that means it has more than one digit thus we
  // can repeat this whole process again by using recursion until the number only
  // has one digit, that being the result. We then bring that result down the
  // stack by returning it until the stack is empty.
  if (currentSum > 9) {
    const finalSum: number = digitalRoot(currentSum);
    return finalSum;
  }
  return currentSum;
}
