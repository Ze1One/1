import React from 'react';

import Button from 'react-bootstrap/Button';

const ButtonComponent = ({label, buttonClick}) => {


  return (
    <Button 
      class=" btn btn-outline-light"
      onClick={() => buttonClick()}>
      {label}
    
    </Button>

  );
};

export default ButtonComponent;