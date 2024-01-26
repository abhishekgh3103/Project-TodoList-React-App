export default function TodoItem({item}) {
    return (
    <div>
        <h2 key={item}>{item}</h2>
    </div>
    );
}