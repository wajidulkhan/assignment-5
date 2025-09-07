let loveCount = 0;
let coin = 10;
const callValue = [];

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

function notification(values) {
  const notificationVales = document.getElementById("notification-id");
  notificationVales.innerHTML = "";
  for (items of values) {
    const div = document.createElement("div");
    console.log(items.serviceName);
    div.innerHTML = `

     <div
              class="flex justify-between items-center bg-gray-100 rounded-lg p-3"
            >
    <div>
                <h3 class="text-sm font-semibold">${items.serviceName}</h3>
                <span class="text-gray-800">${items.serviceNumber}</span>
              </div>
              <span class="text-sm text-gray-800">${items.Dates}</span>
            </div>
    </div>
    `;

    notificationVales.appendChild(div);
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
    console.log(callTitle);
    const callNumber = document.getElementById("call-number").innerText;
    const a = callService(callTitle, callNumber);

    const callData = {
      serviceName: callTitle,
      serviceNumber: callNumber,
      Dates: new Date().toLocaleTimeString(),
    };
    callValue.push(callData);
    notification(callValue);
  });

document.getElementById("police-call").addEventListener("click", function (e) {
  const callTitle = document.getElementById("Police-Helpline").innerText;
  const callNumber = document.getElementById("Police-number").innerText;
  callService(callTitle, callNumber);

  const callData = {
    serviceName: callTitle,
    serviceNumber: callNumber,
    Dates: new Date().toLocaleTimeString(),
  };
  callValue.push(callData);
  notification(callValue);
});
