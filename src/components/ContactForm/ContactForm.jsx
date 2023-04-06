import React from 'react';
import './ContactForm.css';
import { useInput } from "../ContactForm/hooks/useInput";
import { handleSubmit } from "../ContactForm/handleSubmit";

function ContactForm(){
    const email = useInput('',{isEmpty: true});
    const name = useInput('',{isEmpty: true});

    return(
        <div className="input-form-container">
            <div className='input-form-card'>
                <div className="input-form-image">
                    <h2 className='input-form-header'>Наш менеджер подберет Вам лучшие варианты</h2>
                    <p className='input-form-paragraph'>Для этого оставьте, пожалуйста, Ваши контактные данные</p>
                </div>
                <div className="input-form">
                    <div className="input-error-container">
                        {(email.isDirty && email.isEmpty) && <div className="input-error"> Поле не может быть пустым!</div>}
                        {(name.isDirty && name.isEmpty) && <div className="input-error"> Пожалуйска укажите имя !</div>}
                    </div>
                    <form className="input-container" onSubmit={handleSubmit}>
                        <input type="text" name="name" onChange={ e => email.onChange(e)} onBlur={e => email.onBlur(e)} value={email.value} placeholder='Name' className="input" /><br/>
                        <input type="email" name="email" onChange={ e => name.onChange(e)} onBlur={e => name.onBlur(e)} value={name.value} placeholder='Email' className="input" /><br/>
                        <input type="tel" name="phone" placeholder='Phone' className="input" /><br/>
                        <textarea type="text" name="message" placeholder='Your answer' className="input input-message" /><br/>
                        <input type="submit" id="sub" className='send-value-button ' value="Submit" />
                    </form>
                </div>
            </div>
        </div>
    )
};

export default ContactForm;

