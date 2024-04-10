import Row from './Row5.jsx';
import useList from './useList5.jsx';
import { products } from './data5.jsx';

export default function CloneElement5() {
    const [selected, onNext] = useList(products);
    return (
        <div className="List">
            {products.map(product =>
                <Row
                    key={product.id}
                    title={product.title}
                    isHighlighted={selected === product}
                />
            )}
            <hr />
            <button onClick={onNext}>
                Next
            </button>
        </div>
    );
}
