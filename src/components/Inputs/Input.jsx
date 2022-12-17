import React, {useState} from "react";
import './input.css'

function Input(props) {
    const [item, setItem] = useState({
        itemtype:'',
        model:'',
        employee:''

    })

  return (
    <div className="assets__input">
      <span>
        <p>{props.title}</p>
      </span>
      <form  onSubmit={e => onSubmit(e)}>
      <input type="text" placeholder={props.placeholder}
        value={item.value}
        name={item.name}
        onChange={e => onChange(e)}
      />
      </form>
    </div>
  );
}

export default Input;
