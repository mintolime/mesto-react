import React from 'react';

interface MyComponentProps {
  error: string;
}

const Loading: React.FC<MyComponentProps> = ({ error }) => {
  return (
    <div className="loading">
      {error ? (
        <p>{error}</p>
      ) : (
        <>
          <div>G</div>
          <div>N</div>
          <div>I</div>
          <div>D</div>
          <div>A</div>
          <div>O</div>
          <div>L</div>
        </>
      )}
    </div>
  )
}

export default Loading;
