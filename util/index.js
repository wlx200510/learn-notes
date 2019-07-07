/**
 * 集合一些常用的短小精悍的js工具函数
 */
// 生成随机id 10位
const ranId = Math.random().toString(36).substring(2, 12)

// 日历，创建过去7天的数据
const calArr = [...Array(7).keys()].map(days => new Date(Date.now() - 86400000 * days))

// 获取URL查询参数
var q = {}
location.search.replace(/([^?&=]+)=([^&]+)/g, (_, k, v) => q[k] = v)
var urlParams = new URLSearchParams(window.location.search)
// urlParams.has  urlParams.get  urlParams.append  urlParams.toString

// 数组快速去重
const noRepeat = (arr) => [...new Set(arr)]

// 数组伪混淆
const disorder = (arr) => arr.slice().sort(() => Math.random() - 0.5)

// 生成随机十六进制代码
const color = '#' + Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, '0')

//创建特定大小的数组
const generateArr = (n) => [...Array(n).keys]

//快速过滤falsy值
const filterFalse = (arr) => arr.filter(Boolean)

//创建干净的空对象(用于dict用途)
const dict = Object.create(null) // 原型链设置为null

//解构实现对象合并
const person = { name: 'karl', gender: 'Male' }
const tools = { computer: 'Mac', editor: 'vscode' }

const summary = { ...person, ...tools }

//如何用默认参数实现不传参报错
const isRequired = () => { throw new Error('param should not empty') }
const hello = (name = isRequired()) => { console.log(`hello ${name}`) }

//使用对象取值而存在脏数据时不报错
const deepPick = (path, field) => {
  const [first, ...remain] = path.split('.')
  return remain.length > 0 ? deepPick(remain.join('.'), field[first]) : field[first]
}

//自定义字符串截断
function curStr(str, len) {
  let charCode = -1, strLength = 0, curStr = ''
  for (let i = 0; i < str.length; i++) {
    charCode = str.charCodeAt(i)
    if (charCode >= 0 && charCode <= 128) {
      strLength += 1
    } else {
      strLength += 2 // 汉字占两个长度
    }
    if (strLength > len) {
      return curStr + '...'
    }
    curStr = curStr.concat(str[i])
  }
  return curStr
}
