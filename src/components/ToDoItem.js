import React, { PureComponent } from 'react';
import './ToDoItem.css';

class ToDoItem extends PureComponent {
    onClick = () => {
        const { index, deleteItem } = this.props;
        deleteItem(index);
    };

    render() {
        return (
            <div className="ToDoItem">
                <p className="ToDoItem-Text">{this.props.item}</p>
                <div className="ToDoItem-Delete" onClick={this.onClick}>
                    -
                </div>
            </div>
        );
    }
}

export default ToDoItem;
