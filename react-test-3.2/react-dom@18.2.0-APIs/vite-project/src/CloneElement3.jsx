import List from './List2.jsx';
import Row from './Row2.jsx';
import { products } from './data2.jsx';
import "./cloneElement.css"

export default function CloneElement3() {
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
