import React from "react";
import New from "./New";
import Popular from "./Popular";

export default function WithDisplay(Component) {
  return class extends React.Component {
  
    render() {
      if (this.props.views > 1000) {
        return (
          <Popular>
            <Component {...this.props} />
          </Popular>
        );
      }
      if (this.props.views < 100) {
        return (
          <New>
            <Component {...this.props} />
          </New>
        );
      }
      return (
        <Component {...this.props} />
      )
    }
  }
}