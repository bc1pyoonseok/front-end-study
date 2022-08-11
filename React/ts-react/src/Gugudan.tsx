import React from 'react';
import { createInputFiles } from 'typescript';

const GuguDan: React.FC = () => {
    const getRandomNumber = (): number => {
        return Math.floor(Math.random() * 11);
    }
    const [first, setFirst] = React.useState<number>(getRandomNumber())
    const [second, setSecond] = React.useState<number>(getRandomNumber())
    const [value, setValue] = React.useState<string>('')
    const [result,setResult] =  React.useState<boolean>(false)
    return (
        <>
            <div>what is {first} x {second}?</div>
            <form onSubmit={(e)=>{
                e.preventDefault();
                if(parseInt(`${value}`)===first*second){
                    setResult(true)
                    setFirst(getRandomNumber())
                    setSecond(getRandomNumber())
                    setValue('')
                }
                else{
                    setResult(false)
                }
            }}>
                <input type="number" value={value} onChange={(e) => {setValue(e.target.value)}} />
                <button >input</button>
            </form>
            <div>
                {result && <>correct!</>}
                {!result && <>worng!</>}
            </div>
        </>
    );
}

export default GuguDan;