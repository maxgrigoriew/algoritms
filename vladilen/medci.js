// сгрупировать по первому символу поля name  
const specializations = [
  {
    'id': 5162,
    'name': 'CLINIC-WithTwoDoctors(AT)-spec',
    'ageLevel': 3,
    'descr': null,
  },
  {
    'id': 1177,
    'name': 'Дерматолог в KDC',
    'ageLevel': 2,
    'descr': null,
  },
  { 'id': 5166, 'name': 'Иглоукалывание', 'ageLevel': 3, 'descr': null },
  { 'id': 1185, 'name': 'ЛОР', 'ageLevel': 2, 'descr': null },
  { 'id': 5454, 'name': 'Окулист', 'ageLevel': 3, 'descr': null },
  { 'id': 5173, 'name': 'Психиатрия в KDC', 'ageLevel': 3, 'descr': null }, {
    'id': 5177,
    'name': 'Семейный врач',
    'ageLevel': 3,
    'descr': null,
  },
  { 'id': 5283, 'name': 'Специальность-Стрим', 'ageLevel': 3, 'descr': null }, {
    'id': 1197,
    'name': 'Терапевт',
    'ageLevel': 3,
    'descr': null,
  },
  { 'id': 5182, 'name': 'Тестирование цены', 'ageLevel': 2, 'descr': null },
  { 'id': 5186, 'name': 'Ұ Автотесты. DoctorWithConnectPhoneSpeciality', 'ageLevel': 3, 'descr': null },
  { 'id': 5188, 'name': 'Ұ Автотесты. TestOfflineConferencePatientArrivee', 'ageLevel': 3, 'descr': null },
  { 'id': 5259, 'name': 'Ұ Автотесты. Только взрослые', 'ageLevel': 2, 'descr': null },
]


function goup(arr) {
  const obj = new Map()

  for(let item of arr) {
    const firstLetter = item.name[0];

    if (!obj.has(firstLetter))
      obj.set(firstLetter, [])

    obj.get(firstLetter).push(item)

  }

  return Array.from(obj, ([key, value]) => ({name: key, values: value}))
}

const res = goup(specializations)

console.log(res)






function groupByFirstChar(arr) {
  return Object.values(
    arr.reduce((acc, item) => {
      const firstLetter = item.name[0];
      (acc[firstLetter] ??= []).push(item)
      return acc
    }, {}),
  ).map(it => ({
    name: it[0].name[0],
      it
  }))
}


// function groupByFirstChar(arr) {
//   const obj = arr.reduce((acc, item) => {
//     const firstLetter = item.name[0]
//     if (!acc[firstLetter])
//       acc[firstLetter] = []
//
//     acc[firstLetter].push(item)
//
//     return acc
//
//   }, {})
//
// return Object.entries(obj).map(([key, values]) => {
//   return {
//     name: key,
//     values
//   }
// })
// }
// console.log(groupByFirstChar(specializations))

// вывод должен быть в таком формате: 
// [
//   {"name":"C",
//      "values":[
//         {"id":5177,"name":"Семейный врач","ageLevel":3,"descr":null},
//         {"id":5283,"name":"Специальность-Стрим","ageLevel":3,"descr":null}
//     ]
//    },
//     {"name":"Д","values":[{"name":"Дерматолог в KDC"}
//]
//}
//]