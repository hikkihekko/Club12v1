import React from 'react';
import './ContactForm.css';
import { useEffect } from 'react';

function ContactForm() {
  useEffect(() => {
    const script = document.createElement('script');
    script.innerHTML = `!function(a,m,o,c,r,m){a[o+c]=a[o+c]{setMeta:function(p){this.params=(this.params[]).concat([p])}},a[o+r]=a[o+r]function(f){a[o+r].f=(a[o+r].f[]).concat([f])},a[o+r]({id:"1113646",hash:"2e1fc79386799a141ace10a4157586aa",locale:"ru"}),a[o+m]=a[o+m]function(f,k){a[o+m].f=(a[o+m].f[]).concat([[f,k]])}}(window,0,"amo_forms_","params","load","loaded");`;
    document.getElementById('amoforms_embed_1113646').appendChild(script);

    const amoFormScript = document.createElement('script');
    amoFormScript.src = 'https://forms.amocrm.ru/forms/assets/js/amoforms.js?1680696301';
    amoFormScript.async = true;
    amoFormScript.charset = 'utf-8';
    document.getElementById('amoforms_embed_1113646').appendChild(amoFormScript);
  }, []);

  return (
    <div className="input-form-container">
      <div className='input-form-card'>
        <div className="input-form-image">
          <h2 className='input-form-header'>Наш менеджер подберет Вам лучшие варианты</h2>
          <p className='input-form-paragraph'>Для этого оставьте, пожалуйста, Ваши контактные данные</p>
        </div>
        <div className="input-form">
          <div className="input-container">
            <div id="amoforms_embed_1113646"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
