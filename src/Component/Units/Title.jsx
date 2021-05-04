import React from 'react'

export default function Title({ name, title }) {
    return (
        <div className="col-10 mx-auto my-4 text-center">
            <h1 className='font-weight-bold text-capitalize'>{name} <strong style={{ color: "#FA7A00" }}>{title}</strong></h1>

        </div>
    )
}
