import { useRouteError, Link } from "react-router";

const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);

    return (
        <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
            <div className="bg-base-100 shadow-xl rounded-2xl p-8 max-w-md w-full text-center space-y-4">

                <h1 className="text-5xl font-bold text-error">Oops!</h1>

                <p className="text-lg font-medium">
                    Something went wrong
                </p>

                <p className="text-sm text-gray-500">
                    {error?.statusText || error?.message || "Unexpected error occurred"}
                </p>

                <div className="flex justify-center gap-3 pt-4">
                    <Link to="/" className="btn btn-primary">
                        Go Home
                    </Link>
                    <button
                        onClick={() => window.location.reload()}
                        className="btn btn-outline"
                    >
                        Reload
                    </button>
                </div>

            </div>
        </div>
    );
};

export default ErrorPage;