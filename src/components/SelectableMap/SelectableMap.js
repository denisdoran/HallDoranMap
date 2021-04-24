import React from "react";
import "./SelectableMap.css";

const SelectableMap = (props) => {
  const {
    items = [],
    baseMapImage,
    hoveredItems = [],
    action = () => {}
  } = props;

  const communityImages = items.map((itm, ind) => {
    const hoverClass = hoveredItems.includes(itm.communityName)
      ? "-hovered"
      : "";

    /*  const ImageClick = SelectedItems.includes(itm.communityName)   */
    return (
      <img
        key={`selectable-map-item-${ind}`}
        className={`selectable-map-item${hoverClass}`}
        src={itm.communityImage}
        alt=""
        useMap="#Map"
      />
    );
  });

  const imageMap = items.map((itm, ind) => {
    return (
      <area
        key={`selectable-map${ind}`}
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
        alt={itm.communityName}
        title={itm.communityName}
        /* href={itm.url} */
        shape="poly"
        coords={itm.area}
      />
    );
  });

  return (
    <div className={"SelectableMap"}>
      <map name="Map" id="Map">
        {imageMap}
      </map>
      {communityImages}
      <img
        className={"baseImagePosition"}
        src={baseMapImage}
        alt=""
        useMap="#Map"
      />
    </div>
  );
};

export default SelectableMap;
