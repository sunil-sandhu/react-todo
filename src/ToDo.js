import React, {Component} from 'react';
import './ToDo.css';
import ToDoItem from './components/ToDoItem';
import Logo from './assets/logo.png';

class ToDo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // this is where the data goes
            list: [
                {
                    'todo': 'clean the house'
                },
                {
                    'todo': 'buy milk'
                }
            ],
            editMode: false
        };
    };

    createNewToDoItem = () => {
        let newList = this.state.list;
        let input = document.querySelector('input');
        newList.push(
            {
                'number': 'item' + newList.length,
                'todo': input.value}
            );
        this.setState({
           list: newList
        });
        input.value = null;
    };

    handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            this.createNewToDoItem();
        }
    };


    deleteItem = (indexToDelete) => {
        // this is now being emitted back to the parent from the child component
        let array = this.state.list; // make a separate copy of the array
        console.log(indexToDelete);
        array.splice(indexToDelete, 1);  // remove that item from the array
        this.setState({list: array}); // set new state of array with indexed item deleted
    };

    // updateItem = (e) => {
    //     console.log('updating');
    //     this.setState({editMode: true})
    //     let list = [...this.state.list]; // make a separate copy of the array
    //     let itemToEdit = list.indexOf(e.target.value); //get the location of the item in the array that we want to remove
    //     itemToEdit.style.display = 'none';
    //
    //     console.log(itemToEdit);
    //
    // };

    render() {
        return (
            <div className="ToDo">
                <img className="Logo" src={Logo} alt="React logo"/>
                <h1 className="ToDo-Header">React To Do</h1>
                <div className="ToDo-Container">
                <div className="ToDo-Content">

                    {this.state.list.map((item, key) => {
                            return <ToDoItem
                                            key={key}
                                            item={item.todo}
                                            number={key}
                                            deleteItem={this.deleteItem.bind(this, key)}
                                            // updateItem={this.updateItem.bind(this)}
                            />
                        }
                    )}

                </div>
                <input type="text" onKeyPress={this.handleKeyPress}/>
                <div className="ToDo-Add" onClick={this.createNewToDoItem}>+</div>
                </div>
            </div>
        );
    }
}

export default ToDo;
