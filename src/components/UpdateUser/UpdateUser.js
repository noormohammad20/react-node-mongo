import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const UpdateUser = () => {
    const { id } = useParams()
    const [user, setUser] = useState({})

    useEffect(() => {
        const url = `http://localhost:5000/user/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setUser(data)
            })
    }, [])

    const handleUpdateUser = e => {
        e.preventDefault()
        const name = e.target.name.value
        const email = e.target.email.value
        const updatedUser = { name, email }

        //send data to server
        const url = `http://localhost:5000/user/${id}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedUser)

        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data)
                alert('user added successfully!!!')
                e.target.reset()
            })
    }

    return (
        <div>
            <h2>updating user: {user.name}</h2>
            <form onSubmit={handleUpdateUser}>
                <input type="text" name="name" id="name" placeholder='enter your name' required />
                <br />
                <input type="email" name="email" id="email" placeholder='email address' required />
                <br />
                <input type="submit" value="update user" />
            </form>
        </div>
    )
}

export default UpdateUser