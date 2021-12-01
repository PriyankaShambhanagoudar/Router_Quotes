import { useParams, Route } from "react-router";
import { Fragment } from "react/cjs/react.production.min";

import Comments from "../components/comments/Comments";

const QuoteDetails = () => {
    const param = useParams();

    return (
        <Fragment>
            <h1> Quotes Details Page</h1>
            <p>{param.quoteId}</p>
            <Route path={`/quotes/${param.quoteId}/comments`}></Route>
            <Comments />
        </Fragment>
    );
};
export default QuoteDetails;
