/**
 * Заглушка лічильника: додайте пропси та обробники самостійно.
 */
export default function ClickListener() {
  const handleBtnClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    console.log("Hello");
  };

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}></form>
      <button onClick={handleBtnClick}>Clicks: 0</button>
      <button onClick={(e) => {}}></button>
      <input type="text" onChange={(e) => console.log(e.target.value)} />
    </div>
  );
}
