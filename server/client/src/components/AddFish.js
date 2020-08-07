import React, { useState } from  'react';
import '../App.css';

const AddFish = () => {
        const [name, setName] = useState('');
        const [type, setType] = useState('');

        const buttonSubmit = async (e) => {
            e.preventDefault();
            console.log("heyyy");
            try {
                const body = { name, type}
                const fetchApi = await fetch("http://localhost:3040/fishes", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(body)
                })
                window.location = '/fishes'
            } catch (err) {
                console.log(err)
            }
        }

        return (
            <div className='form-group'>
                <h3>Add a new Fish here</h3> 
                <label htmlFor="name"> Name</label>
                <input 
                    type='text'
                    onChange={(e) => setName(e.target.value)}
                    value={name}

                />
                <label htmlFor="name"> Type</label>
                 <input 
                    type='text'
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                />
                 <input type='button' value='Add Fish' onClick={buttonSubmit} />
               
            </div>
        )

}

export default AddFish;