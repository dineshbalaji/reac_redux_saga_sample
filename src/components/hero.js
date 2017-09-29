import React from 'react';

export let Hero = ({person, onSelect}) => {
  
  
  return (<li>
    <span>{person.id}</span> : <span onClick={() => onSelect(person)}>{person.name}</span>
  </li>);
}
