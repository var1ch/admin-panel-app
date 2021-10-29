import React, { useEffect, useState } from "react";
import { useDispatch, useSelector, useStore } from "react-redux";
import { addDataAction, dataSelector } from "../../../../state";
import DataItem from "./DataItem";
import { ImCircleLeft, ImCircleRight } from "react-icons/im";

export default function DataList(props) {
  const dispatch = useDispatch();
  const data = useSelector(dataSelector);
  const [dataOnPage, setDataOnPage] = useState(2);

  const currentIndex = dataOnPage - 2;

  useEffect(() => {
    fetch("https://swapi.dev/api/people")
      .then((response) => response.json())
      .then((json) => {
        const data = [];
        json.results.forEach((i, index) => {
          data.push({
            id: index,
            name: i.name,
            height: i.height,
            skin: i.skin_color,
            eyes: i.eye_color,
            weight: i.mass,
            gender: i.gender,
            birth: i.birth_year,
            isSelected: false,
          });
        });
        dispatch(addDataAction(data));
      });
  }, [dispatch]);

  return (
    <>
      <ul className="data-list">
        {data.slice(currentIndex, dataOnPage).map((item) => (
          <DataItem
            showModalHandler={props.showModalHandler}
            key={item.id}
            id={item.id}
            name={item.name}
            height={item.height}
            skin={item.skin}
            eyes={item.eyes}
            weight={item.weight}
            gender={item.gender}
            birth={item.birth}
          />
        ))}
      </ul>
      <div className="pagination-bar">
        <ImCircleLeft
          className="pagination-button"
          onClick={() => setDataOnPage((prev) => (prev <= 2 ? prev : prev - 2))}
        />
        <span>{`${
          currentIndex === 0 ? "1" : currentIndex
        } - ${dataOnPage}`}</span>
        <ImCircleRight
          className="pagination-button"
          onClick={() =>
            setDataOnPage((prev) => (prev >= data.length ? prev : prev + 2))
          }
        />
        <span>Total: {data.length}</span>
      </div>
    </>
  );
}
