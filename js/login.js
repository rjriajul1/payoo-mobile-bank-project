const btnLogin = document.getElementById('btn-login')
    .addEventListener('click', function(event){
        event.preventDefault()
        const acountNumber =document.getElementById('acount-number').value;
    
         const pinNumber = document.getElementById('pin-number').value;
         const convertPinNumber =parseInt(pinNumber);
         if(acountNumber.length === 11){
               if(convertPinNumber === 1234){
                window.location.href="./main.html"

               }else{
                alert('please give me a valid pin')
               }
         }
         else{
            alert('please need valid number')
         }
    })