import List from './List4.jsx';
import Row from './Row4.jsx';
import { products } from './data4.jsx';

export default function CloneElement4() {
    return (
        <List
            items={products}
            renderItem={(product) =>
                <Row title={product.title} />
            }
        />
    );
}
