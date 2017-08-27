import React from 'react'
import { FormGroup, FormControl, ControlLabel, HelpBlock } from 'react-bootstrap'
import PropTypes from 'prop-types'

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
                <option value={defaultOption.value}>{defaultOption.text}</option>
                {options.map(option => {
                    return <option  key={option.value} value={option.value}>{option.text}</option>
                })}
            </FormControl>
            <FormControl.Feedback />
            { error && <HelpBlock>{error}</HelpBlock>}
        </FormGroup>
    )
}

SelectInput.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    defaultOption: PropTypes.shape({
        value: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
    }),
    value: PropTypes.string.isRequired,
    error: PropTypes.string,
    options: PropTypes.array.isRequired,
}

export default SelectInput