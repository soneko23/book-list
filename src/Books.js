import { Component } from "react";

export class Books extends Component{
    state = {
        userInput: '',
        bookList: []
    }
    onChaneEvent (e) {
        this.setState ({userInput: e});
    }
    addItem (input) {
        if (input === '') {
            alert("Please enter a book")
        } else {
        let listArray = this.state.bookList;
        listArray.push(input);
        this.setState({bookList: listArray, userInput: ''})}
    }
    crossedWord(event) {
        const li = event.target;
        li.classList.toggle('crossed');
    }
    deleteItem() {
        let listArray = this.state.bookList;
        listArray = [];
        this.setState({bookList: listArray})
    }
    onFormSubmit(e) {
        e.preventDefault();
    }
    render() {
        return(
            <div>
                <form onSubmit={this.onFormSubmit}>
                <div>
                <input type="text" placeholder="Enter your book" onChange={(e) => {this.onChaneEvent (e.target.value)}} />
                </div>
                <div className="container">
                    <button className="btn add" onClick={() => this.addItem(this.state.userInput)}>Add
                    </button>
                </div>
                <ul>
                    {this.state.bookList.map((item, index) => (
                        <li onClick={this.crossedWord} key={index}>📕{item}
                        </li>
                    ))}
                </ul>
                <div className="container">
                    <button className="btn delete" onClick={() => this.deleteItem()}>Delete</button>
                </div>
                </form>
            </div>
        )
    }
}