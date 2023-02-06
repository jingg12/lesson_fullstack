// module 模块 exports 向外输出
// 递归 值的类型是否是对象
// 分离下数组和对象的字面量 局限性  
// 手动克隆 for key in
module.exports = function clone(target) {
    if (typeof target === 'object') {
        let cloneTarget = Array.isArray(target) ? [] : {};
        for (const key in target) {
            cloneTarget[key] = clone(target[key]);
        }
        return cloneTarget;
    } else {
        return target;
    }
};

