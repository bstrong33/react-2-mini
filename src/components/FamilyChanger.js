import React from 'react';

export default function FamilyChanger(props) {
  return (
    <select className="dropDownContainer" disabled={props.allowEdit === 'false'} onChange={event => {props.changeFamily(event.target.value)}}>
      <option value="monospace"> Monospace </option>
      <option value="arial"> Arial </option>
      <option value="courier"> Courier </option>
    </select>
  )
}