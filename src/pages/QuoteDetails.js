import { useParams, Route } from "react-router";
import { Fragment } from "react/cjs/react.production.min";

import Comments from "../components/comments/Comments";

const QuoteDetails = () => {
    const params = useParams();

    return (
        <Fragment>
            <h1> Quotes Details Page</h1>
            <p>{params.quoteId}</p>
            <Route path={`/quotes/${params.quoteId}/comments`}></Route>
            <Comments />
        </Fragment>
    );
};
export default QuoteDetails;
