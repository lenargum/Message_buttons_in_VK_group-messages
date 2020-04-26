import React, {Component} from "react";

class Button extends Component {
    render() {
        const nameSurname = document.getElementsByClassName("im-page--title-main")[0].getAttribute("title");
        const buttonName = this.props.message;
        const message = buttonName.replace("%username%", nameSurname);

        function handleClick(e) {
            document.getElementsByClassName("im_editable im-chat-input--text _im_text")[0].dispatchEvent(new Event("paste"));
            document.getElementsByClassName("im_editable im-chat-input--text _im_text")[0].innerHTML = message;
        }

        return (
            <div className="extension_button" onClick={handleClick}>
                {buttonName}
            </div>
        );
    }
}

export default Button;