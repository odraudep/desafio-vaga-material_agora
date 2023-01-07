import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { TbFaceIdError } from 'react-icons/tb';

function Error() {
  const [count, setCount] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      if (count < 1) {
        clearInterval(interval);
        toast.error(
          'You have been redirected to the home page because the one that you were trying to reach was either unavailable or had an internal error.',
          {
            autoClose: 10000,
          },
        );
        return navigate('/');
      }
      setCount((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [count]);

  return (
    <main className="grid place-items-center min-h-screen bg-body text-white">
      <div className="container text-center">
        <TbFaceIdError size="4rem" className="mx-auto animate-pulse" />
        <h1>There was an error on the page that you are looking for</h1>
        <p className="flex justify-center flex-wrap gap-2 text-2xl">
          You will be redirected to the home page in:
          <span className="block animate-bounce">{count}</span>
        </p>
      </div>
    </main>
  );
}

export default Error;
