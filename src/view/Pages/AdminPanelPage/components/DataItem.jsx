import React from "react";
import { useDispatch } from "react-redux";
import { deleteItemAction, setIsSelectedAction } from "../../../../state";
import { ImCross } from "react-icons/im";
import { ImPencil } from "react-icons/im";

export default function DataItem(props) {
  const dispatch = useDispatch();
  return (
    <li className="data-item">
      <span className="id">ID: {props.id}</span>
      <span>Name: {props.name}</span>
      <span>Height: {props.height}cm</span>
      <span>Skin: {props.skin}</span>
      <span>Eyes: {props.eyes}</span>
      <span>Weight: {props.weight}kg</span>
      <span>Gender: {props.gender}</span>
      <span>Birth: {props.birth}</span>
      <div className="options">
        <ImPencil
          className="button edit"
          onClick={() => {
            dispatch(
              setIsSelectedAction({
                id: props.id,
                isSelected: true,
              }),
            );
            props.showModalHandler();
          }}
        />
        <ImCross
          className="button remove"
          onClick={() => dispatch(deleteItemAction(props.id))}
        />
      </div>
    </li>
  );
}
