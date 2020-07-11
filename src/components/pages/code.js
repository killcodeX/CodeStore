import React from 'react';
import {
  Link
} from "react-router-dom";

export default function Code(props) {

  const {desc, type, id } = props;
    return (
        <>
          <div className='box'>
            <h2 className='is-size-4'>{desc}</h2>
            <div className='detail'>
              <Link to={`code/${id}`} className='button btn'>
                <i className='fas fa-chevron-right'></i> &nbsp; Read More
              </Link>
              <div className='is-size-6 has-text-weight-medium tag'>Type: {type}</div>
            </div>
          </div>
        </>
    )
}
