async function startBet(){
  var i = 0;
  var baseValue = 10;
  var betValue = 10;
  var black = "past-0  past-tooltip";
  var red = "past-1  past-tooltip";
  while (i < 1) {

    // CHECK IF LAST WIN WAS GRAY AND IF NOT x2.1
    if (document.getElementById("past-queue-wrapper").lastElementChild.className == black || document.getElementById("past-queue-wrapper").lastElementChild.className == red){
      document.getElementById("bet-input").value = baseValue;
    }else{
      document.getElementById("bet-input").value = betValue*2.1;
      document.getElementById("bet-input").value = betValue;
    }

    // BET ON GREY
      document.getElementById("bet-btn-2x").click();

    // BET ON RED
      document.getElementById("bet-btn-3x").click();

    await new Promise(r => setTimeout(r, 32000));
}}
