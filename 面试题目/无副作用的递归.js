// 实现字符串的对象深度递归
const dan = {
    type: "person",
    data: {
      gender: "male",
      info: {
        id: 22,
        fullname: {
          first: "Dan",
          last: "Deacon"
        }
      }
    }
  }
  /* 实现deepPick函数，要求使用递归，且函数无任何副作用 */
  const deepPick = (path, field) => {
    const [first, ...remain] = path.split('.')
    return remain.length > 0 ? deepPick(remain.join('.'), field[first]) : field[first]
  }
  
  console.log(deepPick("type", dan))
  console.log(deepPick("data.info.fullname.first", dan))