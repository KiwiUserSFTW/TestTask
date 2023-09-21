import { useTypedSelector } from "../hooks/useTypedSelector";
import { useAction } from "../hooks/useAction";
import { InputColor, Button, Tittle, Comment, CommentsForm, CommentInput } from "../styles/form";
import { useState } from "react"

interface CommentsListProps {
    data: any;
    actualItem: number;
}
const Comments: React.FC = () => {
    const { addComment } = useAction();
    const { actualItem, data } = useTypedSelector(state => state.list);
    const [value, setValue] = useState('');
    const [selectedColor, setSelectColor] = useState('#000000')
    const handleClick = (e: any) => {
        if (value != '') {
            addComment({ id: actualItem, value: value, color: selectedColor })
            setValue('')
            setSelectColor('#000000')
        }

    }
    const handleChange = (e: any) => {
        setValue(e.target.value)
    }

    const handleColorChange = (e: any) => {
        setSelectColor(e.target.value)
    }

    return (
        <>
            <Tittle> Comment #{actualItem}</Tittle>
            <CommentsList data={data} actualItem={actualItem} />
            <CommentsForm>
                <InputColor
                    style={{
                        backgroundColor: selectedColor,
                    }}
                    type="color"
                    value={selectedColor}
                    onChange={handleColorChange}
                />
                <CommentInput onChange={handleChange} value={value} placeholder="Type comment here..." />
                <Button type="button" onClick={handleClick}> post comment </Button>
            </CommentsForm>
        </>
    )
}


const CommentsList: React.FC<CommentsListProps> = ({ data, actualItem }): any => {
    const comments = data.filter((e: any) => e.id === actualItem).map((e: any) =>
        e.comments || []
    );

    return (
        <>
            {
                comments.length != 0 ? comments[0].map((e: any) => {
                    return (
                        <Comment key={e.id || 0}>
                            <div style={{
                                backgroundColor: e.color,
                                width: '30px',
                                height: '30px',
                                padding: '5px',
                                margin: '5px'
                            }}></div>
                            <div style={{ width: '300px', wordWrap: 'break-word', fontSize: '14px' }}>
                                {e.value}
                            </div>

                        </Comment>
                    )

                }
                ) : (
                    <>

                    </>
                )

            }
        </>

    )
}
export default Comments;