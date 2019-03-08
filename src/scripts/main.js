const students = [{
        name: "Chris Miller",
        subject: "History",
        info: "Failed last exam",
        score: 59
    },
    {
        name: "Courtney Seward",
        subject: "History",
        info: "Has completed all homework",
        score: 91
    },
    {
        name: "Garrett Ward",
        subject: "History",
        info: "Wonderful at helping other students",
        score: 88
    },
    {
        name: "John Dulaney",
        subject: "History",
        info: "Has never missed a class or exam",
        score: 92
    },
    {
        name: "Greg Lawrence",
        subject: "History",
        info: "Sub-par performance all around",
        score: 64
    },
    {
        name: "Leah Duvic",
        subject: "History",
        info: "Wonderful student",
        score: 97
    },
    {
        name: "Jesse Page",
        subject: "History",
        info: "Smokes too much. Distracting.",
        score: 76
    },
    {
        name: "Kevin Haggerty",
        subject: "History",
        info: "Falls asleep in class",
        score: 79
    },
    {
        name: "Max Wolf",
        subject: "History",
        info: "Talks too much",
        score: 83
    },
    {
        name: "Lissa Goforth",
        subject: "History",
        info: "Asks pointless, unrelated questions",
        score: 78
    },
    {
        name: "Tyler Bowman",
        subject: "History",
        info: "When was the last time he attended class?",
        score: 48
    },
    {
        name: "Ray Medrano",
        subject: "History",
        info: "Needs to contribute to in-class discussions",
        score: 95
    }
]

const studentContainer = document.querySelector("#container")

// const createStudentComponent = (name, subject, info, status ) => {
//     return `
//         <div class="student">
//             <h1 class="xx-large ${status}">${name}</h1>
//             <section class="bordered dashed section--padded">${subject}</section>
//             <aside  class="pushRight">${info}</aside>
//         </div>
//     `
// }

// for (const student of students) {
//     let studentComponent = ""
//     if (student.score >= 60) {
//         studentComponent = createStudentComponent(student.name,student.subject,student.info, "passing")
//     } else {
//         studentComponent = createStudentComponent(student.name,student.subject,student.info, "failing" )
//     }
//     studentContainer.innerHTML += studentComponent
// //}





// One Object to rule them all -
//before refactoring
// const createStudentComponent = (name, subject, info, status) => {
//     return `
//         <div class="student">
//             <h1 class="xx-large ${status}">${name}</h1>
//             <section class="bordered dashed section--padded">${subject}</section>
//             <aside  class="pushRight">${info}</aside>
//         </div>
//     `
// }
// const createStudentComponent = (obj) => {
//     if (obj.score >= 60) {
//         return `
//         <div class="student">
//             <h1 class="xx-large passing">${obj.name}</h1>
//             <section class="bordered dashed section--padded">${obj.subject}</section>
//             <aside  class="pushRight">${obj.info}</aside>
//         </div>`
//     } else {
//         return `     
//     <div class="student">
//             <h1 class="xx-large failing">${obj.name}</h1>
//             <section class="bordered dashed section--padded">${obj.subject}</section>
//             <aside  class="pushRight">${obj.info}</aside>
//         </div>
//     `
//     }
// }



/*for (const student of students) {
    let studentComponent = ""
    if (student.score >= 60) {
      // studentComponent = createStudentComponent(student.name, student.subject, student.info, "passing")
    } else {
        studentComponent = createStudentComponent(student.name, student.subject, student.info, "failing")
    }
    studentContainer.innerHTML += studentComponent
}*/

// for (const student of students) {
//     let studentComponent = "";
//     studentComponent += createStudentComponent(student);
//     studentContainer.innerHTML += studentComponent;

// }
function h1(name) {
    return `<h1 class="xx-large failing">${name}</h1>`

}

function section(subject) {
    return `<section class="bordered dashed section--padded">${subject}</section>`

}

function aside(info) {

    return `<aside class="pushRight">${info}</aside>`


}

// const createStudentComponent = (student) => `
//     <div id="student">
//         ${h1(student.name)}
//         ${section(student.subject)}
//         ${aside(student.info)}
//     </div>`





    function element(type,content,value){
        return `<${type} class="${value}">${content}</${type}>`

    }
    
    const createStudentComponent1 = (student) => `
    <div id="student">
    
        ${element("h1", student.name, "xx-large passing")}
        ${element("section", student.subject, "bordered dashed section--padded")}
        ${element("aside", student.info, "pushRight")}
    </div>
`

for (const student of students) {
    let studentComponent = ""
    if (student.score >= 60) {
       studentComponent = createStudentComponent1(student)
    } else {
        studentComponent = createStudentComponent1(student)
    }
    studentContainer.innerHTML += studentComponent
}




