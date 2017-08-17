import React from 'react'
import { FormGroup, FormControl, ControlLabel, HelpBlock } from 'react-bootstrap'

const SelectInput = ({name, label, onChange, defaultOption, value, error, options}) => {
    return (
        <FormGroup
            controlId={name}
            validationState={error && 'error'}
        >
            <ControlLabel>{label}</ControlLabel>
            <FormControl
                componentClass="select"
                name={name}
                value={value}
                onChange={onChange}
            >
                <option value="">{defaultOption}</option>
                {options.map(option => {
                    return <option  key={option.value} value={option.value}>{option.text}</option>
                })}
            </FormControl>
            <FormControl.Feedback />
            { error && <HelpBlock>{error}</HelpBlock>}
        </FormGroup>
    )
}

export default SelectInput