import React from "react";
import { reducer, reducerObject, initialState } from "./useReducer";
const CODIGO_SEGURIDAD = "COCO";

function UseState(props) {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const handleChange = (event) => {
    dispatch({ type: "SET_VALUE", payload: event.target.value });
  };

  const handleCheck = () => {
    dispatch({ type: "CHECK" });
  };

  const handleConfirm = () => {
    dispatch({ type: "DELETE" });
  };

  const handleCancel = () => {
    dispatch({ type: "CANCEL" });
  };

  const handleReset = () => {
    dispatch({ type: "RESET" });
  };

  React.useEffect(() => {
    if (state.loading) {
      console.log("empezando");
      setTimeout(() => {
        console.log("haciendo validacion");
        dispatch({
          type: state.value === CODIGO_SEGURIDAD ? "CONFIRM" : "ERROR",
        });
        console.log("terminando validacion");
      }, 2000);
    }
  }, [state.loading]);

  if (!state.deleted && !state.confirmed) {
    return (
      <SecurityCheck
        value={state.value}
        error={state.error}
        loading={state.loading}
        onChange={handleChange}
        onCheck={handleCheck}
        name={props.name}
      />
    );
  } else if (state.confirmed && !state.deleted) {
    return <Confirmation onConfirm={handleConfirm} onCancel={handleCancel} />;
  } else {
    return <Success onReset={handleReset} />;
  }
}

function SecurityCheck({ value, error, loading, onChange, onCheck, name }) {
  return (
    <div>
      <h2>Eliminar {name}</h2>
      <p>Escribe el código de seguridad</p>
      {error && <p>Tenemos un pequeño error</p>}
      {loading && <p>Cargando...</p>}
      <input
        onChange={onChange}
        value={value}
        placeholder="Escribe el código aquí"
      />
      <button onClick={onCheck}>Comprobar</button>
    </div>
  );
}

function Confirmation({ onConfirm, onCancel }) {
  return (
    <>
      <p>Estado de confirmación</p>
      <button onClick={onConfirm}>Sí, Eliminar</button>
      <button onClick={onCancel}>No, regresar</button>
    </>
  );
}

function Success({ onReset }) {
  return (
    <>
      <p>Eliminado con éxito</p>
      <button onClick={onReset}>Comprobar</button>
    </>
  );
}

export { UseState };
