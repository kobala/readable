import React from 'react'
import { FormControl } from 'react-bootstrap'
import SelectInput from '../common/SelectInput'

const PostsFilterPane = ({ selectedSorting, keyword, onSortingChange, onKeywordChange  }) => (
    <div>
        <div className="form-inline">
            <SelectInput
                name="Sort"
                label="Sort"
                value={selectedSorting}
                onChange={onSortingChange}
                options={[
                    {
                        text: 'Vote Score - Highest to Lowest',
                        value: 'vote_desc'
                    },
                    {
                        text: 'Vote Score - Lowest to Highest',
                        value: 'vote_asc'
                    },
                    {
                        text: 'Date - Newest to Oldest',
                        value: 'date_desc'
                    },
                    {
                        text: 'Date - Oldest to Newest',
                        value: 'date_asc'
                    }
                ]}
                defaultOption="Sort By"
            />
            &nbsp;
            <FormControl type="text" placeholder="Search" value={keyword} onChange={onKeywordChange} />
        </div>
    </div>
)

export default PostsFilterPane