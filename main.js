let inputbox = document.getElementById('type-box')
inputbox.addEventListener('keyup', function (event) {
    if (event.key == 'Enter') {  
        addItem(this.value)
        this.value = ''
    }
})

function addItem(item) {
    let ul = document.querySelector('ul')
    let li = document.createElement('li')
   
    ul.appendChild(li)
    li.innerHTML = `
    <span>${item}</span>
    <i class="close fa-solid fa-xmark"></i>
    `
    li.addEventListener('click',function(){
        this.classList.toggle('toggle')
    })

    li.querySelector('.close').addEventListener('click', function () {
        li.remove()  
        saveItem()
    })
    saveItem()
}

function saveItem(){
    let data=[]
    let list=document.querySelectorAll('#to-do-box li span')
    list.forEach((li)=>{
        // data.push(li)

        data.push(li.textContent)
    })
    localStorage.setItem("item",JSON.stringify(data))
}

(
    function(){
       let getItem= JSON.parse(localStorage.getItem("item"))
       getItem.forEach(item=>addItem(item))
    }
)()