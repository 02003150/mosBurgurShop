var customerCard=document.getElementById("tblCustomer");

var custNo="";
var custName="";
var custItem="";
var custTelNum="";

var custList=[];

function BtnAdd(){
    var No=document.getElementById("txtNo").value;
    var name=document.getElementById("txtName").value;
    var item=document.getElementById("txtItem").value;
    var phoneNumber=document.getElementById("txtPhoneNumber").value;

    custNo=No;
    custName=name;
    custItem=item;
    custTelNum=phoneNumber;

    var customerDtails={
        cNo:custNo,
        cName:custName,
        cItem:custItem,
        cNumber:custTelNum,
    };

    custList.push(customerDtails);

    var table=document.getElementById("tblCustomer");
    var row=table.insertRow(1);
    var cell1=row.insertCell(0);
    var cell2=row.insertCell(1);
    var cell3=row.insertCell(2);
    var cell4=row.insertCell(3);

    cell1.innerHTML=No;
    cell2.innerHTML=name;
    cell3.innerHTML=item;
    cell4.innerHTML=phoneNumber;


    document.getElementById("txtForm").reset(0);
}

function BtnDelete(){
    document.getElementById("tblCustomer").deleteRow(0);
}
function btnAddMenu(){
    
  
        // Get form values
        const name = document.getElementById('txtItemName').value;
        const price = document.getElementById('txtItemPrice').value;
        const no=document.getElementById('txtItemNo').value;
        const discont=document.getElementById('txtItemDiscount').value;

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
        const menuItemno=document.getElementById('txtItemNo').value;
        const menuItemdiscont=document.getElementById('txtItemDiscount').value;
      
        
        const table=document.getElementById("tblItem");
        const row=table.insertRow(0);
        const cell=row.insertCell(0);
        const cell1=row.insertCell(1);
        const cell2=row.insertCell(2);
        const cell3=row.insertCell(3);
      
        cell.innerHTML=menuItemName;
        cell1.innerHTML=menuItemprice;
        cell2.innerHTML=menuItemno;
        cell3.innerHTML=menuItemdiscont

        // Clear the form fields
        document.getElementById('formItem').reset();
      
}

function btnAddOder(){
  var itmname=document.getElementById("itmBurName").value;
  var itmprice=document.getElementById("itmBurPrice").value;
  var itmno=document.getElementById("itemno").value;

  var table=document.getElementById("tblOder");
  var row=table.insertRow(1);
  var cell=row.insertCell(0);
  var cell1=row.insertCell(1);
  var cell2=row.insertCell(2);

  console.log(itmname);
  console.log(itmprice);
  console.log(itmno);
  
  
  cell.innerHTML=itmname;
  cell1.innerHTML=itmprice;
  cell2.innerHTML=itmno;
}








