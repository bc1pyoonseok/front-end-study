import React from "react";

const GuguDan: React.FC = () => {
  const getRandomNumber = (): number => {
    return Math.floor(Math.random() * 11);
  };
  const [first, setFirst] = React.useState<number>(getRandomNumber());
  const [second, setSecond] = React.useState<number>(getRandomNumber());
  const [value, setValue] = React.useState<string>("");
  const [answer, setAnswer] = React.useState<number>(first * second);
  const [result, setResult] = React.useState<boolean | string>("init");
  const [correct, setCorrect] = React.useState<number>(0);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (parseInt(`${value}`) === first * second) {
      setResult(true);
      setFirst(getRandomNumber());
      setSecond(getRandomNumber());
      setAnswer(first * second);
      setValue("");
      setCorrect(correct + 1);
    } else {
      setResult(false);
    }
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <>
      <div>
        what is {first} x {second}?
      </div>
      <form onSubmit={onSubmit}>
        <input type="number" value={value} onChange={onChange} />
        <button>input</button>
      </form>
      <div>
        {result === "init" && <>take a look</>}
        {result === true && <>{answer} correct!</>}
        {result === false && <>worng!</>}
        <br />
        <>I got {correct} times!</>
      </div>
    </>
  );
};

export default GuguDan;
