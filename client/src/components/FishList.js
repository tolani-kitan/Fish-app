import React, { useState, useEffect } from 'react';
import '../App.css';
import FishItem from './FishItem';

const TableBody = ({fishes}) => {
        const fishData = fishes.map((fish, index) => {
            return (
                <tr key={index}>
                    <td>{fish.name}</td>
                    <td>{fish.type}</td>
                    <td><FishItem fish={fish} /></td>
                </tr>
            )
        })
        return <tbody>{fishData}</tbody>

}

const FishList = () => {
    const [fishes, setFishes] = useState([]);

    const getFish = async () => {
        try {
            const getFishes = await fetch ("/fishes")
            const data = await getFishes.json()
            setFishes(data);
        }
        catch(err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getFish()
    }, [])

        return (
            <table>
                <thead>
            <tr>
                <th>Name</th>
                <th>Type</th>
            </tr>
            </thead>
                <TableBody fishes={fishes} />
            </table>
        )
}

export default FishList;