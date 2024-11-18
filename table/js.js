const a = document.getElementById("click");
const b = document.getElementsByClassName("veri-hucre");

var cbx = document.getElementById("inpLock");


var c = 0;

var s = null;

a.addEventListener("click", function(event){

    if(cbx.checked!=true){

            const clickedCell = event.target;
    const cellClass = clickedCell.className;

    if (s != document.getElementById("veri").value){
        c = c + 1;
    }


    s = document.getElementById("veri").value;
    var s2 = document.getElementById("veri2").value;
    var s3 = document.getElementById("veri3").value;


const selected = event.target.innerText;

if(cellClass.includes("gun-hucre") && s3){
    event.target.innerHTML = s3 + '<input type="checkbox" class="cbx">';
}
// if(cellClass.includes("saat-hucre") && s3){
//     ss=[];
//     ss = s3.split(" ");
//     event.target.innerHTML = ss[0] + "<br>" + ss[1];
// }


if (cellClass.includes("veri-hucre")) {
    // alert("Element, 'example-class' class'ına sahip.");
    //console.log(selected);

    event.target.innerHTML = s.toUpperCase() + "<br> <hr color='purple'>" + capitalizeFirstLetters(s2);

if (selected=="" && (s != "" || s2 != "")){

    switch(c){

            case(1):
            event.target.classList.add("deneme1"); 
            break;

            case(2):
            event.target.classList.add("deneme2"); 
            break;

            case(3):
            event.target.classList.add("deneme3"); 
            break;

            case(4):
            event.target.classList.add("deneme4"); 
            break;

            case(5):
            event.target.classList.add("deneme5"); 
            break;

            case(6):
            event.target.classList.add("deneme6"); 
            break;

            case(7):
            event.target.classList.add("deneme7"); 
            break;

            case(8):
            event.target.classList.add("deneme8"); 
            break;

            case(9):
            event.target.classList.add("deneme9"); 
            break;

            case(10):
            event.target.classList.add("deneme10"); 
            break;



    }

       
}
else{
    event.target.classList.remove("deneme1"); 

    event.target.classList.remove("deneme2"); 

    event.target.classList.remove("deneme3"); 

    event.target.classList.remove("deneme4"); 

    event.target.classList.remove("deneme5"); 

    event.target.classList.remove("deneme6"); 

    event.target.classList.remove("deneme7"); 

    event.target.classList.remove("deneme8"); 

    event.target.classList.remove("deneme9"); 

    event.target.classList.remove("deneme10"); 

    event.target.innerHTML = "";   

}
}}});

//---------------------- Sütun ekleme -------------------------
function addColumnAndCells(){
    if(cbx.checked!=true){
    
    const table = document.getElementById("click");

    var columnheader = document.createElement("th");
    columnheader.innerHTML = '<input type="time" id="appt" name="appt"><br><input type="time" id="appt" name="appt"><br><input type="checkbox" class="cbx2">'
    
    columnheader.classList.add("saat-hucre");
    
    
    
    table.rows[0].appendChild(columnheader);


    for(var m1 = 1; m1 < table.rows.length; m1++){
        const dataCell = document.createElement("td");
        dataCell.classList.add("veri-hucre");
        table.rows[m1].appendChild(dataCell);


    }


    }
}


//--------------Satır Ekleme--------------

function addRowAndCells() {
    if(cbx.checked!=true){
    // Get the table element
    const table = document.getElementById("click");

    var checkboxes2 = table.getElementsByClassName("cbx2");


    // Create a new row and set its class
    const newRow = document.createElement("tr");
    newRow.classList.add("trr");

    // Create a new cell for the row header and set its class and content
    const headerCell = document.createElement("th");
    headerCell.classList.add("gun-hucre", "row");
    headerCell.textContent = "Yeni Başlık"; // Replace with the desired day name

    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("cbx");
    headerCell.appendChild(checkbox);


    // Add the header cell to the new row
    newRow.appendChild(headerCell);

    // Create empty cells for each time slot and add them to the new row
    for (let i = 0; i < checkboxes2.length; i++) {
        const dataCell = document.createElement("td");
        dataCell.classList.add("veri-hucre");
        newRow.appendChild(dataCell);
    }

    // Add the new row to the table
    table.appendChild(newRow);
}
}

// ----------------------DELETE----------------------

function deleteSelectedRows() {
    if(cbx.checked!=true){
    var y = [];
    var l = [];
    var table = document.getElementById("click");
    var checkboxes = table.getElementsByClassName("cbx");

    var checkboxes2 = table.getElementsByClassName("cbx2");

    // console.log(table.rows.length);
    console.log(checkboxes2.length);

    for(var k1 = 1; k1 < checkboxes2.length+1; k1++){
        if(checkboxes2[k1-1].checked){
            l.push(k1);
        }
    }
    // console.log(l+" "+l.length);

    for(var x = 1; x < table.rows.length; x++){
        // console.log(checkboxes[x-1]+" "+checkboxes.length);
        if(checkboxes[x-1].checked){
            y.push(x);
            // console.log("zzzZZZzzz");
        }
        
    }

    // console.log(y);
    // console.log(y.length);

    var k = 0;
    xx = 0;

    // for(var x1 = 0; x1<table.rows.length; x1++){
    //     table.rows[x1].deleteCell(1);
    //   }

    for(var z1 = 0; z1 < l.length; z1++){
        for(var g = 0; g < table.rows.length; g++){
            table.rows[g].deleteCell(l[z1]-xx)
        }
        xx++;

    }

    k = 0;

    for(var z = 0; z < y.length; z++){
                table.deleteRow(y[z]-k);
                k++;
            }





    // table.deleteRow(1)
  }

}











function capitalizeFirstLetters(inputString) {
    // Adım 1: String içindeki kelimeleri parçalara ayırın
    const words = inputString.split(' ');
  
    // Adım 2: Her kelimenin baş harfini büyük yapın
    const capitalizedWords = words.map(word => {
      // İlk karakteri büyüt, diğer karakterleri küçült
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });
  
    // Adım 3: Büyük harfli kelimeleri tekrar birleştirin
    const resultString = capitalizedWords.join(' ');
  
    return resultString;
  }