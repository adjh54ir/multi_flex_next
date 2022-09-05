import { useEffect } from "react"

const closure = () => {

    useEffect(() => {
        console.log(fn_counter().value()); // logs 0
        fn_counter().increment();
        fn_counter().increment();
        console.log(fn_counter().value()); // logs 2
        fn_counter().decrement();
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
            increment: (): void => {
                return changeBy(1);
            },
            decrement: () => {
                return changeBy(-1)
            },
            value: () => {
                console.log(count);
                return count;
            }
        }
    }

    const btnControl = () => {


        return {
            onClick: () => {

            },
            onChange: () => {

            }
        }

    }


    // const callInnerFunc = outerFunc();
    // callInnerFunc();    // 1000

    return (
        <div>

        </div>
    )

}
export default closure