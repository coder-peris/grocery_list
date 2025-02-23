import { useRef } from "react";
import { FaPlus } from "react-icons/fa"

const AddItem = ({ newItem, SetNewItem, handleSubmitButton }) => {

    const inputRef = useRef();

    return (
        <form className='addForm' onSubmit={handleSubmitButton}>
            <label htmlFor="addItem">Add Item</label>
            <input
                ref={inputRef}
                autoFocus
                type="text"
                id="addItem"
                placeholder='Add Item'
                required
                value={newItem}
                onChange={(e) => SetNewItem(e.target.value)}
            />
            <button
                type='submit'
                aria-label='Add Item'
                onClick={() => inputRef.current.focus()}
            >
                <FaPlus />
            </button>
        </form>
    )
}

export default AddItem;