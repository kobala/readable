import React from 'react'
import { FormControl } from 'react-bootstrap'
import SelectInput from '../common/SelectInput'
import PropTypes from 'prop-types'

const FilterPane = ({ selectedSorting, keyword, onSortingChange, onKeywordChange  }) => (
    <div>
        <div className="form-inline">
            <SelectInput
                name="Sort"
                label="Sort By "
                value={selectedSorting}
                onChange={onSortingChange}
                defaultOption={{
                    text: 'Date - Newest to Oldest',
                    value: 'date_desc'
                }}
                options={[
                    {
                        text: 'Date - Oldest to Newest',
                        value: 'date_asc'
                    },
                    {
                        text: 'Vote Score - Highest to Lowest',
                        value: 'vote_desc'
                    },
                    {
                        text: 'Vote Score - Lowest to Highest',
                        value: 'vote_asc'
                    }
                ]}
            />
            &nbsp;
            <FormControl type="text" placeholder="Search" value={keyword} onChange={onKeywordChange} />
        </div>
    </div>
)

FilterPane.propTypes = {
    selectedSorting: PropTypes.string.isRequired,
    keyword: PropTypes.string.isRequired,
    onSortingChange: PropTypes.func.isRequired,
    onKeywordChange: PropTypes.func.isRequired
}

export default FilterPane