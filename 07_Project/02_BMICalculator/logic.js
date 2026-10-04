const form = document.querySelector('form')

form.addEventListener('submit', function(e){
    e.preventDefault();
    // want to extract value after clicking submit
    const height = parseInt(document.querySelector("#height").value)
    const weight = parseInt(document.querySelector("#weight").value)
    const results = document.querySelector('#results') 

    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML= `Please give a valid height !`
    }
    else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = `Please give a valid weight !`
    } else {
        const res =  ((weight/((height*height)/10000)).toFixed(2))
        switch (res){
            case res < 18.6 :
                results.innerHTML = `BMI is : ${res}, Underweight `
                break;
            case res > 24.9 :
                results.innerHTML = `BMI is : ${res}, Overweight`
                break;
               
            default:
                results.innerHTML = `BMI is : ${res}, Normal`
                break;
        }
    }

})
