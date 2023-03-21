import React from 'react'
import { useRouteError } from 'react-router-dom'
import Header from './Header'

const ErrorPage = () => {
  const error = useRouteError()
  // console.log(error);
  return (
    <>
      <Header />
      <div className="flex flex-col min-h-[700px] justify-center items-center">
        <h1 className="text-4xl">Ops! An Error Ocurred!</h1>
        <br />
        {error && (
          <div>
            <p className='text-3xl text-red-600'>{error.statusText || error.message}</p>
            <p>{error.status}</p>
          </div>
        )}
      </div>
    </>
  );
}

export default ErrorPage
