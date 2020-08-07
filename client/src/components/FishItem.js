import React, { useState } from 'react';
import '../App.css';

const FishItem = ({fish}) => {
        const [name, setName] = useState(fish.name);
        const [type, setType] = useState(fish.type);

        const [fishes, setFishes] = useState([]);
        
        const deleteFish = async (id) => {
            try {
                const fetchId = await fetch(`/fishes/${id}`, {
                    method: "DELETE"
                })
                setFishes(fishes.filter(fish => fish.id !== id ))
            } catch (error) {
                console.log(error)
            }
        } 

        const editFish = async (e, id) => {
            e.preventDefault()
        const body = {name, type}        
        try {
            const fetchFish = await fetch(`/fishes/${fish.id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(body)
            })
        }catch (error) {
            console.log(error)
        }

         window.location = "/fishes"
        }

        return (
            <div>
            <button type='button' className='mx-3' style={{ background: "green", border: "1px solid green" }} data-toggle='modal' data-target={`#id${fish.id}`} >
                <i class='fas fa-pen '></i>
            </button>
            <button className='btn btn-danger' onClick={(e) => {
                e.preventDefault();
                deleteFish(fish.id)
            }}>
                <i class='fas fa-trash '></i>
             </button>

             <div className="modal" id={`id${fish.id}`} onClick={() => {
                setName(fish.name)
                setType(fish.type)
            }}>
            <div className="modal-dialog">
                <div className="modal-content">

                <div className="modal-header">
                    <h4 className="modal-title">Edit Fish Here!</h4>
                    <button className="close" data-dismiss="modal" onClick={() => {
                setName(fish.name)
                setType(fish.type)
            }}>&times;</button>
                </div>

                <div className="modal-body">
                    <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)}/><br />
                    <input type="text" className="form-control" value={type} onChange={(e) => setType(e.target.value)}/>
                </div>

                <div className="modal-footer">
                    <button type="button" className="btn" style={{ background: "green", border: "1px solid green" }} data-dismiss="modal" onClick={editFish}>Update</button>
                    
                </div>
                </div>
            </div>
            </div>
         </div>
        )
        
}

export default FishItem;