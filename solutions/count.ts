namespace Answers {
  class VowelParser {
    private static allVowels = 'aeiou';

    /**
     * Denotes whether provided letter is a vowel.
     * @param letter letter to parse
     */
    static isVowel(letter: string) {
      return this.allVowels.includes(letter);
    }
  }

  interface Vowels {
    [vowel: string]: number;
  }

  /**
   * Write a function that returns a Vowels instance, where all the vowels are counted.
   * Note that this function should be case insensitive. You cannot use const, let or var in the function.
   *
   * For instance:
   *
   * count('Hello World') // <== { e: 1, o: 2 }
   * count('FooOObAar') // <== { a: 2, o: 4 }
   * count('thE Quick brown fOx jumps over the LAAAZY dog!!') // <== { a: 3, e: 3, i: 1, o: 4, u: 2 }
   */
  export const count = (str: string): Vowels => {
    return str
      .toLowerCase()
      .split('')
      .filter(letter => VowelParser.isVowel(letter))
      .reduce((acc: Vowels, curr: string) => {
        acc[curr] ? acc[curr]++ : (acc[curr] = 1);
        return acc;
      }, {});
  };
}
console.log(Answers.count('thE Quick brown fOx jumps over the LAAAZY dog!!'));
