let count=0;
const value=document.querySelector("#value")
const btns=document.querySelectorAll(".btn")

btns.forEach(change)
function change(btn){
    btn.addEventListener('click',changecount)
}
function changecount(e){
    var styles=e.currentTarget.classList
    if(styles.contains('decrease')){
        count--
    }
    else if(styles.contains('reset')){
        count=0
    }
    else if(styles.contains('increase')){
        count++
    }
    value.innerText=count
    if(count>0)
    value.style.color='green'
    else if(count<0)
    value.style.color='red'
    else
    value.style.color='black'
}