
export default function SearchBar({text, setText, setValue}) {
    function handleClick() {
        setValue(text);
        setText("");
    }
    return (
        <div className="search-bar">
            <div className="input-filler"></div>
            <input
            type="text"
            value={text}
            onChange={(e) =>setText(e.target.value)}
            placeholder="Search Location" />
            <button onClick={handleClick}><i class="fa-solid fa-magnifying-glass"></i></button>
        </div>
    )
}