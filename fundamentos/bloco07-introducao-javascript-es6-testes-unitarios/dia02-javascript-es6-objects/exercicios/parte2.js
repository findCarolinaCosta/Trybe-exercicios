const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// 1
//add chave que permanece como forma de atualização
const addChaveTurno = (obj, chave, turno) => obj[chave] = turno;
console.log(addChaveTurno(lesson2, 'turno', 'manhã'));
console.log(lesson2);

// 2
const keys = (obj) => Object.keys(obj);
console.log(keys(lesson1));

// 3
const size = (obj) => Object.keys(obj).length;
console.log(size(lesson1));

// 4
const values = (obj) => Object.values(obj);
console.log(values(lesson1));


// 5
const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });
console.log(allLessons);
/*
{
  lesson1:
   { materia: 'Matemática',
     numeroEstudantes: 20,
     professor: 'Maria Clara',
     turno: 'manhã' },
  lesson2:
   { materia: 'História',
     numeroEstudantes: 20,
     professor: 'Carlos',
     turno: 'noite' },
  lesson3:
   { materia: 'Matemática',
     numeroEstudantes: 10,
     professor: 'Maria Clara',
     turno: 'noite' }
};
*/


// 6
const numberStudents = (obj) => {
  let total = 0;
  const array = Object.keys(obj);
  for (index in array) {
    total += obj[array[index]].numeroEstudantes;
  }
  return total;
}
console.log(numberStudents(allLessons));


// 7
const getValueByNumber = (obj, number) => Object.values(obj)[number];
console.log(getValueByNumber(lesson1, 0));
// Output: 'Matématica'

// 8

const verifyPair = (obj, chave, valor) => {
  const array2 = Object.entries(obj);
  let verify = false;
  for (let index in array2) {
    if (array2[index][0] === chave && array2[index][1] === valor) verify = true;
  }
  return verify;
};
console.log(verifyPair(lesson3, 'turno', 'noite'));
// Output: true,
console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
// Output: false


//Bônus
const getWatchedMath = (obj) => {
  let watchedNumber = 0;
  const objArray = Object.keys(obj);
  for (index in objArray) {
    if (obj[objArray[index]].materia === 'Matemática') {
      watchedNumber += obj[objArray[index]].numeroEstudantes;
    }
  }
  return watchedNumber;
}
console.log(getWatchedMath(allLessons));

const getProfessorInfo = (obj, name) => {
  const allLessons = [];
  let allStudent = 0;
  const array = Object.values(obj);
  for (index in array) {
    if (array[index].professor === name) {
      allLessons.push(array[index].materia)
      allStudent += array[index].numeroEstudantes;
    }
  }
  return { lesson: allLessons, estudates: allStudent };
}
const createReport = (allLessons, name) => {
  const report = {};
  report.professor = name;
  Object.assign(report, getProfessorInfo(allLessons, name));
  return report;
}
console.log(createReport(allLessons, 'Maria Clara'));
/* Output
{
  professor: 'Maria Clara',
  aulas: [ 'Matemática', 'Matemática' ],
  estudantes: 30
} */
