function zipList(list1, list2) {
  const temp = [];
  for (let i = 0; i < list1.length; i++) {
    temp.push(list1[i]);
    temp.push(list2[i]);
  }
  return temp;
}

function zipListTheSimpleWay(list1, list2) {
  return _.flatten(_.zip(list1, list2));
}

const sampleList1 = ['a', 'b', 'c'];
const sampleList2 = [1, 2, 3];
console.log(zipList(sampleList1, sampleList2));
console.log(zipListTheSimpleWay(sampleList1, sampleList2));
