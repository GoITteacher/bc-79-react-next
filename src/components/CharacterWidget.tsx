import { useEffect, useState } from "react";

export default function CharacterWidget() {
  const [age, setAge] = useState(() => {
    const age = localStorage.getItem("age") || "0";
    console.log("LS", age);
    return JSON.parse(age);
  });

  const [hairStyle, setHairStyle] = useState(() => {
    const hairStyle = localStorage.getItem("hairStyle") || "1";
    return JSON.parse(hairStyle);
  });

  // useEffect(() => {
  //   localStorage.setItem("age", JSON.stringify(age));
  // }, [age]);

  // useEffect(() => {
  //   localStorage.setItem("hairStyle", JSON.stringify(hairStyle));
  // }, [hairStyle]);

  // useEffect(() => {
  //   console.log("Вітаю з народженням");
  // }, []);

  // useEffect(() => {
  //   console.log(`Принести подарунок і привітати з ${age}`);
  // }, [age]);

  // useEffect(() => {
  //   console.log(`Яка гарна зачіска ${hairStyle}`);
  // }, [hairStyle]);

  // useEffect(() => {
  //   console.log(`Яка ти в мене гарна`);
  // }, [age, hairStyle]);

  return (
    <>
      <button onClick={() => setAge(age + 1)}>Age++: {age}</button>
      <button onClick={() => setHairStyle(hairStyle + 1)}>
        Change Hair Style: {hairStyle}
      </button>
    </>
  );
}
