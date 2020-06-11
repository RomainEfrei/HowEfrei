function ValidateInputs() {
    nom = document.getElementById("name");
    if (!/^[A-Za-z]+$/.test(nom.value)) {
      alert("Vous avez entré un mauvais nom");
      return (false);
    }
    mail = document.getElementById("e-mail");
    if (!/^.+@.+\..+$/.test(mail.value)) {
      alert("Vous avez entré un mauvais mail");
      return (false);
    }
    return (true);
  }

function Ajouter() {
    if (false == ValidateInputs()) {return true;};

    var table = document.getElementById("T");
    console.log(table);

    var row = document.createElement("tr");

    
    var name = document.getElementById("name"); // Ou document.forms['login']
    console.log(name.value);

    var email = document.getElementById("e-mail"); // Ou document.forms['login']
    console.log(email.value);

    var comment = document.getElementById("comment"); // Ou document.forms['login']
    console.log(comment.value);

    var cell0 = document.createElement("td")
    cell0.textContent = name.value;
    var cell1 = document.createElement("td")
    cell1.textContent = email.value;
    var cell2 = document.createElement("td")
    cell2.textContent = comment.value;


    row.appendChild(cell0);
    row.appendChild(cell1);
    row.appendChild(cell2);

    table.appendChild(row);

    return true;
  }