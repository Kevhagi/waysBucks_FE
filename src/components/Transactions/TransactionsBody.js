import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/esm/Button';
import Failed from './img/failed.svg'
import Success from './img/success.svg'

import { API } from '../../config/api'

function TransactionsBody() {

    const [allTransactions, setAllTransactions] = useState([])

    const getTransactions = async () => {
        try {
            const response = await API.get("/transactions")
            setAllTransactions(response.data.data.transactions)
        } catch (error) {
            console.log(error.response);
        }
    }

    console.log("allTransactions : ",allTransactions);

    useEffect(() => {
        getTransactions()
    }, [])

    return(
    <div className='container'>
        <h2 className='color1 my-5'>Income transaction</h2>
        
        <table class="table table-bordered">
            <thead className='table-secondary'>
                <tr>
                    <th>No</th>
                    <th>Name</th>
                    <th>Address</th>
                    <th style={{width:100}}>Post Code</th>
                    <th>Income</th>
                    <th style={{width:180}}>Status</th>
                    <th style={{width:250}}>Action</th>
                </tr>
            </thead>
            <tbody>
                {allTransactions.length !== 0 ? (
                    <>
                        {allTransactions.map((item, index) => {
                            if (item.status !== 'On Cart') {
                            return (
                                <tr>
                                    <td>{index+1}</td>
                                    <td>{item.nameOrder}</td>
                                    <td>{item.addressOrder}</td>
                                    <td>{item.postCodeOrder}</td>
                                    <td className='text-primary'>69.000</td>
                                    {item.status === 'Waiting Approve' ?
                                    <>
                                        <td className='text-warning'>{item.status}</td>
                                        <td className='d-flex justify-content-center'>
                                        <Button value="cancel" className='px-3 py-0 mx-2' variant="danger">Cancel</Button>
                                        <Button value="cancel" className='px-2 py-0 mx-2' variant="success">Approve</Button>
                                        </td>
                                    </>
                                    :
                                        <>
                                        {item.status === 'Success' ?
                                        <>
                                            <td className='text-success'>{item.status}</td>
                                            <td className='d-flex justify-content-center'>
                                            <img src={Success} alt="" />
                                            </td>
                                        </>
                                        :
                                            <>
                                            {item.status === 'Cancel' ?
                                            <>
                                                <td className='text-danger'>{item.status}</td>
                                                <td className='d-flex justify-content-center'>
                                                <img src={Failed} alt="" />
                                                </td>
                                            </>
                                            :
                                                <>
                                                {item.status === 'On The Way' ?
                                                <>
                                                    <td className='text-info'>{item.status}</td>
                                                    <td className='d-flex justify-content-center'>
                                                    <img src={Success} alt="" />
                                                    </td>
                                                </>
                                                    
                                                :
                                                    <>
                                                    <td></td>
                                                    <td></td>
                                                    </>
                                                }
                                                </>
                                            }
                                            </>
                                        }
                                        </>
                                    }                                    
                                </tr>
                            )    
                            }
                        })}
                    </>
                ) : (
                    <div>Data kosong</div>
                )}
            </tbody>
        </table>
    </div>
  )
}

export default TransactionsBody;
