import React, { useEffect, useState } from "react";


const useInput = (InitialValue, validations) => {
    const [value, SetValue] = useState(InitialValue)
    const [isDirty, SetDirty] = useState(false)
    const valid = useValidation(value,validations)

    const onChange = (e) =>{
        SetValue(e.target.value)
    }

    const onBlur = (e) =>{
        SetDirty(true)
    }

    return {  
        value,
        onChange,
        onBlur,
        isDirty,
        ...valid,
    } 

};

const useValidation = (value, validations) => {
    const[isEmpty,SetEmpty] = useState(true)

    useEffect(()=>{
        for (const validation in validations) {
            switch(validation){
                case 'isEmpty':
                    value ? SetEmpty(false) : SetEmpty(true)
                    break;
            }
        }
    },[value])
    return {isEmpty }
}

export {useInput};