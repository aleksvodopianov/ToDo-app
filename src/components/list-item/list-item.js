import { Component } from 'react';

import DelIcon from '../../img/delete-icon.png';
import ExclamIcon from '../../img/icon-exclamation.jpg';
import CheckIcon from '../../img/icon-checked.png';

import './list-item.css';

class ListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: false
        };
    }

    checkIconToggle = () => {
        this.setState(({ checked }) => ({
            checked: !checked,
        }));
    };

    render() {
        const { checked } = this.state;
        const { text, onDelete, exclamation} = this.props;

        let classNamesCheckIcon = 'check-icon none';
        let classNamesDelete = 'delete-icon none';
        let exclamationIcon = 'exclamation-icon none';

        if (exclamation) {
            exclamationIcon = 'exclamation-icon block';
        }

        if (checked) {
            classNamesCheckIcon = 'check-icon block';
            classNamesDelete = 'delete-icon block';
        }

        return (
            <li className="list-item">
                <p className='content'>{text}</p>
                <div className="icons-container">
                    <div 
                        className={classNamesDelete}
                        onClick={onDelete}>
                        <img src={DelIcon} alt="X" />
                    </div>
                    <div className={exclamationIcon}>
                        <img src={ExclamIcon} alt="!" />
                    </div>
                    <div className="check-container" onClick={this.checkIconToggle}>
                        <div className="check">
                            <img src={CheckIcon} alt="Y" className={classNamesCheckIcon} />
                        </div>
                    </div>
                </div>
            </li>
        );
    }
}

export default ListItem;
