//Write a loop that makes seven calls to console.log to output a triangle

// variables initializing 
var symbol = '#', symbolstoprint = '';

for(i=1;i<=7;i++){ 
    //creating symbols lines to print
    symbolstoprint = symbol.repeat(i);
    // console log symbols lines 
    console.log(symbolstoprint);
}