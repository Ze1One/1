import React from 'react';

import Button from 'react-bootstrap/Button';

const ButtonComponent = (props) => {
  const { label, buttonClick, id, btnStyle } = props;

  return (
    <Button
      variant={btnStyle}
      onClick={() => buttonClick(id)}>
        {label}
    </Button>
  );
};

export default ButtonComponent;