export function spinWords(sentence: string): string {
    let words = sentence.split(" ");
    words = words.map(word => {
      if (word.length >= 5) {
        let letters = word.split("");
        letters = letters.reverse();
        return letters.join("");
      }
      return word;
    });
    return words.join(" ");
}
