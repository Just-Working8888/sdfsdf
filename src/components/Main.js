import { useState } from 'react'
import data from '../data/db.json'
import Card from './Card'


function Main() {
    const [users, setUsers] = useState(data)
    function AddNewObg() {
        setUsers([...users, {
            "title": "AAAAAAAAAAA",
            "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/954.jpg",
            "despretion": "AAAAAAAAAAA",
            "name": "AAAAAAAAAAA",
            "rate": 58,
            "id": "1"
        },])
    }


    return (
        <>
            <input />
            <section className='main'>

                {
                    users.map((item) =>
                        <Card
                            title={item.title}
                            avatar={item.avatar}
                            despretion={item.despretion}
                            name={item.name}
                        />)
                }
                <button onClick={AddNewObg}>add</button>
            </section>
        </>

    )
}

export default Main