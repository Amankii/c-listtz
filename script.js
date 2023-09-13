document.addEventListener('DOMContentLoaded', ()=> {

    const submit = document.querySelector('#submit');
    const text = document.querySelector('#text');
 
    submit.disabled = true;

    text.onkeyup = ()=> {
        if(text.value.length > 0){
            submit.disabled = false;
        }else{
            submit.disabled = true;
        }
    };

    document.querySelector('form').onsubmit = ()=> {

        const li = document.createElement('li');

        li.innerHTML = text.value;

        document.querySelector('ol').append(li);

        text.value = '';
        submit.disabled = true;
        return false;

    }; 

});