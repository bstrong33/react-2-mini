import React from 'react';

export default function SizeChanger(props) {
  return (
    <select className="dropDownContainer" disabled={props.allowEdit === 'false'} onChange={event => {props.changeSize(event.target.value)}}>
      <option value="12"> 12 </option>
      <option value="13"> 13 </option>
      <option value="14"> 14 </option>
    </select>
  )
}