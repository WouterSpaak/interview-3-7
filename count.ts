class VowelParser {
  private static allVowels = 'aeiou';

  /**
   * Denotes whether provided letter is a vowel.
   * @param letter letter to parse
   */
  static isVowel(letter: string) {
    // TODO: Implement
  }
}

interface Vowels {
  [vowel: string]: number;
}

/**
 * Write a function that returns a Vowels object, where all the vowels are counted.
 * Note that this function should be case insensitive. For bonus points, you cannot use const,
 * let or var in the function.
 *
 * For instance:
 *
 * count('Hello World') // <== { e: 1, o: 2 }
 * count('FooOObAar') // <== { a: 2, o: 4 }
 * count('thE Quick brown fOx jumps over the LAAAZY dog!!') // <== { a: 3, e: 3, i: 1, o: 4, u: 2 }
 */
export const count = (str: string): Vowels => {
  // TODO: implement
};

console.log(count('Hello World'));
console.log(count('FooOObAar'));
console.log(count('thE Quick brown fOx jumps over the LAAAZY dog!!'));
