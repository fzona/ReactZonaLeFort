import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";

export default function ItemListContainer() {
  const [camisetas, setCamisetas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();

    const productosCollection = collection(db, "productos");

    if (id) {
      const q = query(productosCollection, where("categoria", "==", id));

      getDocs(q)
        .then((snapshot) => {
          setCamisetas(
            snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
          );
        })
        .catch((error) => {
          setError(error);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      getDocs(productosCollection)
        .then((snapshot) => {
          setCamisetas(
            snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
          );
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [id]);

  return (
    <>
      <div>
        <ItemList camisetas={camisetas} />
      </div>
    </>
  );
}
