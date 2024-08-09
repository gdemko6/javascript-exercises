const fibonacci = function(sequences) {

    sequences=Number(sequences);

    if(sequences===0) return 0;
    
    if(sequences<0) return "OOPS";

    let fibo = 1;
    let fibo2 = 1;
    for(let i=2; i<sequences; i++){
      let helper = fibo + fibo2;
      fibo2=fibo;
      fibo=helper;
    }
    return fibo;
    
};

// Do not edit below this line
module.exports = fibonacci;
