
// add money section start here
const btnAddMoney=document.getElementById('btn-add-money')
.addEventListener('click', function(event){
  event.preventDefault();
    const bankAcountNumber=document.getElementById('bank-acount-number').value;
    const amountAdd =document.getElementById('amount-add').value;
    const convertAmount=parseFloat(amountAdd);
    const pinNumber=document.getElementById('pin-number').value;
    const convertPin =parseInt(pinNumber);
    const mainBalance =document.getElementById('main-balance').innerText;
    const convertMainBalance = parseFloat(mainBalance);
     
    if(bankAcountNumber.length === 11){
        if(convertPin === 1234){
            const sum = convertAmount + convertMainBalance;
            document.getElementById('main-balance').innerText =sum;
           
        }else{
            alert('need correct pin code')
        }
       
    }else{
        alert('please need valid number')
    }
})

// add money section end here




