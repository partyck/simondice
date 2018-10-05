var clientId = '123091238';

function postIt()   {
    form = document.createElement('form');
    form.setAttribute('method', 'POST');
    form.setAttribute('action', '/match');
    myvar = document.createElement('input');
    myvar.setAttribute('name', 'userId');
    myvar.setAttribute('type', 'hidden');
    myvar.setAttribute('value', clientId);
    form.appendChild(myvar);
    document.body.appendChild(form);
    form.submit();   
}