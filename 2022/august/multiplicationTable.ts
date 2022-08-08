export function multiplicationTable (size: number): number[][] {
  const finalArray = [];
  for (let i = 1; i <= size; i++) {
    
    const tempArray = [];
    for (let x = 1; x <= size; x++) {
      tempArray.push(i * x);
    }
    
    finalArray.push(tempArray);
  }
  return finalArray;
}
