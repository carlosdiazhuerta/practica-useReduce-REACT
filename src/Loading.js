import React from "react";

class Loading extends React.Component {
  componentWillUnmount() {
    console.log("componentWillUnMount");
  }

  render() {
    return (
      <>
        <p>cargando...</p>
      </>
    );
  }
}

export { Loading };
