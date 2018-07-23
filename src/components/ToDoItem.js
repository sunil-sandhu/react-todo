import React, {Component} from 'react';
import './ToDoItem.css';

class ToDoItem extends Component {
    // constructor(props) {
    //     super(props);
    //     // this.state = {
    //     //     item: this.props.item
    //     // }
    // }


    render() {
        return (
            <div className="ToDoItem">
                <p className="ToDoItem-Text">{this.props.item}</p>
                <div className="ToDoItem-Delete" onClick={this.props.deleteItem}>-</div>
            </div>
        );
    }
}

export default ToDoItem;
