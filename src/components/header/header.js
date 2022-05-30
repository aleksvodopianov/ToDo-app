import { Component } from 'react';
import OpenFormPng from '../../img/icon-plus.png';
import CloseFormPng from '../../img/cancel-icon.png';

import CheckIcon from '../../img/icon-checked.png';

import './header.css';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggleForm: false,
            important: false,
            taskContent: '',
            checked: false
        };
    }

    togglerIcon = () => {
        this.setState(({ toggleForm }) => ({
            toggleForm: !toggleForm,
        }));
    };

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    doImportant = () => {
        this.setState(({ important }) => ({
            important: !important,
        }));
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onAdd(this.state.important, this.state.taskContent);
        this.setState({
            toggleForm: false,
            important: false,
            taskContent: '',
            checked: false
        });
    };

    checkIconToggle = () => {
        this.setState(({ checked }) => ({
            checked: !checked,
        }));
    };

    render() {
        const { toggleForm, taskContent, important, checked } = this.state;

        let classNameOn = 'block';
        let classNameOff = 'none';
        let classNameForm = 'header-add-form';
        let classNamesCheckIcon = 'check-icon none';

        if (checked) {
            classNamesCheckIcon = 'check-icon block';
        }

        if (toggleForm) {
            classNameOn = 'none';
            classNameOff = 'block';
            classNameForm = 'header-add-form active';
        }

        return (
            <div className="header">
                <div className="header-title">
                    <h2>ToDo LiST</h2>
                    <div
                        className="addIcon"
                        name="toggleForm"
                        value={toggleForm}
                        onClick={this.togglerIcon}
                    >
                        <img className={classNameOn} src={OpenFormPng} alt="+" />
                        <img className={classNameOff} src={CloseFormPng} alt="x" />
                    </div>
                </div>
                <div className={classNameForm}>
                    <form className="add-form" onSubmit={this.onSubmit}>
                        <input
                            type="text"
                            className="input-event"
                            name="taskContent"
                            value={taskContent}
                            placeholder="Какие планы?"
                            onChange={this.onValueChange}
                        />
                        <div className="btn-container">
                            {/* <input
                                type="checkbox"
                                name="important"
                                value={important}
                                onClick={this.doImportant}
                            /> */}
                            <div
                                className="checkbox pt5px"
                                name="important"
                                value={important}
                                onClick={this.doImportant}>
                                <div
                                    className="check"
                                    onClick={this.checkIconToggle}>
                                    <img src={CheckIcon} alt="Y" className={classNamesCheckIcon} />
                                </div>
                            </div>
                            <p>Важно</p>
                            <button type="submit" className="btn-add-event">
                                Добавить
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Header;
