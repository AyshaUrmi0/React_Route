import React from 'react';
import { useRouteError } from 'react-router-dom';
import { Link } from 'react-router-dom';


const ErrorPage = () => {
    const error=useRouteError();
    console.log(error);
    return (
        <div>
          <h2>This is Error Page</h2> 
          <p>{error.statusText || error.message}</p>
          {
                error.status===404 && <div>
                    <h3>Page Not Found</h3>
                    <p>Sorry, the page you are looking for does not exist.</p>
                   <Link to='/'><button>Go Back Home</button></Link>
                </div>
          }
        </div>
    );
};

export default ErrorPage;