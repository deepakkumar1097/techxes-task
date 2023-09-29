import React, { forwardRef } from "react";
import Banner from "./Banner";
import Categories from "./Categories";

const Body = forwardRef((props, ref) => {
  return (
    <div className="body-container">
      <div ref={ref}>
        <main>
          <div className="child-one">
            <Banner />
          </div>
          <div className="child-two">
            <Categories />
          </div>
        </main>
      </div>
    </div>
  );
});

export default Body;
