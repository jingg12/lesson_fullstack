var count = 1;
var container = document.getElementById('container');

function getUserAction() {
    container.innerHTML = count++;
};
    //DOM 0 级
container.onmousemove = getUserAction;