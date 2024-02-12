const content = document.getElementById('content')
const date = document.getElementById('date')
const time = document.getElementById('time')
const addedBtn = document.getElementById('addedBtn')
const deleteBtn = document.getElementById('deleteBtn')
const list = document.getElementById('list')

const listContent = []


function render () {

    //渲染頁面的list
    let htmlStr = ''

    listContent.forEach(function (item) {
        htmlStr = htmlStr + `
        <div class="item">
            <div>
                <p>內容：${item.content}</p>
                <p>時間：${item.date} ${item.time}</p>
            </div>
        </div>
        `
    })

    list.innerHTML = htmlStr
}

addedBtn.addEventListener('click' , function(){
 
    listContent.unshift({
        content:  content.value,
        date: date.value,
        time: time.value
    })

    render()
})

 



deleteBtn.addEventListener('click',function () {
    listContent.shift()

    render()
})