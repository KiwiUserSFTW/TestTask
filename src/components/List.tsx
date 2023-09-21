import { useAction } from "../hooks/useAction";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { Item, DeleteButton } from "../styles/form";
import { useState, useEffect } from "react"
export const List: React.FC = () => {

    const { data, actualItem } = useTypedSelector(state => state.list);
    const [actualItemId, setActualItemId] = useState(actualItem);

    const { deleteItem, setActualItem } = useAction();
    useEffect(() => {
        if (data.length == 0) {
            setActualItemId(0)
        }
        if(data.length == 1) {
            setActualItemId(data[0].id)
        }
        setActualItem(actualItemId)
    }, [actualItemId, data]);

    const handleItemClick = (e: number) => {
        setActualItemId(e);
    }
    const handleClick = (e: any) => {
        if (e == actualItem && data[0].id) {
            setActualItemId(data[0].id)
        }

        deleteItem(e)

    }
    return (
        <>
            {data.map(e => {

                return (
                    <Item key={e.id} onClick={() => handleItemClick(e.id)}>
                        <div style={{ display: "flex" }}>
                            <div style={{
                                fontSize: "15px",
                                padding: "4px",
                                fontFamily: "sens-serif",
                                marginRight: "10px",
                                border: "1px solid #1593A7",
                                color: "white",
                                borderRadius: "10px",
                                backgroundColor: e.id != actualItem ? "#1593A7" : "#15003D"
                            }}>{e.comments.length}
                            </div>
                            {e.name}

                        </div>
                        <DeleteButton onClick={(event) => { event.stopPropagation(); handleClick(e.id) }}> Delete </ DeleteButton>
                    </Item>
                )
            })}
        </>
    )
}