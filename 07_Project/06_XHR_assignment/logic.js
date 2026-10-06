// load profile photo and show followers
const requestURL = "https://api.github.com/users/hiteshchoudhary"
const xhr = new XMLHttpRequest()
xhr.open('GET',requestURL)
// console.log(xhr.readyState);
xhr.onreadystatechange = function () {
    console.log(xhr.readyState);            
    if(xhr.readyState === 4){
        const data = JSON.parse(this.responseText)
        // console.log(data)
        // console.log(typeof data)
        // console.log(data.avatar_url)
        const display = document.querySelector('#show')
        display.addEventListener('click', () => {
            const image = document.querySelector('img')

            if (display.innerHTML === 'Show'){
                image.src = `${data.avatar_url}`
                image.style.display = "block";
    
                document.querySelector('h1').innerHTML = `${data.name}`
                document.querySelector('p').innerHTML = `Followers : ${data.followers}`
                display.innerHTML = "Hide";
                
            } else {
                image.style.display = "none";
                document.querySelector('h1').innerHTML = "GitHub Followers"
                document.querySelector('p').innerHTML = ""
                display.innerHTML = "Show";

            }
            

        })

    }
}
xhr.send()