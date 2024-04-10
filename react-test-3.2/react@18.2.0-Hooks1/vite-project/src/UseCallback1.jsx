import { useState } from 'react';
import ProductPage from './ProductPage.jsx';
import "./useCallback1.css"

export default function UseCallback1() {
    const [isDark, setIsDark] = useState(false);
    return (
        <>
            <label>
                <input
                    type="checkbox"
                    checked={isDark}
                    onChange={e => setIsDark(e.target.checked)}
                />
                Dark mode
            </label>
            <hr />
            <ProductPage
                referrerId="wizard_of_oz"
                productId={123}
                theme={isDark ? 'dark' : 'light'}
            />
        </>
    );
}
