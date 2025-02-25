
document.getElementById('add-money-form').style.display='none';
const addMoneyBox=document.getElementById('add-money-box')
.addEventListener('click',function(){
 
    document.getElementById('add-money-form').style.display='block';
    document.getElementById('cashout-form').style.display='none';

    
})


const cashOutBox =document.getElementById('cashour-box')
.addEventListener('click', function(){

    document.getElementById('add-money-form').style.display='none';
    document.getElementById('cashout-form').style.display='block';

    
})