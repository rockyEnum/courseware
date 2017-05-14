var obj = {name:'xx'};
function getName() {
    console.log(obj.name);
}

module.exports = obj; //导出模块 导出哪些东西在引用的地方只能用这些东西
//默认情况下