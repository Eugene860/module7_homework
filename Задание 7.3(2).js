function stringInObj(obj, string) {
     let result = (string in obj);
  console.log(result)}
stringInObj({word : 1}, 'word')