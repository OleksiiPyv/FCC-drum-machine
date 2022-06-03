export default function Controls(props) {
    return (
        <section className="drum-machine__controls">
            <div id="display">{props.display}</div>

            <select className="drumKit" onChange={props.handleKitChange}>
                {
                    props.power ? props.drumKits.map(x => <option key={x} value={x}>{x}</option>) : null
                }
            </select>

            <div className="power">
                Power:
                <label className="power__switch">
                    <input type="checkbox" checked={props.power} onChange={props.handlePowerChange} />
                    <span className="power__switch-slider"></span>
                </label>
            </div>
        </section>
    );
}
