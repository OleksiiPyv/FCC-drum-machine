import "./App.css";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { useEffect, useState } from "react";
import { fetchPackages } from "./store/actions/packagesActions";
import Search from "./components/Search";
import Packages from "./components/Packages";
import Modal from "./components/Modal";
import Pagination from "./components/Pagination";

function App() {
    const { packagesToShow } = useSelector((store) => store.packages);
    const { pack, active } = useSelector((store) => store.modal);
    const [page, setPage] = useState(1);
    const packagesPerPage = 10;

    const dispatch = useDispatch();

    const lastPack = page*packagesPerPage
    const firstPack = lastPack-packagesPerPage
    const packs = packagesToShow.slice(firstPack, lastPack)

    useEffect(() => {
        dispatch(fetchPackages());
    }, [])

    return (
        <div className="App-container">
            <div className="container">
                <Search />

                <Packages packages={packs} />

                {packagesToShow.length && <Pagination setPage={setPage} number={Math.ceil(packagesToShow.length / packagesPerPage)} active={2} />}

                {active && <Modal name={pack.name} type={pack.type} hits={pack.hits} tags={pack.tags}/>}
            </div>
        </div>
    );
}

export default App;
