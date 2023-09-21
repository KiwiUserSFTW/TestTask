import { styled } from "styled-components"

export const Button = styled.button`
    height: auto;
    font-size: 16px;
    background-color: #169EB3;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-right: 10px;
    &:hover {
    background-color: #0056b3;
    }

    &:focus {
        outline: none;
    }
`

export const DeleteButton = styled.button`
    height: 30px;
    font-size: 18px;
    background-color: white;
    color: red;
    padding: 5px;
    margin: 5px;
    font-family:sans-serif;
    justify-self:end;
    border: 1px solid red;
    border-radius: 4px;
    cursor: pointer;
    margin-right: 10px;
    transition: 0.3s;
    &:hover {
    background-color: red;
    color: white
    }
`
export const Input = styled.input`
    text-indent: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
    height: 30px;
    outline: none;
    margin-left: 10px;
    &:focus {
        border-color: #007bff;
        box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
    }
`

export const InputColor = styled.input`
    &::-webkit-color-swatch-wrapper {
        display: none;
    }
    border:none;
    position: grid;
    height: 40px;
    appearance: none;
    background-color:black;
    outline:nonde;
    padding:0px;
    justify-content: center;
`

export const CommentInput = styled.textarea`
    resize: vertical;
    text-indent: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
    height: 30px;
    font-family: sans-serif;
    width: 320px;
    outline: none;
    margin-left: 10px;
    &:focus {
        border-color: #007bff;
        box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
    }
`

export const Container = styled.div`
    display:grid;
    height: 100%;
    align-items: start;
    grid-template-columns: 1fr 2fr 2fr;
    grid-rows:auto;
    grid-template-areas: 
        "footer items comments";

    @media (max-width: 1300px) {
        grid-template-columns: 1fr 2fr ;
       grid-template-areas: 
        "footer items "
        "footer comments";
    }
`
export const ItemContainer = styled.div`
    grid-area: items;
    width:500px;
    margin: 4%;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
    padding: 10px;
`

export const CommentsContainer = styled.div`
    grid-area: comments;
    height: auto;
    width:500px;
    margin: 4%;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
    padding: 10px;
`

export const CommentsForm = styled.div`
    display:flex;
    align-items:center;
`

export const CreateForm = styled.form`
    display: grid;
    grid-template-columns: 3fr 1fr;
    grid-gap:10px;
    margin-bottom: 10px;
`

export const Tittle = styled.div`
    color:grey;
    font-family: 'Helvetica Neue ', Arial, Helvetica, sans-serif;
    font-size: 40px;
    margin: 10px;
`

export const Item = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 15px;
    border-radius: 4px;
    height: 30px;
    align-items:center;
    font-family: sans-serif;
    cursor:pointer;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.1);
`

export const Footer = styled.div`
    display:flex;
    position:fixed;
    flex-direction:column;
    left: 15px;
    top: 0px;
    height: 100%;
    width: 170px;
    background-color:#2B2F3E;
    z-index:-1;
    color:white;
    padding:10px;
    font-size:40px;
    align-items:center;
`




export const Comment = styled.div`
    display: flex;
    grid-template-columns:1fr 10fr;
    align-items:start;
    padding: 10px;
    border-radius: 4px;
    align-items:start;
    font-family: sans-serif;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.1);
`