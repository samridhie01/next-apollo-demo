


module.exports = function dataList(){
    const list =[];
    for(let i=0; i<2000; i++){
        list.push({
          name: casual.name,
          addr: casual.address
        })
      }
      console.log("HERE",list)
      return list;
}