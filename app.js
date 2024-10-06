window.onload = loadTableItems;
var customerCard = document.getElementById("tblCustomer");

var custNo = "";
var custName = "";
var custItem = "";
var custTelNum = "";

var custList = [];
var ItmList=[];
var tableBody;

function BtnAdd() {
  var No = document.getElementById("txtNo").value;
  var name = document.getElementById("txtName").value;
  var item = document.getElementById("txtItem").value;
  var phoneNumber = document.getElementById("txtPhoneNumber").value;

  custNo = No;
  custName = name;
  custItem = item;
  custTelNum = phoneNumber;

  var customerDtails = {
    cNo: custNo,
    cName: custName,
    cItem: custItem,
    cNumber: custTelNum,
  };

  custList.push(customerDtails);

  var table = document.getElementById("tblCustomer");
  var row = table.insertRow(1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);

  cell1.innerHTML = No;
  cell2.innerHTML = name;
  cell3.innerHTML = item;
  cell4.innerHTML = phoneNumber;


  document.getElementById("txtForm").reset(0);
}

function BtnDelete() {
  document.getElementById("tblCustomer").deleteRow(2);
}
function btnAddMenu() {


  // Get form values
  const name = document.getElementById('txtItemName').value;
  const price = document.getElementById('txtItemPrice').value;
  const no = document.getElementById('txtItemNo').value;
  const discont = document.getElementById('txtItemDiscount').value;

  // Create a new card element
  const card = document.createElement('div');
  card.classList.add('col-md-4', 'my-1'); // Add Bootstrap column classes

  card.innerHTML = `
          <div class="card" style="width: 18rem;">
          <img src="..." class="card-img-top" alt="...">
          <div class="card-body">
          <h5 class="card-title">${name}</h5>
          <p class="card-text">${price}</p>
          <p class="card-textNo">${no}</p>
          <p class="card-textNo">${discont}</p>

          <a href="#" class="btn btn-success" onclick="btnAddOder()">Oders</a>
          </div>
        </div>
        `;
  // Append the new card to the card container
  document.getElementById('cardFoodItem').appendChild(card);

  const menuItemName = document.getElementById('txtItemName').value;
  const menuItemprice = document.getElementById('txtItemPrice').value;
  const menuItemno = document.getElementById('txtItemNo').value;
  const menuItemdiscont = document.getElementById('txtItemDiscount').value;


  const table = document.getElementById("tableItem");
  const row = table.insertRow(1);
  const cell = row.insertCell(0);
  const cell1 = row.insertCell(1);
  const cell2 = row.insertCell(2);
  const cell3 = row.insertCell(3);

  cell.innerHTML = menuItemno;
  cell1.innerHTML = menuItemName;
  cell2.innerHTML = menuItemprice;
  cell3.innerHTML = menuItemdiscont

  // Clear the form fields
  document.getElementById('formItem').reset();

}

function btnAddOder() {
  var itmname = document.getElementById("itmBurName").value;
  var itmprice = document.getElementById("itmBurPrice").value;
  var itmno = document.getElementById("itemno").value;

  var table = document.getElementById("tblOder");
  var row = table.insertRow(1);
  var cell = row.insertCell(0);
  var cell1 = row.insertCell(1);
  var cell2 = row.insertCell(2);

  console.log(itmname);
  console.log(itmprice);
  console.log(itmno);


  cell.innerHTML = itmname;
  cell1.innerHTML = itmprice;
  cell2.innerHTML = itmno;
}

function loadTable() {
  tableBody = ` <thead>
                <tr>
                  <th scope="col">Item Code</th>
                  <th scope="col">Item Name</th>
                  <th scope="col">Price</th>
                  <th scope="col">Discount</th>
                </tr>
              </thead>`

  itemList.forEach(items => {
    tableBody += `
      <tr>
           <th scope="row">${items.itemCode}</th>
            <td>${items.itemName}</td>
            <td>${items.price}</td>
            <td>${items.discount}</td>
</tr>
      `

  });

  itemDetails = {
    itemCode: InputItmCoded,
    itemName: InputItmCoded,
    price: InputItmCoded,
    discount: InputItmCoded
  };



  var item = document.getElementById("");
  item.innerHTML = tableBody;

  itemList.push(itemDetails);
}



