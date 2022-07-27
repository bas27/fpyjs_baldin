function simple(n) {
  let listDef = [];
  iter: for (let i = 2; listDef.length < n; i++) {
    for (let num = 2; num <= Math.sqrt(i); num++) {
      if (i % num === 0) {
        // console.log("И все таки оно делится!");
        continue iter;
      }
    }

    let count = listDef.length++;
    listDef[count] = i;
    // console.log(i);
  }
  return listDef;
}

console.time()
console.log(simple(process.argv[2]));
console.timeEnd()