const clock = document.querySelector('#clock')


setInterval(() => {
    const date = new Date()
    // console.log(date.toLocaleString());
    clock.innerHTML = `${date.toLocaleTimeString()}`
    
}, 1000);