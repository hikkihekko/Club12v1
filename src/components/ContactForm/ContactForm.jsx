import React,{useState} from 'react';
import './ContactForm.css';
import {useInput} from '../ContactForm/hooks/useInput';

function ContactForm(){
    const email = useInput('',{isEmpty: true});
    const name = useInput('',{isEmpty: true});
    
    const [submitText, setSubmitText] = useState("Отправить");

    const handleSubmit = (e) => {
      e.preventDefault();
      setSubmitText("Все отправлено!");
      let data = new FormData(e.target);
      fetch('https://script.google.com/macros/s/AKfycbyo--o-91lCYr0I8FZSxDhy5yx_U4HIzAOY8xYzrQtiaHfLsRT0bExTYu8XMT6Lz0ywhQ/exec', {
        method: "POST",
        body: data
      })
        .then(res => res.text())
        .then(data => {
          document.querySelector("#msg").innerHTML = data;
          setSubmitText("Отправить");
        });
    };


    return(
        <div className="input-form-container">
            <div className='input-form-card'>
                <div className="input-form-image">
                    <h2 className='input-form-header'>Наш менеджер подберет Вам лучшие варианты</h2>
                    <p className='input-form-paragraph'>Для этого оставьте, пожалуйста, Ваши контактные данные</p>
                </div>
                <div className="input-form">
                    <h1 className='success' id="msg"></h1>
                    <div className="input-error-container">
                        {(email.isDirty && email.isEmpty) && <div className="input-error"> Поле не может быть пустым!</div>}
                        {(name.isDirty && name.isEmpty) && <div className="input-error"> Пожалуйска укажите имя !</div>}
                    </div>
                    <form className="input-container" onSubmit={handleSubmit}>
                        <input type="text" name="name" onChange={ e => email.onChange(e)} onBlur={e => email.onBlur(e)} value={email.value} placeholder='Name' className="input" /><br/>
                        <input type="email" name="email" onChange={ e => name.onChange(e)} onBlur={e => name.onBlur(e)} value={name.value} placeholder='Email' className="input" /><br/>
                        <input type="tel" name="phone" placeholder='Phone' className="input" /><br/>
                        <textarea type="text" name="message" placeholder='Your answer' className="input input-message" /><br/>
                        <button type="submit" className='send-value-button ' id='sub' >{submitText}</button>
                    </form>
                </div>
            </div>
        </div>
    )
};


export default ContactForm; 