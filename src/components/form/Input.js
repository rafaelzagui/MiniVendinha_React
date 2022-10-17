import styles from './input.module.css'

function Input (type,text,name,placeholder,handleOnChange, value){

    return(
        <div classname = {styles.form_control}>
            <label htmlfor={name}>{text}:</label>
            <input type={type} name={name} id={name} placeholder ={placeholder} onChange={handleOnChange} ></input>
        </div>
    )
}

export default Input