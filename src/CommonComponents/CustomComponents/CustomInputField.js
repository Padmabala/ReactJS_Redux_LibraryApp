import React from 'react';
import '../../App.css';

const CustomInputField=({
    customInputLabel="",
    customInputValue="",
    onFieldChange=null,
    customPlaceHolder="",
    targetElement="",
    type=""

})=>{
    const changeHandler=(event)=>{
        onFieldChange(event,targetElement)
    };
    
        return(
            <div className="form-group login">
                <label htmlFor={targetElement}>{customInputLabel}</label>
                <input 
                    type={type} 
                    className="form-control login"
                    id={targetElement}
                    placeholder={customPlaceHolder}
                    value={customInputValue}
                    required={true}
                    onChange={changeHandler}
                ></input>
            </div>
        );
    }

export default CustomInputField;