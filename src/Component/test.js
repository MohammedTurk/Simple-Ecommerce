import React, { useState } from 'react'

export default function Test() {
    const [obj, setObj] = useState({ firstName: '', lastName: '' });
    function handleObj(e) {
        setObj({
            ...obj, [e.target.name]: e.target.value
        })
        console.log(e.target.name);
    }
    return (
        <div>
            <input type="text" name="firstName" placeholder="First Name" onChange={handleObj} />
            <h2>The First Name is = {obj.firstName}</h2>
            <input type="text" name="lastName" placeholder="Last Name" onChange={handleObj} />
            <h2>The Last Name is = {obj.lastName}</h2>
            <h1>{JSON.stringify(obj)}</h1>

        </div>
    )
}
