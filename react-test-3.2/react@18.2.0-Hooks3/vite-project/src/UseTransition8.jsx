import { useTransition } from "react";
import { ErrorBoundary } from "react-error-boundary";

export function AddCommentContainer() {
    return (
        <ErrorBoundary fallback={<p>⚠️Something went wrong</p>}>
            <AddCommentButton />
        </ErrorBoundary>
    );
}

function addComment(comment) {
    // For demonstration purposes to show Error Boundary
    if (comment == null) {
        throw new Error("Example Error: An error thrown to trigger error boundary");
    }
}

function AddCommentButton() {
    const [pending, startTransition] = useTransition();

    return (
        <button
            disabled={pending}
            onClick={() => {
                startTransition(() => {
                    // Intentionally not passing a comment
                    // so error gets thrown
                    addComment();
                });
            }}
        >
            Add comment
        </button>
    );
}
