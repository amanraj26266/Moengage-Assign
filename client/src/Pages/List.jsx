import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { CiSearch } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import PopModal from '../Modals/PopModal';

const List = () => {
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const responseCodes = [
        100, 101, 102, 103, 200, 201, 202, 203, 204, 205, 206, 207, 208, 226, 300, 301, 302, 303, 304, 305, 306, 307, 308, 400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 421, 422, 423, 424, 425, 426, 428, 429, 431, 451, 500, 501, 502, 503, 504, 505, 506, 507, 508, 510, 511
    ];

    const [searchTerm, setSearchTerm] = useState("");
    const [filteredResponseCodes, setFilteredResponseCodes] = useState(responseCodes);

    useEffect(() => {
        const filteredCodes = responseCodes.filter(code => code.toString().startsWith(searchTerm));
        setFilteredResponseCodes(filteredCodes);
    }, [searchTerm]);

    return (
        <Container>
            <Header>
                {show && <PopModal setShow={setShow} responseCodes={filteredResponseCodes} />}
                <SearchBar>
                    <CiSearch size={25} />
                    <Input
                        placeholder="Search for a response..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </SearchBar>
                <SaveButton onClick={() => setShow(true)}>
                    Save
                </SaveButton>
                <ViewButton onClick={() => navigate('/saved')}>
                    View
                </ViewButton>
            </Header>
            <ImageSpace>
                {filteredResponseCodes.map((code) => (
                    <Image src={`https://http.dog/${code}.jpg`} alt="response" key={code} />
                ))}
            </ImageSpace>
        </Container>
    )
}

export default List

const Container = styled.div`
    display: flex;
    align-items: center;
    background-color: #f0f0f0;
    flex-direction: column;
`

const SearchBar = styled.div`
    display: flex;
    align-items: center;
    padding: 10px;
    border-radius: 5px;
    width: 60%;
    height: 6%;
    margin: 10px;
    background-color: white;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`

const Input = styled.input`
    border: none;
    outline: none;
    margin-left: 10px;
    width: 100%;
    font-size: 1.2rem;
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
const Header = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 20px;
`
const SaveButton = styled.button`
    padding: 5px;
    border: none;
    border-radius: 5px;
    background-color: #007bff;
    width: 150px;
    color: white;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.3s;
    &:hover {
        background-color: #0056b3;
    }
`
const ViewButton = styled.button`
    padding: 5px;
    border: none;
    border-radius: 5px;
    background-color: #007bff;
    width: 150px;
    color: white;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.3s;
    margin-left: 10px;
    &:hover {
        background-color: #0056b3;
    }
`