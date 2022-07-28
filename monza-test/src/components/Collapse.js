import React from "react";
import { useState } from "react";

export default function Collapse({ header, text, id, index }) {
    const [open, setOpen] = useState(false);

    return (
        <div className={"custom-collapse" + (open ? " open" : "")}>
            <h4
                onClick={() => {
                    setOpen(!open);
                }}
                className="custom-collapse__header collapsed"
                data-bs-toggle="collapse"
                data-bs-target={`#collapse-${id}`}
                role="button"
                aria-expanded="false"
                aria-controls={`collapse-${id}`}
            >
                {`${index + 1}. ${header}`}
            </h4>

            <div className="collapse " id={`collapse-${id}`}>
                <div
                    className="custom-collapse__body"
                    dangerouslySetInnerHTML={{ __html: text }}
                ></div>
            </div>
        </div>
    );
}
