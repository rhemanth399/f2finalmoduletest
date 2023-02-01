const img1 = document.getElementById("img1");
const form1 = document.getElementById("form1");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const usernameInput = document.getElementById("username");
const img2 = document.getElementById("img2");
const usernameDisplay = document.getElementById("usernameDisplay");
const img3 = document.getElementById("img3");
const diceContainer = document.getElementById("diceContainer");
const diceImg = document.getElementById("diceImg");
const diceValue = document.getElementById("diceValue");
const img4 = document.getElementById("img4");
const congratsMsg=document.getElementById('congratsmsg');

let name = "";
let email = "";
let username = "";
let diceRolls = [];

let currentImage = 0;
let attempts=0;
img1.addEventListener("click", function() {
    if (currentImage === 0) {
  form1.style.display = "flex";
  currentImage = 1;
    }
});

form1.addEventListener("submit", function(event) {
  event.preventDefault();
  name = nameInput.value;
  email = emailInput.value;
  username = usernameInput.value;
  form1.style.display = "none";
  currentImage = 2;
});

img2.addEventListener("click", function() {
     if (currentImage === 2) {
  if (username) {
    usernameDisplay.style.display = "block";
    usernameDisplay.innerHTML = `Name: ${name}<br>Username: ${username}`;
  } else {
    alert("Please fill in the form before accessing this image.");
  }
  currentImage = 3;
}
});

img3.addEventListener("click", function() {
  diceContainer.style.display = "flex";
});

diceImg.addEventListener("click", function() {
    if (currentImage === 3) {
    if (diceRolls.length < 3) {
    let diceRoll = Math.floor(Math.random() * 6) + 1;
    diceRolls.push(diceRoll);
    diceValue.innerHTML = diceRolls.join(", ");
    if (diceRolls.length === 3) {
        let sum = diceRolls.reduce((a, b) => a + b, 0);
        if (sum > 10 || attempts === 1) {
        currentImage = 4;
        }
        else{
            if(attempts==1)
            {
                alert('Bad luck')
            }
            alert('try again');
            diceRolls=[];
            attempts=1;
        }
    }
  }
  }
});

img4.addEventListener("click", function() {
    if (currentImage === 4) {
    if (diceRolls.length === 3) {
      let sum = diceRolls.reduce((a, b) => a + b, 0);
      if (sum > 10) {
        let coupon = "";
        for (let i = 0; i < 12; i++) {
          coupon += Math.floor(Math.random() * 10);
        }
        alert("Coupon: " + coupon);
        let congratsImg=document.createElement('img');
        congratsImg.src='congrats.jpeg';
        congratsImg.alt='an image';
        congratsMsg.appendChild(congratsImg);
      } else {
        alert("Try again after scoring more than 10.");
      }
    }
}
  });
  
/*
let currentImage = 0;

img1.addEventListener("click", function() {
  if (currentImage === 0) {
    form1.style.display = "block";
    currentImage = 1;
  }
});

form1.addEventListener("submit", function(event) {
  event.preventDefault();
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let username = document.getElementById("username").value;
  form1.style.display = "none";
  currentImage = 2;
});

img2.addEventListener("click", function() {
  if (currentImage === 2) {
    alert("Name: " + name + "\nUsername: " + username);
    currentImage = 3;
  }
});

img3.addEventListener("click", function() {
  if (currentImage === 3) {
    let diceRoll = Math.floor(Math.random() * 6) + 1;
    diceRolls.push(diceRoll);
    alert("You rolled a " + diceRoll + ".");
    if (diceRolls.length === 3) {
      currentImage = 4;
    }
  }
});

img4.addEventListener("click", function() {
  if (currentImage === 4) {
    let sum = diceRolls.reduce((a, b) => a + b, 0);
    if (sum > 10) {
      let coupon = "";
      for (let i = 0; i < 12; i++) {
        coupon += Math.floor(Math.random() * 10);
      }
      alert("Coupon: " + coupon);
      currentImage = 5;
    } else {
      alert("Try again after scoring more than 10.");
    }
  }
});
*/