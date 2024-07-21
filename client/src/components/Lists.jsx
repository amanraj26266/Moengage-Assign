import React, { useState } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
const Lists = ({ list }) => {
    const navigate = useNavigate();
    const [id, setId] = useState(list._id);
    const handleNavigate = () => {
        navigate(`/details/${id}`);
    }
    return (
        <Container onClick={handleNavigate}>
            <ListContainer>
                <ListHeader>
                    <ListName>{list.name}</ListName>
                    <ListDescription>{list.description}</ListDescription>
                </ListHeader>

            </ListContainer>
        </Container>
    )
}

export default Lists
const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    width : 100%;
`
const ListContainer = styled.div`
    display: flex;
 
    background-color: white;
    width: 80%;
    max-width: 600px;
    border-radius: 15px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    padding: 20px;
`
const ListHeader = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    margin-bottom: 20px;
`
const ListName = styled.h2`
    color: #333;
    font-size: 24px;
`
const ListDescription = styled.p`
    color: #666;
    font-size: 16px;
`
