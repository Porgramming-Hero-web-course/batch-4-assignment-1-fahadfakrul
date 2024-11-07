{
    function countWordOccurrences(sentence: string , word: string): number {
        const words = sentence.toLowerCase().split(/\W+/);
        const count = words.filter(w => w === word);
        return count.length;
    }

    countWordOccurrences("TypeScript is great. I love TypeScript!", "typescript")
//    console.log( countWordOccurrences("TypeScript is great. I love TypeScript!", "typescript"));
}