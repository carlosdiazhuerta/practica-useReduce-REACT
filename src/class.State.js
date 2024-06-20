import React from "react";
import { Loading } from "./Loading";
const CODIGO_SEGURIDAD = "COCO";

class ClassState extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      error: false,
      loading: false,
    };
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
    //this.setState({ error: false });
    if (this.state.loading) {
      console.log("empezando");
      setTimeout(() => {
        console.log("haciendo validacion");
        if (CODIGO_SEGURIDAD === this.state.value) {
          this.setState({ loading: false });
          this.setState({ error: false });
        } else {
          this.setState({ loading: false, error: true });
        }

        console.log("terminando");
      }, 2000);
    }
  }

  render() {
    console.log(this.state.value);

    return (
      <>
        <div>
          <h2>Eliminar {this.props.name}</h2>
          <p>escribe el codigo de seguridad</p>
          {this.state.error && <p>tenemos un pequeño error;</p>}
          {this.state.loading && <Loading />}
          <input
            value={this.state.value}
            onChange={(event) => {
              this.setState({ value: event.target.value });
            }}
            placeholder="escribe el codigo aqui"
          />
          <button onClick={() => this.setState({ loading: true })}>
            Comprobar
          </button>
        </div>
      </>
    );
  }
}

export { ClassState };
