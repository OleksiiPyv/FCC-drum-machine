import React from "react";
import { useDispatch } from "react-redux/es/exports";
import { close } from "../store/slices/modalSlice";
import modal from "../scss/modal.scss"

export default function Modal({ name, hits, type, tags }) {

    const dispatch = useDispatch();

    function closeModal() {
        dispatch(close())
        document.querySelector('body').classList.remove("modal-open")
    }
    

    return (
        <div className="layout" >
            <div className="content">
                <div className="content__heading">
                    <div className="content__name">{name}</div>
                    <div className="content__close" onClick={closeModal}>&times;</div>
                </div>
                <div className="content__body">
                    <div className="content__item">type: {type}</div>
                    <div className="content__item">hits: {hits}</div>
                    {tags && Object.keys(tags).map(x => (<div key={x} className="content__item">{`${x}: ${tags[x]}`}</div>))}
                </div>
            </div>
        </div>
    );
}
