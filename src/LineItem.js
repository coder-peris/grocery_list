import { FaTrashAlt } from "react-icons/fa";

const LineItem = ({ item, handleCheckbox, handleDelete }) => {

    return (
        <li className="item">
            <input
                type="checkbox"
                onChange={() => { handleCheckbox(item.id) }}
                checked={item.checked}
            />

            <label
                style={(item.checked) ? { textDecoration: 'line-through' } : null}
                onDoubleClick={() => handleCheckbox(item.id)}
            >{item.item}</label>
            <FaTrashAlt
                onClick={() => { handleDelete(item.id) }}
                role="button"
                tabIndex="0"
                aria-label={`Delete ${item.item}`}
                title={`Delete ${item.item}`}
            />
        </li>
    )
}

export default LineItem;