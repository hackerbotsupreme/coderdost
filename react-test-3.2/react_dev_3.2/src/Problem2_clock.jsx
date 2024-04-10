import  { useState } from 'react'


const initialItems = [
    { id: 0, title: 'Warm socks', packed: true },
    { id: 1, title: 'Travel journal', packed: false },
    { id: 2, title: 'Watercolors', packed: false },
];

const Problem2_clock = () => {
    const [items, setItems] = useState(initialItems)
    const [newItem, setNewItem] = useState("")
    function deleteItem(id) {
        let updatedItems = items.filter(item =>
            item.id !== id
        )
        setItems(updatedItems)
    }
    let id = items.length
    function handleAddItem() {
        setItems([...items, {
            id: id,
            title: newItem,
            packed: false
        }])
        setNewItem("");
        alert("1 mail added ")
    }
    let packedItems = items.filter(item => item.packed).length;
    function onChangeitem(newitem) {
        // setPacked((items.filter(item=>item.packed===true)).length)
        setItems(items.map(item => {
            if (item.id === newitem.id) {
                return newitem
            } else {
                return item
            }
        })
        )
    }
    
    return (
        <>
            <form >
                <input type="text" value={newItem} placeholder='Add Item' onChange={(e) => { setNewItem(e.target.value) }} />
                <button onClick={(e) => {e.preventDefault(); handleAddItem(); }}>Add</button>
            </form>
            <ol>
                {items.map(item =>
                    <li key={item.id}><input type="checkbox" checked={item.packed}
                        onChange={(e) => {
                            onChangeitem({
                                ...item, packed: e.target.checked
                            })
                        }}
                    />
                        {item.title} <button onClick={() => (deleteItem(item.id))}>Delete</button>
                    </li>
                )}
                <b>{packedItems} out of  {items.length} is packed ! </b>
            </ol>
        </>
    )
}

export default Problem2_clock