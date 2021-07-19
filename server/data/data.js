let casual = require('casual')
const MAX_RECORDS = 2000;

function dataList(){
  const list =[];
  for(let i=0; i<MAX_RECORDS; i++){
      list.push({
        name: casual.name,
        addr: casual.address
      })
    }
    return list;
}

function getName(){
  return casual.name;
}

module.exports = {dataList, getName}