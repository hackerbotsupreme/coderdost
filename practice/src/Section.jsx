import { useContext } from "react";
import levelcontext from "./Context";

export default function Section({ children }) {
    let level = useContext(levelcontext)
    return (
        <section className='section '
        >
            <levelcontext.Provider value={level} >
                {children}
            </levelcontext.Provider>
        </section>
    );
}