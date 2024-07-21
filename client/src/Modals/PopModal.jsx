import React, { useState } from 'react';
import { ImCross } from "react-icons/im";
import styled from 'styled-components';
import { sendData } from '../api/sendData';

const PopModal = ({ setShow, responseCodes }) => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const handleSave = async () => {
        if (!name || !description) {
            alert("Please fill all the fields");
            return;
        }
        try {
            const data = {
                name,
                description,
                items: responseCodes
            }
            const response = await sendData(data);
            setShow(false);
            console.log(response);

        }
        catch (error) {
            console.log(error);
        }
    }
    return (
        <Container>
            <InnerContainer>
                <Header>
                    <Text>Create New List</Text>
                    <CloseIcon size={20} onClick={() => setShow(false)} />
                </Header>
                <DataContainer>
                    <Input placeholder="Enter name for List"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <Input placeholder="Enter description for List"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <Input placeholder="Enter items for List"
                        value={"Response Code Saving: " + responseCodes}
                        disabled={true}
                    />
                </DataContainer>
                <Button onClick={handleSave}>Create List</Button>
            </InnerContainer>
        </Container>
    );
};

export default PopModal;

const Container = styled.div`
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    justify-content: center;
    align-items: center;
`;

const InnerContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    width: 40%;
    max-width: 600px;
    height: 60%;
    max-height: 600px;
    border-radius: 15px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    padding: 20px;
`;

const DataContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    width: 100%;
`;

const Input = styled.input`
    border: 1px solid #ccc;
    padding: 15px;
    border-radius: 5px;
    background-color: #f9f9f9;
    margin: 10px 0;
    width: 80%;
    font-size: 16px;
`;

const Button = styled.button`
    padding: 15px 30px;
    border: none;
    border-radius: 5px;
    background-color: #007bff;
    color: white;
    font-size: 16px;
    cursor: pointer;
    margin-top: 20px;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #0056b3;
    }
`;

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 10px 20px;
    border-bottom: 1px solid #eee;
`;

const Text = styled.h1`
    color: black;
    font-size: 24px;
`;

const CloseIcon = styled(ImCross)`
    cursor: pointer;
    color: #333;

    &:hover {
        color: #000;
    }
`;
