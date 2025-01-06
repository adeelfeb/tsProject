// Enum for User Roles
enum Role {
    Admin = "Admin",
    Teacher = "Teacher",
    Student = "Student"
  }
  
  // User Interface
  interface User {
    name: string;
    age: number;
    role: Role;
  }
  
  // Creating Users with different roles
  const user1: User = {
    name: "Alice",
    age: 30,
    role: Role.Admin
  };
  
  const user2: User = {
    name: "Bob",
    age: 25,
    role: Role.Teacher
  };
  
  const user3: User = {
    name: "Charlie",
    age: 20,
    role: Role.Student
  };
  
  // Function to display user information based on their role
  function displayUserInfo(user: User) {
    console.log(`${user.name}, Age: ${user.age}, Role: ${user.role}`);
  }
  
  // Displaying users' information
  displayUserInfo(user1); // Alice, Age: 30, Role: Admin
  displayUserInfo(user2); // Bob, Age: 25, Role: Teacher
  displayUserInfo(user3); // Charlie, Age: 20, Role: Student
  