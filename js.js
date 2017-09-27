var tasks = []
var tasklist = ""
var list = document.querySelector("#ToDoList")

var alllist = document.getElementsByTagName("li") //取得所有li
for (var i = 0; i < alllist.length; i++) {
    var button = document.createElement("button")
    var buttonContent = document.createTextNode("我完成了!")
    button.appendChild(buttonContent);
    alllist[i].appendChild(button);
}

button.addEventListener('click', function (e) {
    e.target.parentElement.classList.toggle('finished')
})

function add() {
    var input = document.querySelector("#task").value
    var a = document.createElement("li")
    var content = document.createTextNode(input)
    a.setAttribute("id", input)
    a.appendChild(content)
    if (input === '') {
        alert("不要沒事做啊!")
    } else {
        list.appendChild(a)
    }
    content = "";

    var button = document.createElement("button")
    var buttonContent = document.createTextNode("我完成了!")
    button.appendChild(buttonContent)
    a.appendChild(button)

    button.addEventListener('click', function (e) {
        //console.log("123")
        e.target.parentElement.classList.toggle('finished')
    })

}

function showUnfinshed() {
    var get = document.getElementsByClassName('finished')
    for (var i = 0; i < get.length; i++) {
        get[i].style.display = 'none';
    }
}

function showAll() {
    var get = document.getElementsByTagName("li")
    for (var i = 0; i < get.length; i++) {
        get[i].style.display = '';
    }
}

function showFinshed(){
    var get = document.getElementsByTagName("li")
    for (var i = 0; i < get.length; i++) {
        get[i].style.display = 'none';
    }
    var b = document.getElementsByClassName('finished')
    for (var i = 0; i < b.length; i++) {
        b[i].style.display = '';
    }
}

