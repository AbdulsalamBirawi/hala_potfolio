import React from "react";

const WorkItems = ({ item }) => {
  return (
    <div className="work__card" key={item.id}>
      <img src={item.image} className="work__img" alt="" />
      <h3 className="work__title">{item.title}</h3>
      <div style={{ display: "flex", gap: "30px" }}>
        <a href={item.urlAndroid} className="work__button" target="_blank">
          For Android{" "}
          <i className="bx bx-right-arrow-alt work__button-icon"></i>
        </a>
        {item.urlIos != "" ? (
          <a href={item.urlIos} className="work__button" target="_blank">
            For IOS <i className="bx bx-right-arrow-alt work__button-icon"></i>
          </a>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default WorkItems;
