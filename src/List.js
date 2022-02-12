import React from "react";

const List = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        const { id, name, image, age } = person;
        return (
          <article className="person" key={id}>
            <img src={image} alt={name}></img>
            <div>
              <h4>{name}</h4>
              <p>{age} Years</p>
            </div>
          </article>
        );
      })}
    </>
  );
};
export default List;
