export default function Select3 () {
    return (
        <label>
            Pick a fruit:
            <select name="selectedFruit" defaultValue="orange">
                <option value="apple">Apple</option>
                <option value="banana">Banana</option>
                <option value="orange">Orange</option>
            </select>
        </label>
    );
}
