import ItemList from "./ItemList";

const Content = ({ items, handleCheck, handleDelete }) => {
    return (
        <main>
            {items.length ? (
                <ItemList
                    items={items}
                    handleCheck={handleCheck}
                    handleDelete={handleDelete}
                />
            ) : (
                <p style={{ margin: '2rem' }}>Your list is Empty.</p>
            )}
        </main>
    )
}

export default Content;