import React from "react";
import { useDispatch } from "react-redux/es/exports";
import { fetchPackage } from "../store/actions/packagesActions";

export default function Package({ pack }) {

    const dispatch = useDispatch();

    function openModal() {
        dispatch(fetchPackage(pack));
        document.querySelector('body').classList.add("modal-open")
    };

    return (
        <tr className="package" onClick={openModal}>
            <td>{pack.name}</td>
            <td>{pack.type}</td>
            <td>{pack.hits}</td>
        </tr>
    );
}
