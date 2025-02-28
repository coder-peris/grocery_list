import LineItem from "./LineItem";

const ItemList = ({ items, handleCheckbox, handleDelete }) => {

    return (
        <ul>
            {items.map(item => (
                <LineItem
                    key={item.id}
                    item={item}
                    handleCheckbox={handleCheckbox}
                    handleDelete={handleDelete}
                />

            ))}
        </ul>
    )

}

export default ItemList;