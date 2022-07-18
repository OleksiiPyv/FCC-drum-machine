import React from "react";
import Package from "./Package";

export default function Packages({ packages, loading }) {
    return (
        loading ? <div>loading...</div> : 
        <div>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Hits</th>
                    </tr>
                </thead>
                <tbody>
                    {packages.map((x) => {
                        return (
                            <Package key={x.name} pack={x}/>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}
