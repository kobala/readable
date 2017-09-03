import React from 'react'
import { Link } from 'react-router-dom'
import DocumentTitle from 'react-document-title'

function PageNotFound () {
    return (
        <DocumentTitle title='Readable - Page not found'>
            <div className="error">
                <h1>404</h1>
                <h3>We couldn't find the page..</h3>

                <div className="error-desc">
                    Sorry, but the page you are looking for was either not found or does not exist. <br/>
                    Try refreshing the page or click the button below to go back to the Homepage.
                    <div>
                        <br />
                        <Link to="/">Go back to Homepage</Link>
                    </div>
                </div>
            </div>
        </DocumentTitle>
    )
}

export default PageNotFound