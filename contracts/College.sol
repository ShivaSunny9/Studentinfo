pragma solidity ^0.5.8;

contract College {
    
    struct Student {
        string Name;
        uint Age;
    }
    
    mapping (address => Student) students;
    address [] public studentsAccts;
    
    event Deposit(address indexed _address, string _name, uint age);
    function setinfo(address _address, string memory name, uint age) public returns (uint) {
        Student storage student = students[_address];
        student.Name = name;
        student.Age = age;
        studentsAccts.push(_address) -1;
        emit Deposit(msg.sender, name, age);
    }
    
    function getinfo(address _address) view public returns (string memory name, uint age) {
        return (students[_address].Name, students[_address].Age);
        
    }
    
    function countStudent() view public returns (uint) {
        return studentsAccts.length;
    }
}
