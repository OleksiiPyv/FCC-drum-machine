import { logRoles } from "@testing-library/react";
import Collapse from "../components/Collapse";
import React from "react";

export default function Questions() {
    const questions = [
        {
            header: "Scope",
            text: `Esse minim laborum est proident. Ut 
                    aliquip consequat non est irure cupidatat pariatur laborum. Qui 
                    sint consequat voluptate non non deserunt proident magna Lorem 
                    laboris reprehenderit ad quis. Esse tempor eu quis ut. In esse 
                    nisi consectetur minim dolor anim ipsum dolor nulla minim aliquip.`,
            id: 1,
        },

        {
            header: "Vehicle characteristics",
            text: `Veniam irure esse anim aliquip officia excepteur sint nostrud sint adipisicing. Veniam incididunt Lorem commodo consequat ea.`,
            id: 2,
        },

        {
            header: "Warranty / guarantee",
            text: `3.1 The statutory warranty is completely excluded to the 
                    extent permitted by law. 
                    <br/>
                    <br/>3.2 If the vehicle still has a current 
                    factory warranty, a sales representative (brand representative) of the 
                    manufacturer shall provide the services owed therein. If there is a 
                    factory warranty, the beginning of the warranty for new vehicles or 
                    vehicles with a current manufacturer's warranty is not the date of the 
                    first placing on the market, but the beginning of the warranty in the 
                    manufacturer's system or the contractually agreed beginning of the warranty, 
                    if any. 
                    <br/>
                    <br/>3.3 If there is a special warranty insurance for the vehicle, this 
                    will take the place of the material warranty according to section 3.1 
                    and replace it. In this case, the General Terms and Conditions of the 
                    respective warranty service provider apply.`,
            id: 3,
        },

        {
            header: "Trade-in vehicle",
            text: `Fugiat veniam magna laborum ea. 
                    Anim dolor veniam ea ut eu eiusmod do id sint do. 
                    Incididunt aliqua id ea consequat pariatur 
                    tempor excepteur laboris laboris do reprehenderit 
                    adipisicing minim.`,
            id: 4,
        },

        {
            header: "Home Delivery",
            text: `In enim id exercitation tempor. 
                    Incididunt consectetur elit irure exercitation 
                    velit magna. Voluptate ex do ipsum officia aliqua 
                    aliquip quis non quis. Ex qui aliqua do cupidatat 
                    laborum exercitation commodo id ea eiusmod dolore 
                    cillum. Mollit magna deserunt sint fugiat eiusmod 
                    fugiat exercitation aliquip cupidatat consequat 
                    laborum proident do. Nostrud aliquip cupidatat ea 
                    consequat enim tempor pariatur aute. Cupidatat excepteur 
                    excepteur adipisicing sunt culpa eiusmod dolore 
                    reprehenderit nostrud.`,
            id: 5,
        },

        {
            header: "Right of return",
            text: `Occaecat amet excepteur Lorem amet non irure tempor 
                    tempor excepteur dolore minim aliquip. Adipisicing ut non 
                    reprehenderit consectetur mollit officia laborum commodo 
                    consectetur proident. Et amet consequat laborum amet ad 
                    laborum sint enim veniam anim commodo laborum aute. Labore 
                    elit quis officia veniam eiusmod esse culpa et eiusmod ea 
                    id consectetur labore ea. Mollit enim est consectetur do 
                    tempor sint anim qui id.`,
            id: 6,
        },

        {
            header: "Written form",
            text: `Ullamco esse est consequat ad quis sint culpa qui tempor 
                    sint. Cillum do quis exercitation eiusmod irure reprehenderit aute.
                    Anim elit cillum veniam ipsum. Ea consectetur laborum elit aute magna 
                    voluptate dolore tempor. Ullamco velit ullamco id adipisicing qui ad 
                    incididunt dolor sint consequat.`,
            id: 7,
        },

        {
            header: "Applicable law and place of jurisdiction",
            text: `Pariatur minim velit velit exercitation consectetur esse magna 
                    sunt duis. Et anim veniam enim anim consequat dolore. Adipisicing esse et 
                    nisi nulla eu proident aute labore excepteur aute ea qui deserunt.`,
            id: 8,
        },
    ];

    return (
        <div className="questions">
            <div className="container">
                <div className="questions__container">
                    {questions.map((x, index) => (
                        <Collapse
                            key={x.id}
                            id={x.id}
                            index={index}
                            header={x.header}
                            text={x.text}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
