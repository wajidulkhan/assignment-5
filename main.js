let loveCount = 0;
let coin = 10;

function loveReact() {
  const Count = document.getElementById("love-react");

  if (loveCount >= 0) {
    loveCount++;
    Count.textContent = loveCount;
  }
}

function callService(call, callNumber) {
  alert(call + " " + callNumber);
  const coinValue = document.getElementById("coin").innerText;
  if (coinValue > 0) {
    const h = coinValue - coin;
    document.getElementById("coin").innerText = h;
  } else {
    alert("Coin value is over");
  }
}

// Heart
document.getElementById("emergency-heart").addEventListener("click", loveReact);
document.getElementById("police-heart").addEventListener("click", loveReact);
document.getElementById("fire-service").addEventListener("click", loveReact);

// call
document
  .getElementById("emergency-call")
  .addEventListener("click", function (e) {
    const callTitle = document.getElementById("National").innerText;
    const callNumber = document.getElementById("call-number").innerText;
    callService(callTitle, callNumber);
  });

document.getElementById("police-call").addEventListener("click", function (e) {
  const callTitle = document.getElementById("Police-Helpline").innerText;
  const callNumber = document.getElementById("Police-number").innerText;
  callService(callTitle, callNumber);
});
