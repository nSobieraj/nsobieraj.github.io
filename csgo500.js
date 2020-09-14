// ==UserScript==
// @name         csgo500
// @namespace    https://csgo500.com/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://csgo500.com/*
// @grant        https://csgo500.com/*
// ==/UserScript==

var appendHtml = document.createElement("div");
  appendHtml.innerHTML = '<div class="row">' +
  '<div class="col s3">' +
  '<div id="balance-wrapper">' +
  '<input type="number" min="0" value="0" id="baseValue">' +
  '<div id="startStopButtons">' +
  '<button id="startAutoBet">START</button>' +
  '<button id="stopAutoBet">STOP</button>' +
  '</div>' +
  '</div>' +
  '</div>' +
  '</div>';

var contentWheelBalance = document.getElementById("content-wheel-balance");
contentWheelBalance.insertBefore(appendHtml, contentWheelBalance.childNodes[0]);

document.getElementById("startAutoBet").addEventListener("click", startBet);
document.getElementById("stopAutoBet").addEventListener("click", stopBet);

function stopBet(){
    location.reload();
}

// BET VALUE EDITOR
async function startBet(){
  var i = 0;
  var baseValue = document.getElementById("baseValue").value;
  var betValue = document.getElementById("baseValue").value;
  var black = "past-0  past-tooltip";
  var red = "past-1  past-tooltip";
  var blue = "past-2  past-tooltip";
  var gold = "past-3  past-tooltip";

  while (i < 1) {

    // CHECK IF LAST WIN WAS GRAY AND IF NOT x2.1
    if (document.getElementsByClassName("past-tooltip")[249].className === black || document.getElementsByClassName("past-tooltip")[249].className === red){
      document.getElementById("bet-input").value = baseValue;

      // BET ON GREY
      document.getElementById("bet-btn-2x").click();

      // BET ON RED
      document.getElementById("bet-btn-3x").click();

    }else{
      document.getElementById("bet-input").value = betValue * 2.1;
      // BET ON GREY
      document.getElementById("bet-btn-2x").click();

      // BET ON RED
      document.getElementById("bet-btn-3x").click();
    }
      await new Promise(resolve => setTimeout(resolve, 32000));
}}

function GM_addStyle(css) {
  const style = document.getElementById("GM_addStyleBy8626") || (function() {
    const style = document.createElement('style');
    style.type = 'text/css';
    style.id = "GM_addStyleBy8626";
    document.head.appendChild(style);
    return style;
  })();
  const sheet = style.sheet;
  sheet.insertRule(css, (sheet.rules || sheet.cssRules || []).length);
}
GM_addStyle("#startStopButtons {display: flex;}")
GM_addStyle("#startAutoBet, #stopAutoBet {background: #c32d4f;color: #eee;font-size: 20px;padding: 3px 10px;text-align: center;opacity: 1;border: 0;width: 50%;margin: 5px 5px 5px 5px;border-radius: 10px;}")
GM_addStyle("#startAutoBet:hover, #stopAutoBet:hover {background: #c32d50bd;}")
