import { Component } from "react";
import Header from "../header/header";
import List from "../list/list";
import Footer from "../footer/footer";

import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { text: 'Выучить React', exclamation: false, id: 1 },
                { text: 'Устроиться в крупную компанию', exclamation: true, id: 2 },
                { text: 'Купить машину', exclamation: false, id: 3 },
                { text: 'Вырастить дочку', exclamation: true, id: 4 },
                { text: 'Построить дом', exclamation: false, id: 5 },
            ],
        };
        this.maxId = 6;
    }

    deleteItem = (id) => {
        this.setState(({ data }) => {
            return {
                data: data.filter((item) => item.id !== id),
            };
        });
        this.maxId--;
    };

    addItem = (important, taskContent) => {
        if (taskContent) {
            const newItem = {
                exclamation: important, 
                text: taskContent,
                id: this.maxId++
            }
            this.setState(({data}) => {
                const newArr = [...data, newItem];
                return {
                    data: newArr
                }
            });
        }
    }

    render () {
        const { data } = this.state;
        return (
            <div className="wrapper">
                <Header onAdd={this.addItem}/>
                <List 
                    data={data}
                    onDelete={this.deleteItem}/>
                <Footer/>
            </div>
        )
    }
}

export default App;
