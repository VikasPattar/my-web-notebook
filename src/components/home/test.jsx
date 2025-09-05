import { useLocation } from 'react-router-dom';
import { useEffect , useState} from 'react';
import Login from './login';
import Register from './register';




function Test() {
    let location = useLocation();

    let ipath = {
        name: "",
        login: "/login",
        register: "/register",
        home : "/"
    }

    let [path, setPath] = useState(ipath)

    useEffect(() => {
        let name = location.pathname;
        setPath((prev) => ({
            ...prev,
            name
        }))
    }, [location])

    if (path.name === path.login) {
        return (<Login></Login>)
    }
    if (path.name === path.register) {
        return (<Register />)
    }
    if(path.name === path.home){
        return(
            <h1>This is home page</h1>
        )
    }

}

export default Test;