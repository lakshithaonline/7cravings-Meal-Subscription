import Layout from "./components/Layout/Layout";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {authenticateUser} from "./store/userSlice";

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authenticateUser());
  }, [dispatch]);


  return <Layout />;
}

export default App;
