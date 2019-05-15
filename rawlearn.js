function instanceOf(L, R) {
    var O = R.protoType,
        L = L.__proto__ // 取L的隐式原型
    while(true) {
        if (L === null) {
            return false
        }
        if (O === L) {
            return true
        }
        L = L.__proto__
    }
}