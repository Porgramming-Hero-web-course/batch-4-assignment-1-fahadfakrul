{
    function sumArray(arr: number[]): number {
        return arr.reduce((acc, curr) => acc + curr, 0);
    }

    sumArray([1, 2, 3, 4, 5]);
    // console.log(sumArray([1, 2, 3, 4, 5]))
}