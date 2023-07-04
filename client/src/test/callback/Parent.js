
import React, { useCallback, useMemo, useState } from "react";
import Button from "./Button";
import Count from "./Count";
import Input from "./Input";
import Title from "./Title";

function Parent() {
    const [count, setCount] = useState(20)
    const [s, setS] = useState(200)
    const [box, setBox] = useState('')
    const [isbox1,setisbox1]=useState(false)
    const [isbox2,setisbox2]=useState(false)
    const inc = () => {
        setCount(count + 10)
    }
    const useCount = useCallback(() => {
        setCount(count + 3)
    }, [count])

    const insc = () => {
        setS(s + 10)
    }
    const usesCount = useCallback(() => {
        setS(s + 10)
    }, [s])
    const create = () => {
        setBox(<div>
            <Input type="text" name="name" />
            <Button>Send</Button>
        </div>)
        setisbox1(i=>!i)
    }
    const del=()=>{
        setBox('')
        setisbox2(is=>!is)
    }
    const isEven=useMemo(()=>{
        let i=0
        while (i<100000000000){
            i++
        }
       return count%2===0
    },[count])

    return <div>
        <Title />
        <Count text={'Age'} count={count} />
        <Button onclick={useCount} >
            Increment Age
        </Button>
        <span>{isEven ? 'Even' :'odd'}</span>
        <Count text={'Salary'} count={s} />
        <Button onclick={usesCount} >
            Increment Salary
        </Button>
        <div>
            <Button onclick={useCallback(create,[isbox1])}>
                create
            </Button>
            <Button onclick={useCallback(del,[isbox2])}>
                delete
            </Button>
        </div>
        <div>
            {box}
        </div>
    </div>;
}

export default Parent;
