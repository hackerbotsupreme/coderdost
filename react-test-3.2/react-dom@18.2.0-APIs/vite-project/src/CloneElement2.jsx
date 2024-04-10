import List from './List.jsx';
import Row from './Row.jsx';
import { products } from './data.jsx';
import "./cloneElement.css"

export default function CloneElement2() {
    return (
        <List
            items={products}
            renderItem={(product, isHighlighted) =>
                <Row
                    key={product.id}
                    title={product.title}
                    isHighlighted={isHighlighted}
                />
            }
        />
    );
}
