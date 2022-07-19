import { useContext, useState } from "react";
import { MiContexto } from "../context/CartContext";
import { addDoc, collection, getFirestore, orderBy } from "firebase/firestore";

export default function Checkout() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [cel, setCel] = useState("");
  const [envio, setEnvio] = useState("");
  const [idCompra, setIdCompra] = useState("");
  const [show, setShow] = useState(true);
  const [compra, setCompra] = useState([]);
  const [totalCompra, setTotalCompra] = useState("");
  const db = getFirestore();
  const ordencollection = collection(db, "ordenes ");

  const { cart, total, emptyCart } = useContext(MiContexto);

  function handleClick() {
    const orden = {
      buyer: { nombre, email, cel, envio },
      items: cart,
      total,
    };
    addDoc(ordencollection, orden).then(({ id }) => {
      setIdCompra(id);
    });
    setShow(false);
    setCompra(orden.items);
    setTotalCompra(orden.total);
    emptyCart();
  }
  const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

  function isEnabled() {
    return (
      nombre.length > 0 &&
      validateEmail(email) &&
      cel.length > 0 &&
      envio.length > 0
    );
  }

  return (
    <>
      {show ? (
        <div className="container">
          <div className=" text-center mt-5 ">
            <h1>Por favor ingrese sus datos para terminar la compra</h1>
          </div>
          <div className="row ">
            <div className="col-lg-7 mx-auto">
              <div className="card mt-2 mx-auto p-4 bg-light">
                <div className="card-body bg-light">
                  <div className="container">
                    <form id="contact-form">
                      <div className="controls">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group">
                              <label>Nombre *</label>
                              <input
                                id="form_name"
                                type="text"
                                name="name"
                                className="form-control"
                                placeholder="Por favor ingrese su nombre *"
                                required="required"
                                data-error="Firstname is required."
                                onChange={(e) => setNombre(e.target.value)}
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <label>Teléfono *</label>
                              <input
                                id="form_lastname"
                                type="number"
                                name="cel"
                                className="form-control"
                                placeholder="Por favor ingrese su teléfono *"
                                required="required"
                                data-error="Lastname is required."
                                onChange={(e) => setCel(e.target.value)}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group">
                              <label>Email *</label>
                              <input
                                id="form_email"
                                type="email"
                                name="email"
                                className="form-control"
                                placeholder="Por favor ingrese su email *"
                                required="required"
                                data-error="Valid email is required."
                                onChange={(e) => setEmail(e.target.value)}
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <label>Forma de envío *</label>
                              <select
                                id="form_need"
                                name="need"
                                className="form-control"
                                required="required"
                                data-error="Please specify your need."
                                defaultValue={"default"}
                                onChange={(e) => setEnvio(e.target.value)}
                              >
                                <option value="default" disabled>
                                  --Seleccionar forma de envío--
                                </option>
                                <option>Retiro en sucursal</option>
                                <option>
                                  Envío express (1-2 días hábiles)
                                </option>
                                <option>
                                  Envío a domicilio (3-4 días hábiles)
                                </option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-12">
                            <div className="form-group">
                              <label>Artículos</label>
                              <li className="check lista">
                                {cart.map((item) => (
                                  <div key={item.id} className="check articulo">
                                    <div className="cartSection">
                                      <img
                                        src={item.imagen}
                                        alt=""
                                        className="itemImg"
                                      />
                                      <h3>Camiseta de {item.club}</h3>
                                      <p className="check precio">
                                        {item.cantidad}x ${item.precio}
                                      </p>
                                    </div>
                                    <div className="check total">
                                      <p>Total:${total}</p>
                                    </div>
                                  </div>
                                ))}
                              </li>
                            </div>
                          </div>

                          <div className="col-md-12">
                            <input
                              type="submit"
                              className="btn btn-success btn-send  pt-2 btn-block
                            "
                              value="Comprar"
                              disabled={!isEnabled()}
                              onClick={handleClick}
                            />
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="checkout">
            <h1 className="checkout-title">Gracias por comprar en Casacas!</h1>

            <h3 className="checkout-mensaje">
              Su compra se ha realizado con éxito, en breve lo estaremos
              contactando para confirmar su pedido.
            </h3>
            <div>
              <h4>Detalle de su compra</h4>
              <h5>Su id de pedido es: {idCompra}</h5>
              <div className="checkout-compra">
                {compra.map((item) => (
                  <div key={item.id} className="checkout-item">
                    <img src={item.imagen} alt="" className="checkout-img" />
                    <div>
                      <h3 clasNmae="checkout-item-leyenda">
                        Camiseta oficial de {item.club} x {item.cantidad}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
              <h2 className="checkout-total">Precio total : ${totalCompra}</h2>
            </div>
          </div>
        </>
      )}
    </>
  );
}
