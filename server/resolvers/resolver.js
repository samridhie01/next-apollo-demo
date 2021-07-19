const data = require('../data/data');

const listOfUsers = data.dataList()
const resolver = {
  Query:{
    name: ()=>data.getName(),
    allUsers: (_, args)=>{
      const totalCount=listOfUsers.length
      const users = args.first===undefined? listOfUsers.slice(args.offset) : listOfUsers.slice(args.offset, args.offset+args.first);
      const result = {
        users,
        totalCount
      }
      return result;
  }
}
}

module.exports = {resolver}