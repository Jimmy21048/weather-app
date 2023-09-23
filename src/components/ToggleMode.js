
export default function ToggleMode({setLight, light}) {
    function handleToggle() {
        setLight(!light);
    }
    return (
        <div className="toggle-mode">
            <button onClick={handleToggle}><i class="fa-solid fa-circle-half-stroke"></i></button>
        </div>
    )
}