function main() {
    // var depth = parseInt(readLine(), 10);
    //your code goes here
    let sum = 0;
    var depth = 42;
    for (let i = 1; sum < depth; i++) {
        sum += 7
        
        if (sum < depth) {
            sum -= 2
            console.log(sum, i)
        }
            
        else {
            console.log(sum, i)
        }

    };
}

main()