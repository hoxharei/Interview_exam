function StockPicker(arr) { 
  
  let max_profit = -1;
  let buy_price = 0;
  let sell_price = 0;
  let buy = 0;

  for(i=0 ; i<=arr.length ; i++){
      buy_price = arr[i];
      sell_price = arr[i+1];
      let temp_profit = sell_price - buy_price;
      if(temp_profit > max_profit){
          max_profit = temp_profit;
          buy = buy_price;
      }
  }
  return buy;
  
}

console.log("The maximum profit will be the day with the price : ",StockPicker([44, 31, 24, 32, 35, 30, 40, 38, 15]));