let burgers = [
  { itemCode: "B1001", itemName: "Classic Burger (Large)", price: 750.00, discount: "-", stock: 58, image: "images/classicBurger.png" },
  { itemCode: "B1002", itemName: "Classic Burger (Regular)", price: 1500.00, discount: "15%", stock: 82, image: "images/classicBurger.png" },
  { itemCode: "B1003", itemName: "Turkey Burger", price: 1600.00, discount: "-", stock: 40, image: "images/TurkeyBurger.jpg" },
  { itemCode: "B1004", itemName: "Chicken Burger (Large)", price: 1400.00, discount: "-", stock: 92, image: "images/chickenBurger.jpg" },
  { itemCode: "B1005", itemName: "Chicken Burger (Regular)", price: 800.00, discount: "20%", stock: 73, image: "images/chickenBurger.jpg" },
  { itemCode: "B1006", itemName: "Cheese Burger (Large)", price: 1000.00, discount: "-", stock: 67, image: "images/cheeseBurger.jpg" },
  { itemCode: "B1007", itemName: "Cheese Burger (Regular)", price: 600.00, discount: "-", stock: 84, image: "images/cheeseBurger.jpg" },
  { itemCode: "B1008", itemName: "Bacon Burger", price: 650.00, discount: "15%", stock: 61, image: "images/baconBurger.jpg" },
  { itemCode: "B1009", itemName: "Shawarma Burger", price: 800.00, discount: "-", stock: 56, image: "images/shawarmaBurger.jpg" },
  { itemCode: "B1010", itemName: "Olive Burger", price: 1800.00, discount: "-", stock: 42, image: "images/oliveBurger.jpg" },
  { itemCode: "B1012", itemName: "Double-Cheese Burger", price: 1250.00, discount: "20%", stock: 50, image: "images/doubleCheeseBurger.jpg" },
  { itemCode: "B1013", itemName: "Crispy Chicken Burger (Regular)", price: 1200.00, discount: "-", stock: 76, image: "images/crispyChicken.jpg" },
  { itemCode: "B1014", itemName: "Crispy Chicken Burger (Large)", price: 1600.00, discount: "10%", stock: 68, image: "images/crispyChicken.jpg" },
  { itemCode: "B1015", itemName: "Paneer Burger", price: 900.00, discount: "-", stock: 79, image: "images/paneerBurger.jpg" }
];

let submarines = [
  { itemCode: "B1016", itemName: "Crispy Chicken Submarine (Large)", price: 2000.00, discount: "-", stock: 31, image: "images/crispyChickenSub.jpg" },
  { itemCode: "B1017", itemName: "Crispy Chicken Submarine (Regular)", price: 1500.00, discount: "-", stock: 27, image: "images/crispyChickenSub.jpg" },
  { itemCode: "B1018", itemName: "Chicken Submarine (Large)", price: 1800.00, discount: "3%", stock: 21, image: "images/chickenSub.jpg" },
  { itemCode: "B1019", itemName: "Chicken Submarine (Regular)", price: 1400.00, discount: "-", stock: 33, image: "images/chickenSub.jpg" },
  { itemCode: "B1020", itemName: "Grinder Submarine", price: 2300.00, discount: "-", stock: 29, image: "images/grinderSub.jpg" },
  { itemCode: "B1021", itemName: "Cheese Submarine", price: 2200.00, discount: "-", stock: 45, image: "images/cheeseSub.jpg" },
  { itemCode: "B1022", itemName: "Double Cheese n Chicken Submarine", price: 1900.00, discount: "16%", stock: 40, image: "images/doubleCheeseChickenSub.jpg" },
  { itemCode: "B1023", itemName: "Special Horgie Submarine", price: 2800.00, discount: "-", stock: 22, image: "images/specialHorgie.jpg" },
  { itemCode: "B1024", itemName: "MOS Special Submarine", price: 3000.00, discount: "-", stock: 18, image: "images/mosSpecialSub.jpg" }
];

