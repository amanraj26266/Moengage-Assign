import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import { useParams } from 'react-router-dom';
import { getListById } from '../api/getData';

const Details = () => {
    const { id } = useParams();
    const [list, setList] = useState([]);
    useEffect(() => {
        try {
            const fetchData = async () => {
                const res = await getListById(id);
                console.log(res.data);
                setList(res.data);

            }
            fetchData();

        }
        catch (error) {
            console.log(error);
        }
    }, [])
    return (
        <Container>
            <Header>
                <Heading>
                    {list.name}
                </Heading>
                <Description>
                    {list.description}
                </Description>
            </Header>
            <ImageSpace>
                {
                    list.items && list.items.map((item, index) => (
                        <Image key={index} src={`https://http.dog/${item}.jpg`} />
                    ))
                }
            </ImageSpace>
        </Container>
    );
}

export default Details;
const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    width : 100%;
`
const Header = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height : 10%;

    width: 100%;
   
`

const Heading = styled.h2`
    color: #333;
    font-size: 24px;

`
const Description = styled.p`
margin-top: 0;
    color: #666;
    font-size: 16px;
`

const Image = styled.img`
    width: 300px;
    height: 300px;
    object-fit: cover;
    border-radius: 20px;
`
const ImageSpace = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
    margin-top: 20px;
`