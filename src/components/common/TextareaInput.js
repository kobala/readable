import React from 'react'
import { FormGroup, FormControl, ControlLabel, HelpBlock } from 'react-bootstrap'

function TextareaInput ({ name, label, onChange, placeholder, value, error }) {
    return (
        <FormGroup
            controlId={name}
            validationState={error && 'error'}
        >
            <ControlLabel>{label}</ControlLabel>
            <FormControl
                componentClass="textarea"
                type="text"
                name={name}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
            />
            <FormControl.Feedback />
            { error && <HelpBlock>{error}</HelpBlock>}
        </FormGroup>
    )
}

export default TextareaInput