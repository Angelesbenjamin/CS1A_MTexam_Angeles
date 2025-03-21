// Initialize arrays for subjects
let DSA = [];
let WebDev = [];

function enrollStudent(subject) {
    let studentName = prompt("Enter the name of the student to enroll:");
    subject.push(studentName);
    console.log(${studentName} has been enrolled.);
}

function unenrollStudent(subject) {
    if (subject.length === 0) {
        console.log("No students are currently enrolled.");
        return;
    }

    console.log("Enrolled students:", subject.join(", "));
    let studentName = prompt("Enter the name of the student to unenroll:");

    let index = subject.indexOf(studentName);
    if (index !== -1) {
        subject.splice(index, 1); // Remove student
        console.log(${studentName} has been unenrolled.);
    } else {
        console.log(${studentName} is not found in the list.);
    }
}

function handleOperations(subject) {
    while (true) {
        let operation = prompt(
            "Select an operation:\n(A) Enroll\n(B) Unenroll\n(C) Select Another Subject\n(D) Exit"
        ).toUpperCase();

        if (operation === "A") {
            enrollStudent(subject);
        } else if (operation === "B") {
            unenrollStudent(subject);
        } else if (operation === "C") {
            return; // Go back to subject selection
        } else if (operation === "D") {
            console.log("Final Enrollment List:");
            console.log("DSA:", DSA.join(", ") || "No students enrolled");
            console.log("WebDev:", WebDev.join(", ") || "No students enrolled");
            return; // Exit program
        } else {
            console.log("Invalid choice. Try again.");
        }
    }
}

while (true) {
    let subjectChoice = prompt(
        "Select a subject:\n(A) DSA\n(B) WebDev\n(C) Exit"
    ).toUpperCase();

    if (subjectChoice === "A") {
        handleOperations(DSA);
    } else if (subjectChoice === "B") {
        handleOperations(WebDev);
    } else if (subjectChoice === "C") {
        console.log("Exiting program...");
        break;
    } else {
        console.log("Invalid choice. Try again.");
    }
}
