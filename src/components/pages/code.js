import React from 'react';


export default function Code(props) {

  const {desc, type, id } = props;
    return (
        <>
          <div className='box'>
            <h2 className='is-size-4'>{desc}</h2>
            <div className='detail'>
              <div className='button btn'>Know More</div>
              <div className='is-size-6 has-text-weight-medium tag'>Type: {type}</div>
            </div>
          </div>
        </>
    )
}