let fries = [
  { itemCode: "B1025", itemName: "Steak Fries (Large)", price: 1200.00, discount: "-", stock: 65, image: "images/steakFries.jpg" },
  { itemCode: "B1026", itemName: "Steak Fries (Medium)", price: 600.00, discount: "-", stock: 58, image: "images/steakFries.jpg" },
  { itemCode: "B1027", itemName: "French Fries (Large)", price: 800.00, discount: "-", stock: 72, image: "images/frenchFries.jpg" },
  { itemCode: "B1028", itemName: "French Fries (Medium)", price: 650.00, discount: "-", stock: 48, image: "images/frenchFries.jpg" },
  { itemCode: "B1029", itemName: "French Fries (Small)", price: 450.00, discount: "-", stock: 81, image: "images/frenchFries.jpg" },
  { itemCode: "B1030", itemName: "Sweet Potato Fries (Large)", price: 600.00, discount: "-", stock: 52, image: "images/sweetPotatoFries.jpg" }
];

let pasta = [
  { itemCode: "B1031", itemName: "Chicken n Cheese Pasta", price: 1600.00, discount: "15%", stock: 34, image: "images/chickenCheesePasta.jpg" },
  { itemCode: "B1032", itemName: "Chicken Penne Pasta", price: 1700.00, discount: "-", stock: 42, image: "images/chickenPennePasta.jpg" },
  { itemCode: "B1033", itemName: "Ground Turkey Pasta Bake", price: 2900.00, discount: "10%", stock: 38, image: "images/turkeyPastaBake.jpg" },
  { itemCode: "B1034", itemName: "Creamy Shrimp Pasta", price: 2000.00, discount: "-", stock: 44, image: "images/creamyShrimpPasta.jpeg" },
  { itemCode: "B1035", itemName: "Lemon Butter Pasta", price: 1950.00, discount: "-", stock: 36, image: "images/lemonButterPasta.jpg" },
  { itemCode: "B1036", itemName: "Tagliatelle Pasta", price: 2400.00, discount: "1%", stock: 28, image: "images/tagliatellePasta.jpg" },
  { itemCode: "B1037", itemName: "Baked Ravioli", price: 2000.00, discount: "1%", stock: 30, image: "images/bakedRavioli.jpg" }
];

let chicken = [
  { itemCode: "B1038", itemName: "Fried Chicken (Small)", price: 1200.00, discount: "-", stock: 35, image: "images/friedChickenSmall.jpg" },
  { itemCode: "B1039", itemName: "Fried Chicken (Regular)", price: 2300.00, discount: "10%", stock: 40, image: "images/friedChickenSmall.jpg" },
  { itemCode: "B1040", itemName: "Fried Chicken (Large)", price: 3100.00, discount: "5%", stock: 33, image: "images/friedChickenSmall.jpg" },
  { itemCode: "B1041", itemName: "Hot Wings (Large)", price: 2400.00, discount: "-", stock: 22, image: "images/hotWingsLarge.jpg" },
  { itemCode: "B1042", itemName: "Devilled Chicken (Large)", price: 900.00, discount: "-", stock: 29, image: "images/devilledChicken.jpg" },
  { itemCode: "B1043", itemName: "BBQ Chicken (Regular)", price: 2100.00, discount: "-", stock: 18, image: "images/bbqChickenRegular.jpg" }
];

let drinks = [
  { itemCode: "B1044", itemName: "Pepsi (330ml)", price: 990.00, discount: "5%", stock: 105, image: "images/pepsi.jpg" },
  { itemCode: "B1045", itemName: "Coca-Cola (330ml)", price: 1230.00, discount: "-", stock: 93, image: "images/cocacola.jpg" },
  { itemCode: "B1046", itemName: "Sprite (330ml)", price: 1500.00, discount: "3%", stock: 114, image: "images/sprite.jpg" },
  { itemCode: "B1047", itemName: "Mirinda (330ml)", price: 850.00, discount: "7%", stock: 125, image: "images/mirinda.jpg" }
];

