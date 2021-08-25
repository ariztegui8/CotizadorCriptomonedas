import React from 'react';
import styled from '@emotion/styled';

const MensajeError = styled.p`
    color: #842029;
    background-color: #f8d7da;
    border-color: #f5c2c7;
    padding: 15px;
    width: 80%;
    margin-bottom: 20px;
    border-radius: 4px;

`

const Error = ({mensaje}) => {
    return (
        <MensajeError>
            {mensaje}
        </MensajeError>
    )
}

export default Error
