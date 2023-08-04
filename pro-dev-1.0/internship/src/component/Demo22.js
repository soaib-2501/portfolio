import React from 'react'

let arr = [{name:"soaib" , age:"22"},
 {name:"raj" , age:"21"},
 {name:"mahesh" , age:"23"},
 {name:"mihir" , age:"20"},
 {name:"mayank" , age:"24"} ];

export default function Demo22() {
    return(
    
        arr.map(
            (obj) => {
                return(
                    <>
                        <p>Your name is {arr.name} and your age is {arr.age} </p>
                    </>
                );
            }
        )
        
        
    );
}
