import { useState } from "react";
import { useLoaderData } from "remix";
import Card from "~/components/Card";

export const loader = async () => {
  const response = await fetch("https://api.adviceslip.com/advice");
  const data = await response.json();
  return data.slip.advice;
};

export default function Index() {
  const [advice, setAdvice] = useState(useLoaderData());

  const fetchAdvice = async () => {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    setAdvice(data.slip.advice);
  };

  return (
    <div className="app">
      <Card advice={advice} fetchAdvice={fetchAdvice} />
    </div>
  );
}
