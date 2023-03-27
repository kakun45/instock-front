import { Children } from "react";
import "./UpdatePage.scss";

function UpdatePage({ children }) {
  return (
    <main className="update-page">
      <div className="update-body">{Children.only(children)}</div>
    </main>
  );
}

export default UpdatePage;
