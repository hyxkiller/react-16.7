import React, { useState, useEffect } from 'react';

function Test() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        document.title = `${count} times`;
    }, [count])
    // const [isOnline, setIsOnline] = useState(null);
    // function handleStatusChange(status) {
    //     setIsOnline(status.isOnline);
    // }
    // useEffect(() => {
    //     ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
    //     return () => {
    //         ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    //     };
    // })
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    )
}

export default Test;