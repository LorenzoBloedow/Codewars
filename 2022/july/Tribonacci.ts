export function tribonacci([a, b, c]: [number, number, number], n: number): number[] {
  if (n === 0) {
    return [];
  }
  
  if (n === 1) {
    return [a];
  }
  
  if (n === 2) {
    return [a, b];
  }
  
  const trib: number[] = [a, b, c];
  
  for (let i: number = 0; i < (n - 3); i++) {
    trib.push((trib[i] + trib[i + 1] + trib[i + 2]));
  }
  
  return trib;
}
