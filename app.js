const employeeList = [
  {
    name: 'Jan',
    officeNum: 1,
    phoneNum: '222-222-2222'
  },
  {
    name: 'Juan',
    officeNum: 304,
    phoneNum: '489-789-8789'
  },
  {
    name: 'Margie',
    officeNum: 789,
    phoneNum: '789-789-7897'
  },
  {
    name: 'Sara',
    officeNum: 32,
    phoneNum: '222-789-4654'
  },
  {
    name: 'Tyrell',
    officeNum: 3,
    phoneNum: '566-621-0452'
  },
  {
    name: 'Tasha',
    officeNum: 213,
    phoneNum: '789-766-5675'
  },
  {
    name: 'Ty',
    officeNum: 211,
    phoneNum: '789-766-7865'
  },
  {
    name: 'Sarah',
    officeNum: 345,
    phoneNum: '222-789-5231'
  }
];
let userCommand ='';
  const runCommand = function(e){
    e.preventDefault();
    if(userCommand.toLowerCase()==="print"){
      let htmlStr = '';
      for(i=0;i<employeeList.length;i++){
        htmlStr += `<p> ${employeeList[i].name}</p>`;
        htmlStr += `<p> ${employeeList[i].officeNum}</p>`;
        htmlStr += `<p> ${employeeList[i].phoneNum}</p>`;
        htmlStr += `<p> ------------------</p>`;
      }
      render(htmlStr);
    }
    else if(userCommand.toLowerCase()==="verify"){
      render('verify');
      let userName = $('input').val();
      let exists = 'no';
      for(i=0;i<employeeList.length; i++){
        if(employeeList[i].name.toLowerCase() === userName.toLowerCase()){
          exists = 'yes';
        }
      }
      render(exists);
    }
    else if(userCommand.toLowerCase()==="lookup"){
      let userInput = prompt("Please input a employee name.");
      for(i=0;i<employeeList.length; i++){
        if(employeeList[i].name.toLowerCase() === userInput.toLowerCase()){
          htmlStr += `<p> ${employeeList[i].name}</p>`;
        htmlStr += `<p> ${employeeList[i].officeNum}</p>`;
        htmlStr += `<p> ${employeeList[i].phoneNum}</p>`;
        }
      }
    }
    else if(userCommand.toLowerCase()==="contains"){
      let userInput = prompt("Please input a string.");
      for(i=0;i<employeeList.length; i++){
        if(employeeList[i].name.toLowerCase().includes(userInput.toLowerCase()) === true){
          htmlStr += `<p> ${employeeList[i].name}</p>`;
        htmlStr += `<p> ${employeeList[i].officeNum}</p>`;
        htmlStr += `<p> ${employeeList[i].phoneNum}</p>`;
        htmlStr += `<p> ------------------</p>`;
        }
      }
    }
    else if(userCommand.toLowerCase()==="update"){
      let userInput = prompt("Please input a name.");
      let userField = prompt("Please input a field you would like to update.");
      let userValue = prompt("Please input the value you would like to update with")
      for(i=0;i<employeeList.length; i++){
        if(employeeList[i].name.toLowerCase() === userInput.toLowerCase()){
          if(userField.toLowerCase().includes("phone")){
            employeeList[i].phoneNum = userValue;
          }
          else if(userField.toLowerCase().includes("na")){
            employeeList[i].name = userValue;
          }
          else if(userField.toLowerCase().includes("office")){
            employeeList[i].officeNum = userValue;
          }
          else{
            render('Invalid field selected');
          }
          htmlStr += `<p> ${employeeList[i].name}</p>`;
        htmlStr += `<p> ${employeeList[i].officeNum}</p>`;
        htmlStr += `<p> ${employeeList[i].phoneNum}</p>`;
        htmlStr += `<p> ------------------</p>`;
        }
      }
    }
    else if(userCommand.toLowerCase()==="add"){
      let userName = prompt("Please input a name.");
      let userOffice = prompt("Please input the office number.");
      let userPhone = prompt("Please input the phone number.")
      let newEmployee = {
        name: userName,
        officeNum: userOffice,
        phoneNum: userPhone
      }
      employeeList.push(newEmployee);
      for(i=0;i<employeeList.length;i++){
        htmlStr += `<p> ${employeeList[i].name}</p>`;
        htmlStr += `<p> ${employeeList[i].officeNum}</p>`;
        htmlStr += `<p> ${employeeList[i].phoneNum}</p>`;
        htmlStr += `<p> ------------------</p>`;
      }
    }
    else if(userCommand.toLowerCase()==="delete"){
      let userName = prompt("Please input a name.");
      for(i=0;i<employeeList.length; i++){
        if(employeeList[i].name.toLowerCase() === userName.toLowerCase()){
          employeeList.splice(i,1);
        }
      }
      for(i=0;i<employeeList.length;i++){
        htmlStr += `<p> ${employeeList[i].name}</p>`;
        htmlStr += `<p> ${employeeList[i].officeNum}</p>`;
        htmlStr += `<p> ${employeeList[i].phoneNum}</p>`;
        htmlStr += `<p> ------------------</p>`;
      }
    }
    else if(userCommand.toLowerCase()==="sort"){
      employeeList.sort();
      for(i=0;i<employeeList.length;i++){
        htmlStr += `<p> ${employeeList[i].name}</p>`;
        htmlStr += `<p> ${employeeList[i].officeNum}</p>`;
        htmlStr += `<p> ${employeeList[i].phoneNum}</p>`;
        htmlStr += `<p> ------------------</p>`;
      }
    }
    // else if(userCommand.toLowerCase() ===""){
      //additional command to go here
    // }
    else{
      render('Not a valid command');
    }
  }

  const verify = function(){
    $('input').addClass('show');
    userCommand = 'verify';
  }
  const print = function(){
    userCommand = 'print';
    $('input').removeClass('show');
    
  }
  const render = function(htmlStr){
    $('#list').html(htmlStr);
  }

  $('verify').on('click', verify);
  $('print').on('click', print);
  $('submit').on('click', runCommand);