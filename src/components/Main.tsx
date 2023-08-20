import { useEffect, useState } from "react";

export default function Main() {
  const [inputState, setInputState] = useState<string | null>(null);

  useEffect(() => {
    loadData();
  }, []);

  function loadData() {
    fetch(`${import.meta.env.VITE_API_URL}/posts`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        error;
      });
  }

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInputState(e.target.value);
  }

  return (
    <div>
      <form action="">
        <input
          onChange={(e) => handleInputChange(e)}
          type="textarea"
          name="post"
          id="post"
          placeholder="What's going on in your mind?"
          className="rounded border-[1px] border-black p-2"
        />
        <input
          type="submit"
          value="Share"
          className="rounded border-2 border-black bg-blue-300 p-2"
        />
      </form>
      <div></div>
    </div>
  );
}
