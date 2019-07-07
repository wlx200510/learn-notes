// 函数式的时间处理函数

const compose = (...fns) => 
  (arg) =>
    fns.reduce(
      (composed, f) => f(composed),
      arg
    )

const oneSecond = () => 1000
const getCurrentTime = () => new Date()
const clear = () => console.clear()
const log = message => console.log(message)

const abstractClockTime = date =>
  ({
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds()
  })

const appenddAMPM = clockTime =>
  ({
    ...clockTime,
    ampm: (clockTime.hours >= 12) ? 'PM' : 'AM'
  })

const civilianHours = clockTime =>
  ({
    ...clockTime,
    hours: (clockTime.hours > 12) ?
      clockTime.hours - 12 : clockTime.hours
  })

const convertToCivilianTime = clockTime =>
  compose(
    appenddAMPM,
    civilianHours
  )(clockTime)

const prependZero = key => clockTime =>
  ({
    ...clockTime,
    [key]: (clockTime[key] < 10) ?
      "0" + clockTime[key] : clockTime[key]
  })

const doubleDigits = civilianTime =>
  compose(
    prependZero("hours"),
    prependZero('minutes'),
    prependZero('seconds')
  )(civilianTime)

const formatClock = format =>
    time => 
      format.replace('hh', time.hours)
        .replace('mm', time.minutes)
        .replace('ss', time.seconds)
        .replace('tt', time.ampm)

const startTicking = () =>
  setInterval(
    compose(
      clear,
      getCurrentTime,             // 获取当前的时间date对象
      abstractClockTime,          // 时间对象转换为自定义对象
      convertToCivilianTime,      // 转换为 pm am
      doubleDigits,               // 加上双精度 时分秒补零
      formatClock("hh:mm:ss tt"), // 设置格式
      log
    ),
    oneSecond()
  )

  startTicking()

  // 注意体会：声明式变量的用法和函数组合式编程思想