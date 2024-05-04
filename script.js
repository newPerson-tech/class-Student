class Student {
  constructor(firstName, lastName, birthYear) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
    this.grades = []; // Array with grades
    this.attendance = new Array(25).fill(null); // Array with presence
  }

  //Methid to get student's age
  getAge() {
    const currentYear = new Date().getFullYear();
    return currentYear - this.birthYear;
  }

  // Method to get students grade
  addGrade(grade) {
    if (typeof grade === "number" && grade >= 0 && grade <= 100) {
      this.grades.push(grade);
    } else {
      console.error("Grade muct be a number from 0 yo 100");
    }
  }

  // Method to get student's average grade
  getAverageGrade() {
    if (this.grades.length === 0) {
      return 0;
    }
    const sum = this.grades.reduce((acc, grade) => acc + grade, 0);
    return sum / this.grades.length;
  }

  // Method to check attendance
  present() {
    const index = this.attendance.indexOf(null); // Looking for first not-filled date
    if (index !== -1) {
      this.attendance[index] = true; // Mark as present
    } else {
      console.error("All 25 dates have been filled");
    }
  }

  // Method to check abscence
  absent() {
    const index = this.attendance.indexOf(null); // Looking for first not-filled date
    if (index !== -1) {
      this.attendance[index] = false; // Mark as abcent
    } else {
      console.error("All 25 dates have been filled");
    }
  }

  // Method to calculate average presence
  getAttendanceRate() {
    const totalClasses = this.attendance.length;
    const presentCount = this.attendance.filter(
      (status) => status === true
    ).length;
    return presentCount / totalClasses;
  }

  // Method to sum up student's success
  summary() {
    const averageGrade = this.getAverageGrade();
    const attendanceRate = this.getAttendanceRate();

    if (averageGrade > 90 && attendanceRate > 0.9) {
      return "Awesome job!";
    } else if (averageGrade > 90 || attendanceRate > 0.9) {
      return "Well done, you have more potential though";
    } else {
      return "You're going to waste it!";
    }
  }
}

const student1 = new Student("Tony", "Perks", 2000);
const student2 = new Student("Leagh", "Sudough", 2001);

student1.addGrade(95);
student1.addGrade(88);
student2.addGrade(75);
student2.addGrade(82);

student1.present();
student1.absent();
student2.present();
student2.present();

console.log(`Tony's age: ${student1.getAge()}`);
console.log(`Tony's average grade: ${student1.getAverageGrade()}`);
console.log(`Tony's summary: ${student1.summary()}`);

console.log(`Leagh's age: ${student2.getAge()}`);
console.log(`Leagh's average grade: ${student2.getAverageGrade()}`);
console.log(`Leagh's summary: ${student2.summary()}`);
