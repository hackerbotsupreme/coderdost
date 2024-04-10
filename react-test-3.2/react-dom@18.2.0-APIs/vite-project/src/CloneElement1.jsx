import List from './List.jsx';
import Row from './Row.jsx';
import { products } from './data.jsx';
import "./cloneElement.css"

export default function CloneElement1() {
    return (
        <List>
            {products.map(product =>
                <Row
                    key={product.id}
                    title={product.title}
                />
            )}
        </List>
    );
}
