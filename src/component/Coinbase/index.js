import Block from './block';
import React, { useState } from 'react';
function Coinbase(){
    var listBlock =[];
        listBlock.push({number: "1", chain: 1, nonce: "16651", coinbasevalue: '100.00', coinbaseto: 'Anders', txs: [], prev: '0000000000000000000000000000000000000000000000000000000000000000'})
        listBlock.push({number: "2", chain: 1, nonce: "215458", coinbasevalue: '100.00', coinbaseto: 'Anders', txs: [{value: '10.00', from: 'Anders', to: 'Sophia'},{value: '20.00', from: 'Anders', to: 'Lucas'},{value: '15.00', from: 'Anders', to: 'Emily'},{value: '15.00', from: 'Anders', to: 'Madison'}], prev: '0000438d7625b86a6f366545b1929975a0d3ff1f8847e56cc587cadddb0ab781'})
        listBlock.push({number: "3", chain: 1, nonce: "146", coinbasevalue: '100.00', coinbaseto: 'Anders', txs: [{value: '10.00', from: 'Emily', to: 'Jackson'},{value: '5.00', from: 'Madison', to: 'Jackson'},{value: '20.00', from: 'Lucas', to: 'Grace'}], prev: '0000baeab68c2a60f9a6fa56355438d97c672a15494fcea617064d9314f9ff63'})
        listBlock.push({number: "4", chain: 1, nonce: "18292", coinbasevalue: '100.00', coinbaseto: 'Anders', txs: [{value: '15.00', from: 'Jackson', to: 'Ryan'},{value: '5.00', from: 'Emily', to: 'Madison'},{value: '8.00', from: 'Sophia', to: 'Jackson'}], prev: '0000df1d632b734f5a5fc126a0f0e8894fb4c8314ba7086b62980559af6771b9'})
        listBlock.push({number: "5", chain: 1, nonce: "108899", coinbasevalue: '100.00', coinbaseto: 'Sophia', txs: [{value: '2.00', from: 'Jackson', to: 'Alexander'},{value: '6.00', from: 'Ryan', to: 'Carter'},{value: '4.00', from: 'Ryan', to: 'Riley'},{value: '9.95', from: 'Grace', to: 'Katherine'}], prev: '0000c694336f88129f3685bd3ba5d67c445dfd8d18bd22f5d87301dd560eb30e'})
   
    const [listBlocks, setListBlocks] = useState(listBlock);
    return (
        <>
            <h1>Coinbase page</h1>
            {
                listBlock.map((item, index) => {
                    return <Block key={listBlocks[index].prev} index={index} listBlocks ={listBlocks} onChange = {list => setListBlocks({...list})} />
                })
            }
        </>
    );

}


export default Coinbase;