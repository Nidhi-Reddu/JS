const btn = document.querySelectorAll(".button")
const body = document.querySelector("body")
// console.log(btn);

btn.forEach(function (b) {
//  console.log(b)  
    b.addEventListener('click', function(e){
        console.log(e)
        console.log(e.target)                       // from where the event come from
        switch (e.target.id) {
            case "white":
                body.style.backgroundColor = e.target.id
                break;
            case "blue":
                body.style.backgroundColor = e.target.id
                break;
            case "yellow":
                body.style.backgroundColor = e.target.id
                break;
            case "grey":
                body.style.backgroundColor = e.target.id
                break;
        
            default:
                break;
        }
    })
});