pragma solidity ^0.5.8;

contract info  {
     struct Student {
         string Name;
         uint Age;
     }  
mapping (address => Student) students;
address [] public studentsAccts;
         
  
function setinfo(address _address, string memory name, uint age) public returns(uint) {
 Student storage student = students[_address];
   student.Name = name;
     student.Age = age;
      studentsAccts.push(_address) -1;
}

function getinfo(address _address) view public returns (string memory name, uint age) {
return (students[_address].Name, students[_address].Age);
}

function countStudent() view public returns (uint) {
      return studentsAccts.length;
      
  }
}
