import React from 'react'
import { FormGroup, FormControl, ControlLabel, HelpBlock } from 'react-bootstrap'
import PropTypes from 'prop-types'

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

TextareaInput.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string.isRequired,
    error: PropTypes.string
}

export default TextareaInput