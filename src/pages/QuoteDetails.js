import { useParams } from "react-router";
import { Fragment } from "react/cjs/react.production.min";

const QuoteDetails = () => {
    const param = useParams();

    return (
        <Fragment>
            <h1> Quotes Details Page</h1>
            <p>{param.quoteId}</p>
        </Fragment>
    );
};
export default QuoteDetails;
