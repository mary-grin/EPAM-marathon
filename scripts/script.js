const iconMenu = document.querySelector('.menu_icon');
const menuBody = document.querySelector('.header-nav');

if (iconMenu) {
    iconMenu.addEventListener('click', function(e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form');
    form.addEventListener('submit', formSend);

    function formSend(e) {
        e.preventDefault();

        let error = formValidate(form);

        if(error > 0) {
            alert('Please input all fields of form');
        } else if(error === 0) {
            form.submit();
            form.reset();
        }
    }

    function formValidate(form) {
        let error = 0;
        let formReq = document.querySelectorAll('.req');
        
        for(let i = 0; i < formReq.length; i++) {
            const input = formReq[i];
            formRemoveError(input);

            if(input.classList.contains('email')) {
                if(validateEmail(input)) {
                    formAddError(input);
                    error++;
                }
            } else if(input.classList.contains('phone')) {
                if(!validatePhone(input)) {
                    formAddError(input);
                    error++;
                }
            } else if(input.value === '') {
                formAddError(input);
                error++;
            }
        }
        return error;
    }
    function formAddError(input) {
        input.parentElement.classList.add('_error');
        input.classList.add('_error');
    }
    function formRemoveError(input) {
        input.parentElement.classList.remove('_error');
        input.classList.remove('_error');
    }
    function validateEmail (input) {
        return !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(input.value);
    }
    function validatePhone (input) {
        return input.value.length === 10;
    }
});

document.addEventListener('click', (e) => {
    const id = e.target?.dataset?.id || null;
    const button = document.getElementById(`btn_${id}`);
    console.log('yes');
    if(id) {
        if(button.classList.contains('done')) {
            console.log('done');
            fetch(`/done/${id}`, {
                method: 'POST',
            }).then(() => {
                window.location.reload();
            });
        } else if(button.classList.contains('in_process')) {
            console.log('in_process');
            fetch(`/in_process/${id}`, {
                method: 'POST',
            }).then(() => {
                window.location.reload();
            });
        } else if(button.classList.contains('delete')) {
            console.log('delete');
            fetch(`/check/${id}`, {
                method: 'DELETE',
            }).then(() => {
                window.location.reload();
            });
        } else {
            console.log('Ты лох');
        }
    }
});




