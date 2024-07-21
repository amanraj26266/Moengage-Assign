import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { getData } from '../api/getData';
import Lists from '../components/Lists';
const SavedList = () => {
    const [lists, setLists] = useState([]);
    useEffect(() => {
        try {
            const fetchData = async () => {
                const res = await getData();
                console.log(res.data);
                setLists(res.data);
            }
            fetchData();
        }
        catch (error) {
            console.log(error);
        }

    }
        , [])


    return (
        <Container>
            {
                lists.map((list, index) => (
                    <Lists key={index} list={list} />
                ))
            }
        </Container>
    )
}

export default SavedList
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    width: 100%;
    background-color: #f0f0f0;
    color: #333;
`;