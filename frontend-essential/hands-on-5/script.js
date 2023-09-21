//! เข้าถึง input text
//! const addedActivity = document.getElementById("activity").value; // ใช้ไม่ได้ เพราะ มันอยู่บรรทัดแรก เก็บค่าแรกครั้งเดียว ซึ่งก็คือ string ว่าง ถ้าจะทำ ควรเขียนใส่ในฟังชั่นเลย

// เข้าถึงปุ่ม add
const button = document.getElementById("addBtn");

document.getElementById("addBtn").addEventListener("click", function (event) {
  event.preventDefault();
});

// เข้าถึง div id="list"
const listAdd = document.getElementById("list");

// สร้าง callback function ว่าให้ทำอะไร

/*
//* add func
const addClicked = () => {
  const addedAct = document.createElement("p");
  //  ! addedAct.innerHTML = addedActivity;
  addedAct.innerHTML = document.getElementById("activity").value; //* .value สำหรับเอาค่าในนั้น
  // addedAct = <p>

  addedAct.classList.add("activity");

  // function for toggle <p> class between none and checkedTask
  addedAct.onclick = () => {
    addedAct.classList.toggle("checkedTask");
  };

  listAdd.appendChild(addedAct);
};
 */

const inputAct = document.getElementById("activity");

const addClicked = () => {
  // ถ้าไม่พิมพ์อะไร ให้ alert
  if (!inputAct.value) {
    alert("Please input something!");
    return;
  }

  //create new *main* div
  const addedDiv = document.createElement("div");
  //add class to make it flex
  addedDiv.classList.add("divbox");
  //add another class (decoration)
  addedDiv.classList.add("activityStyle");

  //create 2 child div
  const addedDivLeft = document.createElement("div");
  const addedDivRight = document.createElement("div");

  //append those child div to the main div
  addedDiv.appendChild(addedDivLeft);
  addedDiv.appendChild(addedDivRight);

  //ให้ div ซ้าย รับคำที่พิมพ์จาก input form
  addedDivLeft.innerHTML = document.getElementById("activity").value;

  // function for toggle addedDivLeft class between none and checkedTask
  addedDiv.onclick = () => {
    addedDiv.classList.toggle("checkedTask");
  };

  //create img
  const addX = document.createElement("img");
  //path to that img
  addX.src = "img/Red_X.svg.png";
  //assign img size
  addX.width = 10;
  addX.height = 10;
  //append that img to right div
  addedDivRight.appendChild(addX);

  //*normal remove
  /*
  //func that remove when click on right div (x)
  addedDivRight.onclick = () => {
    // listAdd.classList.remove("addedDiv");
    addedDiv.remove();
  };
*/

  //* cool fade out remove
  addedDivRight.onclick = () => {
    // Apply the fade-out class to initiate the fade-out effect
    addedDiv.classList.add("fade-out");

    // After the transition is complete, remove the element from the DOM
    addedDiv.addEventListener("transitionend", () => {
      addedDiv.remove();
    });
  };
  //*

  //add the main div to listadd
  listAdd.appendChild(addedDiv);

  //ใส่เป็นลำดับสุดท้าย เพื่อ clear after each use
  inputAct.value = "";
};

// แสดงผล callback เมื่อคลิก
//* click func
button.addEventListener("click", addClicked);
