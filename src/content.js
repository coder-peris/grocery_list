
import ItemList from "./ItemList";

const Content = ({ items, handleCheckbox, handleDelete }) => {


    return (
        <main>
            {items.length ? (
                <ItemList
                    items={items}
                    handleCheckbox={handleCheckbox}
                    handleDelete={handleDelete}
                />
            ) : (
                <p style={{ marginTop: "2rem" }}>Your List is empty.</p>
            )}

        </main >
    )
}

export default Content;