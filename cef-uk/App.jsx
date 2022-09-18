import React from "shared-libraries/react";
import Button from "ui-components/Button";
import Dialog from "ui-components/Dialog";
import ToolTip from "ui-components/ToolTip";
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dialogVisible: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleSwitchVisible = this.handleSwitchVisible.bind(this);
  }
  handleClick(ev) {
    console.log(ev);
    this.setState({
      dialogVisible: true,
    });
  }
  handleSwitchVisible(visible) {
    this.setState({
      dialogVisible: visible,
    });
  }
  render() {
    return (
      <div>
        <h1>CEF UK</h1>
        <p>
          <strong>shared-libraries</strong> provides react、react-dom js files
          to microfrontends
        </p>
        <p>
          <strong>ui-components</strong> provides ui components to
          microfrontends
        </p>
        <h4>Buttons:</h4>
        <Button type="primary" />
        <Button type="warning" />
        <h4>Dialog:</h4>
        <button onClick={this.handleClick}>click me to open Dialog</button>
        <Dialog
          switchVisible={this.handleSwitchVisible}
          visible={this.state.dialogVisible}
        />
        <h4>hover me please!</h4>
        <ToolTip content="hover me please" message="Hello,world!" />
      </div>
    );
  }
}
