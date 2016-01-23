function addLastName(id, lastName){

    var lastNameElem = 
      document.createElement('span');
    
    var lastNameText =
      document.createTextNode(lastName);

    lastNameElem.appendChild(lastNameText);

    var myNameElem = document.getElementById(id);

    myNameElem.appendChild(lastNameElem);

    console.log('last name added');
    //document.body.appendChild(element);
    //<div id='someId'>TEST</div>
}

