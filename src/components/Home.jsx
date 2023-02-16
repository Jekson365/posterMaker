import React, { useEffect, useState } from 'react'
import { Card } from './Card'

export const Home = () => {
    const [eachItem, setEachItem] = useState()
    const [data, setData] = useState([])

    const handleData = (e) => {
        const targetName = e.target.name
        e.preventDefault()

        switch (targetName) {
            case 'image':
                setEachItem({ ...eachItem, image: URL.createObjectURL(e.target.files[0]) })
                break
            case 'name':
                setEachItem({ ...eachItem, name: e.target.value })
                break
            case 'genre':
                setEachItem({ ...eachItem, genre: e.target.value })
                break
            case 'studio':
                setEachItem({ ...eachItem, studio: e.target.value })
                break
            case 'produced':
                setEachItem({ ...eachItem, produced: e.target.value })
                break
        }

    }

    const handleAdd = (e) => {
        e.preventDefault()
        if (eachItem.name && eachItem.image) {
            setData([...data, eachItem])
        }
    }
    useEffect(() => {
        console.log(data)
    }, [data])
    return (
        <>
            <form action="">
                <input type="file" placeholder='choose image'
                    name='image'
                    accept='jpg/jpeg/png'
                    onChange={handleData} />
                <input type="text" name='name' onChange={handleData} />
                <input type="text" name='genre' onChange={handleData} />
                <input type="text" name='studio' onChange={handleData} />
                <input type="text" name='produced' onChange={handleData} />
                <button type='submit' onClick={handleAdd}>Submit</button>
                {data.map((each) => {
                    return (
                        <>
                            <Card props={each} />
                        </>
                    )
                })}
            </form>
        </>
    )
}
