var selectedRow = null;

//show alerts

function showAlert(message, className) {
  const div = document.createElement("div");
  div.className = `alert-alert-${className}`;

  div.appendChild(document.createTextNode(message));
  const container = document.querySelector(".container");
  const main = document.querySelector(".main");
  container.insertBefore(div, main);

  setTimeout(() => document.querySelector(".alert").remove(), 3000);
}

// clear all fields

function clearFields(){
  document.querySelector("#firstName").value = "";
  document.querySelector("#lastName").value = "";
  document.querySelector("#email").value = "";
}

// add data

document.querySelector("#student-form").addEventListener("submit" , (e) =>{
    e.preventDefault();

    // get form values
    const firstName = document.querySelector("#firstName").value;
    const lastName = document.querySelector("#lastName").value;
    const email = document.querySelector("#email").value;

    // validate

    if(firstName == "" ||  lastName == "" || email == "" ){
        showAlert("Please fill all fields" , "danger");
    }else{
        if(selectedRow == null){
            const list = document.querySelector("#student-list");
            const row = document.createElement("tr");

            row.innerHTML = `
              <td>${firstName}</td>
              <td>${lastName}</td>
              <td>${email}</td>
              <td>
               <a href="#" class="btn btn-warning btn-sm edit">Edit</a>
               <a href="#" class="btn btn-danger btn-sm delete">Delete</a>
            `;
            list.appendChild(row);
            selectedRow = null;
            showAlert("Student Added" , "success");
        }
         else{
            selectedRow.children[0].textContent = firstName;
            selectedRow.children[1].textContent = lastName;
            selectedRow.children[2].textContent = email;
            selectedRow = null;
            showAlert("Student Info Edited" , "info");
        }
        clearFields();
    }
}) ;

//

// delete data

document.querySelector("#student-list").addEventListener("click", (e) => {
  target = e.target;
  if (target.classList.contains("delete")) {
    target.parentElement.parentElement.remove();
    showAlert("Student Data Deleted", "danger");
  }
});
