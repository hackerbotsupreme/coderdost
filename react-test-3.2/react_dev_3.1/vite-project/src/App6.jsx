import Form from "./Form6.jsx";

let statuses = ["empty", "typing", "submitting", "success", "error"];

export default function App() {
    return (
        <>
            {statuses.map((status) => (
                <section key={status}>
                    <h4>Form ({status}):</h4>
                    <Form status={status} />
                </section>
            ))}
        </>
    );
}
