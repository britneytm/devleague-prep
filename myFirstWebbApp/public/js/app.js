function addLastName(){

    var lastNameElem = 
      document.createElement('span');
    
    var lastNameText =
      document.createTextNode('T-M');

    lastNameElem.id = 'myLastName';
    lastNameElem.appendChild(lastNameText);

    var myNameElem = document.getElementById('myName');

    myNameElem.appendChild(lastNameElem);

    console.log('last name added');
    //document.body.appendChild(element);
    //<div id='someId'>TEST</div>
}
