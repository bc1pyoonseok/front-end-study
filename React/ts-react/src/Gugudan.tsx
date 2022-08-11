import React from 'react';
import { createInputFiles } from 'typescript';

const GuguDan: React.FC = () => {
    const getRandomNumber = (): number => {
        return Math.floor(Math.random() * 11);
    }
    const [first, setFirst] = React.useState<number>(getRandomNumber())
    const [second, setSecond] = React.useState<number>(getRandomNumber())
    const [value, setValue] = React.useState<string>('')
    const [result,setResult] =  React.useState<boolean | string>('init')
    const [correct,setCorrect] =  React.useState<number>(0)

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
                    setCorrect(correct+1)
                }
                else{
                    setResult(false)
                }
            }}>
                <input type="number" value={value} onChange={(e) => {setValue(e.target.value)}} />
                <button >input</button>
            </form>
            <div>
                {result==='init' && <>take a look</>}
                {result===true && <>correct!</>}
                {result===false && <>worng!</>}
                <br/>
                <>I got {correct} times!</>
            </div>
        </>
    );
}

export default GuguDan;