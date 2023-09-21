import { useTypedSelector } from "../hooks/useTypedSelector";
import { useAction } from "../hooks/useAction";
import { useState } from "react";
import { Button, Input, CreateForm } from "../styles/form";

const Form: React.FC = () => {
    const [value, setValue] = useState('');

    const { addItem } = useAction();
    const { data } = useTypedSelector(state => state.list);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        setValue(e.target.value)
    }

    const handleClick = (): void => {
        const id = Math.round(Math.random() * (1000 - 1) + 1);
        if (value != '') {
            addItem({ name: value, id: id, comments: [] });
            setValue('');
        }
    }

    const handleEnter = (e:any) => {
        const id = Math.round(Math.random() * (1000 - 1) + 1);
        if (value != '' && e.key === "Enter") {
            addItem({ name: value, id: id, comments: [] });
            setValue('');
        }
    }

    return (
        <>
            <CreateForm>
                <Input type="text" onChange={handleChange} value={value}  onKeyPress={handleEnter} placeholder="Type name here..." />
                <Button type="button" onClick={handleClick}> add new </Button>
            </CreateForm>
        </>
    )
}

export default Form;