import { useEffect, useState } from 'react'
import countapi from 'countapi-js'
import { Wrapper, Text, Hits } from './styles'
import p1 from './asset/eye.png';

function Counter() {
    const [count, setCount] = useState();

    useEffect(() => {
        countapi.update('github.com', 'fastboot', 1);
        countapi.get('github.com', 'fastboot').then((result) => {
            console.log(result.value);
            setCount(result.value);
        });
    }, [])

    return (
        <Wrapper>
            <Text> <img src = {p1} alt = "eye" /> VISITORS </Text>
            <Hits> {count} </Hits>
        </Wrapper>
    );
}

export default Counter;