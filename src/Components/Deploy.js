import React, { useEffect, useState } from 'react';
import { abi, bytecode } from '../Contracts/Config';
import Web3 from 'web3';
const Deploy = ({name,symbol,decimals,totalSupply}) => {
    const [address,setAddress]=useState(null);
    const [isLoading,setIsLoading]=useState(true);
    useEffect(() => {
        const deploy = async () => {
            await window.ethereum.enable();
            const web3=new Web3(window.web3.currentProvider);
            const accounts = await web3.eth.getAccounts();
            console.log('Attempting to deploy from account', accounts[0]);
            
            const result = await new web3.eth.Contract(abi)
                .deploy({ data: bytecode, arguments: [name, symbol, decimals, totalSupply] })
                .send({ from: accounts[0] });

            console.log('Contract deployed to', result.options.address);
            setAddress(result.options.address);
            setIsLoading(false);
        }
        deploy();

    })

    return (
        <div>
            {isLoading ? <div>loading ...</div> :<a href={"https://rinkeby.etherscan.io/address/"+address}>Contract Link</a>}
        </div>
    )
}

export default Deploy;
