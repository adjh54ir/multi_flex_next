import { useEffect } from "react"

const closure = () => {

    useEffect(() => {
        console.log(fn_counter().value()); // logs 0
        fn_counter().increment(1);
        fn_counter().increment(1);
        console.log(fn_counter().value()); // logs 2
        fn_counter().decrement(1);
        console.log(fn_counter().value()); // logs 1
    }, []);


    const outerFunc = () => {
        let x = 1000;

        let innerFunc = () => {
            console.log(x);
        }
        return innerFunc;
    }

    const fn_counter = function () {
        let count = 0;

        const changeBy = (value: number) => {
            count += value;
        }

        return {
            increment: (num: number): void => {
                return changeBy(1);
            },
            decrement: (num: number) => {
                return changeBy(-1)
            },
            value: () => {
                console.log(count);
                return count;
            }
        }
    }


    return (
        <div>

        </div>
    )

}
export default closure