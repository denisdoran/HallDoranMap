import React from "react";

import "./SelectableList.css";

const SelectableList = (props) => {
  const {
    name = "",
    items = [],

    hoveredItems = [],
    selectedItems = [],
    action = () => {}
  } = props;

  const listOfItemsMarkup = items.map((itm, ind) => {
    const hoverClass = hoveredItems.includes(itm.communityName)
      ? "hovered"
      : "";
    const selectedClass = selectedItems.includes(itm.communityName)
      ? "selected"
      : "";

    return (
      <li
        key={`selectable-list-item-${ind}`}
        className={`selectable-list-item ${hoverClass} ${selectedClass}`}
        onMouseEnter={() => {
          action({
            type: "ITEM_MOUSE_IN",
            payload: itm.communityName
          });
        }}
        onMouseLeave={() => {
          action({
            type: "ITEM_MOUSE_OUT"
          });
        }}
        onClick={() => {
          action({
            type: "ITEM_SELECTED",
            payload: itm.communityName
          });
          action({
            type: "ITEM_URL",
            payload: itm.url
          });
        }}
      >
        {itm.communityName}
      </li>
    );
  });

  return <ul className={`SelectableList ${name}`}>{listOfItemsMarkup}</ul>;
};

export default SelectableList;
