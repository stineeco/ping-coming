const input = document.getElementById('input');
const button =document.getElementById('btn');
const error_msg = document.querySelector('.error_msg');
const thanks = document.querySelector('.thanks');
const ping = document.querySelector('.ping')






button.addEventListener("click", function(){
    if(input.value.length ===0){
        input.style.border='1px solid hsl(354, 100%, 66%)'
        error_msg.style.display='flex'
        document.getElementById('input').placeholder = "example@email/com"
    }else if (!input.value.match((/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/))){
        input.style.border='1px solid hsl(354, 100%, 66%)'
        error_msg.style.display='flex'
        document.getElementById('input').placeholder = "example@email/com"
    }else{
         ping.style.display='none';
         thanks.style.display='flex';
    }

})


input.addEventListener("keypress", function(event){
    if(input.value.length ===0 && event.keyCode===13){
        input.style.border='1px solid hsl(354, 100%, 66%)'
        error_msg.style.display='flex'
        document.getElementById('input').placeholder = "example@email/com"
    }else if (!input.value.match((/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) && event.keyCode===13){
        input.style.border='1px solid hsl(354, 100%, 66%)'
        error_msg.style.display='flex'
        document.getElementById('input').placeholder = "example@email/com"
    }else if (event.keyCode===13){
        ping.style.display='none';
        thanks.style.display='flex';
    }
    
})


