import React, { Fragment } from "react";

const Component = () => {
  return (
    <Fragment>
      <h2 className="text-center my-5">Product list</h2>
      <table className="table table-striped">
        <thead className="bg-primary table-dark ">
          <tr>
            <th className="col"> Name</th>
            <th className="col"> Price</th>
            <th className="col"> Actions</th>
          </tr>
        </thead>
      </table>
    </Fragment>
  );
};

export default Component;
export { Component as Products };
