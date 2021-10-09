
import { useState, useEffect } from "react";
import React from 'react'

const CallGet = () => {

    const baseUrl = 'https://back-sandbox.herokuapp.com/api'
    const [button, setButton]  = useState([]);

    const showData = async () => {

        try {

            const response = await fetch (baseUrl ,
                {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: " Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNWY3OTQxNGVmYmQ2MDAwNDg2ZWQ1NyIsImlhdCI6MTYzMzgyMTkwNH0.xpM7MURKqZICqlIWsktbf5ReG2BzmhP0uTr5NzQ1cnk"
                    }
                    
                
                } );

                const json = await response.json(
                    console.log(json.data)
                )
            
        } catch (error) {
            alert(error);
        }
    }

    return (
        <div>
            <button onClick={showData} type='button'>Enviar letra</button>
        </div>
    )
}





export default CallGet;