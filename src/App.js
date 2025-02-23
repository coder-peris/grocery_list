import Header from './header';
import SearchItem from './SearchItem';
import AddItem from './AddItem';
import Content from './content';
import Footer from './footer';

import { useState, useEffect } from 'react';

function App() {

  const [items, setItems] = useState(JSON.parse(localStorage.getItem('Grocery')) || []);
  const [newItem, SetNewItem] = useState('');
  const [search, setSearch] = useState('');

  useEffect(() => {
    localStorage.setItem("Grocery", JSON.stringify(items));
  }, [items]);


  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item };
    const listItems = [...items, myNewItem];
    setItems(listItems);
  }


  const handleCheckbox = (id) => {
    const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
    setItems(listItems);
  }

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
  }

  const handleSubmitButton = (e) => {
    e.preventDefault();   //Prevents reload
    if (!newItem)
      return;
    addItem(newItem);
    SetNewItem('');
  }


  return (
    <div className="App">
      <Header title='Grocery List' />

      <AddItem
        newItem={newItem}
        SetNewItem={SetNewItem}
        handleSubmitButton={handleSubmitButton}
      />
      <SearchItem
        search={search}
        setSearch={setSearch}
      />
      <Content
        items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))}
        handleCheckbox={handleCheckbox}
        handleDelete={handleDelete}
      />
      <Footer length={items.length} />
    </div>
  );
}

export default App;