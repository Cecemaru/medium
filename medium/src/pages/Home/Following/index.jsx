import { useEffect } from "react";
import { useState } from "react";

export default function Following() {
  const [data, setData] = useState(false);

  useEffect(() => {
    fetch("http://192.168.1.48:8000/api/posts")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  console.log(data);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {data.results.map((posts, index) => (
        <div key={index}>
          <h1>{posts.title}</h1>
          <p>{posts.body}</p>
        </div>
      ))}
    </div>
  );
}
