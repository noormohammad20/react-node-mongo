import React from 'react'

const AddUser = () => {
    const handleAddUser = e => {
        e.preventDefault()
        const name = e.target.name.value
        const email = e.target.email.value
        const user = { name, email }

        //send data to server
        fetch('http://localhost:5000/user', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)

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
            <h2>Please Add A New User</h2>
            <form onSubmit={handleAddUser}>
                <input type="text" name="name" id="name" placeholder='enter your name' required />
                <br />
                <input type="email" name="email" id="email" placeholder='email address' required />
                <br />
                <input type="submit" value="add user" />
            </form>
        </div>
    )
}

export default AddUser