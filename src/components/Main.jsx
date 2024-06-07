import { useEffect, useState } from 'react'
import Card from './Card'


function Main() {
    const [users, setUsers] = useState([])

    const [searchvalue, setSearchValue] = useState('')
    const [name, setName] = useState('')
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [avatar, setAvatar] = useState('')





    useEffect(() => {
        fetch('http://192.168.31.85:3005/items')
            .then((responce) => {
                if (!responce.ok) {
                    throw new Error('Abdulbasir has same error')
                }
                return responce.json()
            })
            .then((data) => {
                setUsers(data)
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])


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
    const handleSearch = (event) => {
        setSearchValue(event.target.value);
    };
    const filteredData = users.filter(item =>
        item.title.toLowerCase().includes(searchvalue.toLowerCase())
    );
    function AddUser() {
        setUsers([
            {
                description: description,
                title: title,
                avatar: avatar,
                name: name,
            }, ...users])
    }





    return (
        <>
            <div>
                <input onChange={(e) => setName(e.target.value)} type="text" placeholder='name' />
                <input onChange={(e) => setTitle(e.target.value)} type="text" placeholder='title' />
                <input onChange={(e) => setDescription(e.target.value)} type="text" placeholder='despretion' />
                <input onChange={(e) => setAvatar(e.target.value)} type="text" placeholder='avatar' />
                <button onClick={AddUser}>add</button>

            </div>
            <br />
            <hr />
            <button></button>
            <input onChange={handleSearch} />
            <section className='main'>

                {
                    filteredData.map((item) =>
                        <Card
                            title={item.title}
                            avatar={item.image}
                            despretion={item.description}
                            name={item.name}
                        />)
                }
                <button onClick={AddNewObg}>add</button>
            </section>
        </>

    )
}

export default Main