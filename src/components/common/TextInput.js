import React from 'react'
import { FormGroup, FormControl, ControlLabel, HelpBlock } from 'react-bootstrap'

function TextInput ({ name, label, onChange, placeholder, value, error }) {
    return (
        <FormGroup
            controlId={name}
            validationState={error && 'error'}
        >
            <ControlLabel>{label}</ControlLabel>
            <FormControl
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

export default TextInput