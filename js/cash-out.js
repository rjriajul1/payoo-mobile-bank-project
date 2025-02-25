document.getElementById('btn-withdraw-money')
.addEventListener('click',function(event){
    event.preventDefault();
    const agentNumber=document.getElementById('agent-number').value;

    const cashoutPinNumber = document.getElementById('cashout-pin-number').value;
  
    const convertPinNumber =parseInt(cashoutPinNumber);
    

    const withdrawAmount=document.getElementById('withdraw-amount').value;
    const convertWithdrawAmount=parseFloat(withdrawAmount);

    const mainBalance =document.getElementById('main-balance').innerText;
    const mainBalanceConvert=parseFloat(mainBalance) 
   
    if(agentNumber.length === 11){
        if(convertPinNumber === 1234){
            const sum = mainBalanceConvert - convertWithdrawAmount;
            document.getElementById('main-balance').innerText=sum;
        }
        else{
            alert('please need valid pin number')
        }
    }
    else{
        alert('please need valid number')
    }
})
