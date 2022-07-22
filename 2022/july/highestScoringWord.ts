const alphabet: string[] = ['', 'a', 'b', 'c', 'd', 'e', 'f', 'g',
                            'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o',
                            'p', 'q', 'r', 's', 't', 'u', 'v', 'w',
                            'x', 'y', 'z'];

let scores: number[] = [];
function getScore(word: string) {
  let score: number = 0;
  for (const e of word) {
    score += alphabet.indexOf(e);
  }
  scores.push(score);
}

export const high = (str: string): string => {
  const words: string[] = str.split(' ');
  words.forEach(e => getScore(e));
  const highestScore: number = scores.reduce((previousValue, currentValue) => Math.max(previousValue, currentValue));
  const result: string = words[scores.indexOf(highestScore)];
  
  // Unset the 'scores' variable because it never gets garbage-collected otherwise.
  scores = [];
  return result;
}
