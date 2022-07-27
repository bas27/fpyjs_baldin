function main() {
    // var increase = parseInt(readLine(), 10);
    var increase = 10
    var prices = [98.99, 15.2, 20, 1026];
    
    newPrices = []
    for (let i=0; i < prices.length; i++) {
        // 
        newPrices[i] = prices[i] + increase

    };
    console.log(newPrices)
}

main()