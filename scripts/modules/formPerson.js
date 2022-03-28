import createElement from "./crearteElement.js";

const createFormPerson = (n) => {
    const form = createElement('form', {
            className: 'person',
    });

    const title = createElement('h2',{
        className: 'person__title',
        textContent: `Пассажир #${n+1}`,
    })
    const fieldName = createElement('div', {
        className: 'field',
    })


    const labelName = createElement('label', {
        className: 'field__label',
        for: `name${n}`,
        textContent: 'ФИО',
    });

    const inputName = createElement('input', {
        className: 'field__input',
        id: `name${n}`,
        name: 'name',
        type: 'text',
        placeholder: 'Введите Ваше ФИО',
        required: true,
    });

    const fieldName2 = createElement('div', {
        className: 'field',
    })


    const labelTicket = createElement('label', {
        className: 'field__label',
        textContent: 'Номер билета (10 цифр)',
    });

    const inputTicket = createElement('input', {
        className: 'field__input',
        id: 'ticket0',
        name: 'ticket',
        type: 'text',
        placeholder: 'Номер билета',
        required: true,
        minLength: '10',
        maxLength: '10', 
    });
    

        

/* <div class="field">
<label class="field__label">Номер билета (10 цифр)</label>
<input class="field__input" id="ticket0" name="ticket" type="text" placeholder="Номер билета" required="" minlength="10" maxlength="10">
</div> */

    // конец дз



    fieldName.append(labelName, inputName, labelTicket, inputTicket);

    const button = createElement('button', {
        className: 'btn-confirm',
        type: 'submit',
        textContent: 'Подтвердить',
    })
    form.append(title, fieldName, button);

    return form;
};



const getFormPerson = (count) => {
    const forms = [];
    if (count > 6) {count = 6};
    for (let i = 0; i < count; i++) {
        forms.push(createFormPerson(i));
    }
    return forms;
};

export default getFormPerson;