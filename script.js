

function computeSavings(){

    //grab payment amount
    paymentAmount = parseFloat(document.getElementById('payment-amount').value);

    // 50/30/20 scheme

    //for needs
    document.getElementById('need-amount').innerText = (paymentAmount * .5).toFixed(2); 

    //for wants
    document.getElementById('want-amount').innerText = (paymentAmount * .3).toFixed(2); 

    //to save
    document.getElementById('save-amount').innerText = (paymentAmount * .2).toFixed(2); 

    //clear input field
    document.getElementById('payment-amount').value = '';
}


window.onload = function(){
    document.getElementById('enter-button').addEventListener('click', computeSavings);
};