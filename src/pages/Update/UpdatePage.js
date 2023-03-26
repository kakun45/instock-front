import { Children } from "react";
import "./UpdatePage.scss";

function UpdatePage({ children }) {
  return (
    <div className="update-page">
      <div className="update-body">{Children.only(children)}</div>
    </div>
  );
}

export default UpdatePage;
