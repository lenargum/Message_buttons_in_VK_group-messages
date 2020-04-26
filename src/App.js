import React, {Component} from "react";
import Button from "./Components/Button";
import "./styles.css"

class App extends Component {
    render() {
        const width = document.getElementsByClassName("im_chat-input--buttons")[0].offsetWidth;
        return (
            <div className="extension_buttons" style={{paddingRight: width}}>
                <Button message={"Привет, %username%!"}/>
                <Button message={"Пока, %username%!"}/>
                <Button message={"Доброе утро, %username%!"}/>
                <Button message={"Добрый день, %username%!"}/>
                <Button message={"Добрый вечер, %username%!"}/>
            </div>
        );
    }
}

export default App;