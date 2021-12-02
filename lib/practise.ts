var students = ['Naaraf', 'Anjum', 'Rafsan', 'Zaraz', 'Arian', 'Ashmit', 'BAyaan'];

const printValueRandomlyArray = (arr: (number | string)[]): void => {
  console.log('\n-----------------------------------------\n');
  var before = [];
  for (let i = 0; i < arr.length; i++) {
    let x = arr[Math.floor(Math.random() * arr.length)];
    if (!before.includes(x)) {
      console.log(`${i + 1} ${x}`);
      before.push(x);
    } else {
      i--;
    }
  }
  console.log('-----------------------------------------\n');
};

const oppositeSort = (arr: any[]): any[] => {
  let ret: any[] = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    ret.push(arr[i]);
  }
  return ret;
};
const shuffleArray = (arr: any[]): any[] => {
  let temp: number[] = [];
  let suffledArray: any[] = [];
  for (let i = 0; i < arr.length; i++) {
    let randomIndex = Math.floor(Math.random() * arr.length);
    if (temp.includes(randomIndex)) {
      i--;
    } else {
      suffledArray.push(arr[randomIndex]);
      temp.push(randomIndex);
    }
  }
  return suffledArray;
};
// printValueRandomlyArray(students);
console.log(shuffleArray(['1', { name: 'Rafsan' }, ['3', '4'], '5', '56']));