function loadTableItems(){
  ItmList=
  [{ itemCode: "B1001", itemName: "Classic Burger (Large)", price: 750.00, discount: "-", stock: 58, image: "images/classicBurger.png" },
  { itemCode: "B1002", itemName: "Classic Burger (Regular)", price: 1500.00, discount: "15%", stock: 82, image: "images/classicBurger.png" },
  { itemCode: "B1003", itemName: "Turkey Burger", price: 1600.00, discount: "-", stock: 40, image: "images/TurkeyBurger.jpg" },
  { itemCode: "B1004", itemName: "Chicken Burger (Large)", price: 1400.00, discount: "-", stock: 92, image: "images/chickenBurger.jpg" },
  { itemCode: "B1005", itemName: "Chicken Burger (Regular)", price: 800.00, discount: "20%", stock: 73, image: "images/chickenBurger.jpg" },
  { itemCode: "B1006", itemName: "Cheese Burger (Large)", price: 1000.00, discount: "-", stock: 67, image: "images/cheeseBurger.jpg" },
  { itemCode: "B1007", itemName: "Cheese Burger (Regular)", price: 600.00, discount: "-", stock: 84, image: "images/cheeseBurger.jpg" },
  { itemCode: "B1008", itemName: "Bacon Burger", price: 650.00, discount: "15%", stock: 61, image: "images/baconBurger.jpg" },
  { itemCode: "B1009", itemName: "Shawarma Burger", price: 800.00, discount: "-", stock: 56, image: "images/shawarmaBurger.jpg" },
  { itemCode: "B1010", itemName: "Olive Burger", price: 1800.00, discount: "-", stock: 42, image: "images/oliveBurger.jpg" },
  { itemCode: "B1012", itemName: "Double-Cheese Burger", price: 1250.00, discount: "20%", stock: 50, image: "images/doubleCheeseBurger.jpg" },
  { itemCode: "B1013", itemName: "Crispy Chicken Burger (Regular)", price: 1200.00, discount: "-", stock: 76, image: "images/crispyChicken.jpg" },
  { itemCode: "B1014", itemName: "Crispy Chicken Burger (Large)", price: 1600.00, discount: "10%", stock: 68, image: "images/crispyChicken.jpg" },
  { itemCode: "B1015", itemName: "Paneer Burger", price: 900.00, discount: "-", stock: 79, image: "images/paneerBurger.jpg" },
  { itemCode: "B1016", itemName: "Crispy Chicken Submarine (Large)", price: 2000.00, discount: "-", stock: 31, image: "images/crispyChickenSub.jpg" },
  { itemCode: "B1017", itemName: "Crispy Chicken Submarine (Regular)", price: 1500.00, discount: "-", stock: 27, image: "images/crispyChickenSub.jpg" },
  { itemCode: "B1018", itemName: "Chicken Submarine (Large)", price: 1800.00, discount: "3%", stock: 21, image: "images/chickenSub.jpg" },
  { itemCode: "B1019", itemName: "Chicken Submarine (Regular)", price: 1400.00, discount: "-", stock: 33, image: "images/chickenSub.jpg" },
  { itemCode: "B1020", itemName: "Grinder Submarine", price: 2300.00, discount: "-", stock: 29, image: "images/grinderSub.jpg" },
  { itemCode: "B1021", itemName: "Cheese Submarine", price: 2200.00, discount: "-", stock: 45, image: "images/cheeseSub.jpg" },
  { itemCode: "B1022", itemName: "Double Cheese n Chicken Submarine", price: 1900.00, discount: "16%", stock: 40, image: "images/doubleCheeseChickenSub.jpg" },
  { itemCode: "B1023", itemName: "Special Horgie Submarine", price: 2800.00, discount: "-", stock: 22, image: "images/specialHorgie.jpg" },
  { itemCode: "B1024", itemName: "MOS Special Submarine", price: 3000.00, discount: "-", stock: 18, image: "images/mosSpecialSub.jpg" },
  { itemCode: "B1025", itemName: "Steak Fries (Large)", price: 1200.00, discount: "-", stock: 65, image: "images/steakFries.jpg" },
  { itemCode: "B1026", itemName: "Steak Fries (Medium)", price: 600.00, discount: "-", stock: 58, image: "images/steakFries.jpg" },
  { itemCode: "B1027", itemName: "French Fries (Large)", price: 800.00, discount: "-", stock: 72, image: "images/frenchFries.jpg" },
  { itemCode: "B1028", itemName: "French Fries (Medium)", price: 650.00, discount: "-", stock: 48, image: "images/frenchFries.jpg" },
  { itemCode: "B1029", itemName: "French Fries (Small)", price: 450.00, discount: "-", stock: 81, image: "images/frenchFries.jpg" },
  { itemCode: "B1030", itemName: "Sweet Potato Fries (Large)", price: 600.00, discount: "-", stock: 52, image: "images/sweetPotatoFries.jpg" },  
  { itemCode: "B1031", itemName: "Chicken n Cheese Pasta", price: 1600.00, discount: "15%", stock: 34, image: "images/chickenCheesePasta.jpg" },
  { itemCode: "B1032", itemName: "Chicken Penne Pasta", price: 1700.00, discount: "-", stock: 42, image: "images/chickenPennePasta.jpg" },
  { itemCode: "B1033", itemName: "Ground Turkey Pasta Bake", price: 2900.00, discount: "10%", stock: 38, image: "images/turkeyPastaBake.jpg" },
  { itemCode: "B1034", itemName: "Creamy Shrimp Pasta", price: 2000.00, discount: "-", stock: 44, image: "images/creamyShrimpPasta.jpeg" },
  { itemCode: "B1035", itemName: "Lemon Butter Pasta", price: 1950.00, discount: "-", stock: 36, image: "images/lemonButterPasta.jpg" },
  { itemCode: "B1036", itemName: "Tagliatelle Pasta", price: 2400.00, discount: "1%", stock: 28, image: "images/tagliatellePasta.jpg" },
  { itemCode: "B1037", itemName: "Baked Ravioli", price: 2000.00, discount: "1%", stock: 30, image: "images/bakedRavioli.jpg" },
  { itemCode: "B1038", itemName: "Fried Chicken (Small)", price: 1200.00, discount: "-", stock: 35, image: "images/friedChickenSmall.jpg" },
  { itemCode: "B1039", itemName: "Fried Chicken (Regular)", price: 2300.00, discount: "10%", stock: 40, image: "images/friedChickenSmall.jpg" },
  { itemCode: "B1040", itemName: "Fried Chicken (Large)", price: 3100.00, discount: "5%", stock: 33, image: "images/friedChickenSmall.jpg" },
  { itemCode: "B1041", itemName: "Hot Wings (Large)", price: 2400.00, discount: "-", stock: 22, image: "images/hotWingsLarge.jpg" },
  { itemCode: "B1042", itemName: "Devilled Chicken (Large)", price: 900.00, discount: "-", stock: 29, image: "images/devilledChicken.jpg" },
  { itemCode: "B1043", itemName: "BBQ Chicken (Regular)", price: 2100.00, discount: "-", stock: 18, image: "images/bbqChickenRegular.jpg" },
  { itemCode: "B1044", itemName: "Pepsi (330ml)", price: 990.00, discount: "5%", stock: 105, image: "images/pepsi.jpg" },
  { itemCode: "B1045", itemName: "Coca-Cola (330ml)", price: 1230.00, discount: "-", stock: 93, image: "images/cocacola.jpg" },
  { itemCode: "B1046", itemName: "Sprite (330ml)", price: 1500.00, discount: "3%", stock: 114, image: "images/sprite.jpg" },
  { itemCode: "B1047", itemName: "Mirinda (330ml)", price: 850.00, discount: "7%", stock: 125, image: "images/mirinda.jpg" }]

  tableBody = ` <thead>
  <tr>
    <th scope="col">Item Code</th>
    <th scope="col">Item Name</th>
    <th scope="col">Price</th>
    <th scope="col">Discount</th>
  </tr>
</thead>`

ItmList.forEach(items => {
  tableBody += `
    <tr>
         <th scope="row">${items.itemCode}</th>
          <td>${items.itemName}</td>
          <td>${items.price}</td>
          <td>${items.discount}</td>
</tr>
    `

});

var item = document.getElementById("tableItem");
item.innerHTML = tableBody;


}
function BtnDelete() {
  document.getElementById("tblCustomer").deleteRow(0);
}
function btnSearchMenu(){
  var searchInputItem=document.getElementById("txtItemNo").value;

  var itemFound=ItmList.findIndex((item)=>{
    return searchInputItem==item.itemCode;
  });

  var serchItem=ItmList[itemFound];

  var itmName=document.getElementById("txtItemName");
  var itmPrice=document.getElementById("txtItemPrice");
  var itmDiscount=document.getElementById("txtItemDiscount");

itmName.value=serchItem.itemName;
itmPrice.value=serchItem.price;
itmDiscount.value=serchItem.discount;
}





