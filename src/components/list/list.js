import { Component } from "react";
import ListItem from "../list-item/list-item";

import './list.css';

class List extends Component {

    render () {
        const { data, onDelete } = this.props;

        const elements = data.map(item => {
            const {id, ...itemProps} = item;
            return (
                <ListItem
                    key={id}
                    { ...itemProps}
                    onDelete={() => onDelete(id)}/>
            )
        })
         
        return (
            <div className="list">
                <ul>
                    {elements}
                </ul>
            </div>
        )
    }
}

export default List;
