let loveCount = 0;
let coin = 20;
const callValue = [];
let copy = 0;
const notificationVales = document.getElementById("notification-id");

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
  notificationVales.innerHTML = "";
  for (items of values) {
    const div = document.createElement("div");
    console.log(items.serviceName);
    div.innerHTML = `

     <div
              class="flex justify-between items-center bg-gray-100 rounded-lg p-3 noti"
            >
    <div>
                <h3 class="text-sm font-semibold">${items.serviceName}</h3>
                <span class="text-gray-800">${items.serviceNumber}</span>
              </div>
              <span class="text-sm text-gray-800">${items.Dates}</span>
            </div>
    </div>

    `;

    notificationVales.prepend(div);

    if (notificationVales.childElementCount > 7) {
      notificationVales.removeChild(notificationVales.lastChild);
    }
    // notificationVales.appendChild(div);
  }
}

function callBtn(value1, value2) {
  const callTitle = document.getElementById(value1).innerText;
  console.log(callTitle);
  const callNumber = document.getElementById(value2).innerText;
  const a = callService(callTitle, callNumber);

  const callData = {
    serviceName: callTitle,
    serviceNumber: callNumber,
    Dates: new Date().toLocaleTimeString(),
  };
  callValue.push(callData);
  notification(callValue);
}

// copy Function
function copyFunction(id) {
  const copyText = document.getElementById(id);
  // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.innerText);
  // Alert the copied text
  alert("Copied the text: " + copyText.innerText);
  copy++;
  document.getElementById("copy-number").innerText = copy;
}

document.getElementById("copy-number").innerText = copy;

// Heart
document.getElementById("emergency-heart").addEventListener("click", loveReact);
document.getElementById("police-heart").addEventListener("click", loveReact);
document.getElementById("fire-service").addEventListener("click", loveReact);
document.getElementById("Ambulance").addEventListener("click", loveReact);
document.getElementById("Anti-Corruption").addEventListener("click", loveReact);
document.getElementById("Women").addEventListener("click", loveReact);
document
  .getElementById("Electricity-Helpline")
  .addEventListener("click", loveReact);
document.getElementById("Brac").addEventListener("click", loveReact);
document
  .getElementById("Bangladesh-Railway")
  .addEventListener("click", loveReact);

// call
document
  .getElementById("emergency-call")
  .addEventListener("click", function (e) {
    callBtn("National", "call-number");
  });

document.getElementById("police-call").addEventListener("click", function (e) {
  callBtn("Police-Helpline", "Police-number");
});

document
  .getElementById("fire-service-btn")
  .addEventListener("click", function (e) {
    callBtn("fire-service-title", "fire-service-number");
  });

document
  .getElementById("Ambulance-btn")
  .addEventListener("click", function (e) {
    callBtn("Ambulance-title", "Ambulance-number");
  });

document
  .getElementById("Anti-Corruption-btn")
  .addEventListener("click", function (e) {
    callBtn("Anti-Corruption-title", "Anti-Corruption-number");
  });

document.getElementById("Women-btn").addEventListener("click", function (e) {
  callBtn("Women-title", "Women-number");
});

document
  .getElementById("Electricity-btn")
  .addEventListener("click", function (e) {
    callBtn("Electricity-title", "Electricity-number");
  });

document.getElementById("Brac-btn").addEventListener("click", function (e) {
  callBtn("Brac-title", "Brac-number");
});

document
  .getElementById("Bangladesh-Railway-btn")
  .addEventListener("click", function (e) {
    callBtn("Bangladesh-Railway-title", "Bangladesh-Railway-number");
  });
// clear - Btn;
document.getElementById("clear-btn").addEventListener("click", function () {
  callValue.length = 0;
  notificationVales.innerHTML = "";
});

// Copy
document.getElementById("copy-national").addEventListener("click", function () {
  copyFunction("call-number");
});

document.getElementById("copy-police").addEventListener("click", function () {
  copyFunction("Police-number");
});

document.getElementById("copy-Fire").addEventListener("click", function () {
  copyFunction("fire-service-number");
});

document
  .getElementById("copy-Ambulance")
  .addEventListener("click", function () {
    copyFunction("Ambulance-number");
  });

document
  .getElementById("copy-Anti-Corruption")
  .addEventListener("click", function () {
    copyFunction("Anti-Corruption-number");
  });

document.getElementById("copy-Women").addEventListener("click", function () {
  copyFunction("Women-number");
});

document.getElementById("copy-Brac").addEventListener("click", function () {
  copyFunction("Brac-number");
});
document
  .getElementById("copy-Electricity")
  .addEventListener("click", function () {
    copyFunction("Electricity-number");
  });

document
  .getElementById("copy-Bangladesh-Railway")
  .addEventListener("click", function () {
    copyFunction("Bangladesh-Railway-number");
  });
