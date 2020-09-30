const multiply = (n1: number, n2: number): number => {
    let result: number = 0;
    let isPositive: boolean = (Math.abs(n1) === n1);
    for(let i: number = 0; i < n2; i++){
        result = isPositive ? result + n1 : result - n1;
    }
    return result;
}

console.log(multiply(5, 6));