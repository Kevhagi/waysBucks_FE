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

    const handleApprove = async (id) => {
        const body = {status : 'On The Way'}
        const response = await API.patch(`/transaction/${id}`, body)
        alert(`Order ${id} on the way!`)

        if (response?.status == 200) {            
        document.location.reload(true)
        }
    }

    const handleCancel = async (id) => {
        const body = {status: 'Cancel'}
        const response = await API.patch(`/transaction/${id}`, body)
        alert(`Order ${id} cancelled!`)

        if (response?.status == 200) {            
        document.location.reload(true)
        }
    }

    const handleSuccess = async (id) => {
        const body = {status: 'Success'}
        const response = await API.patch(`/transaction/${id}`, body)
        alert(`Order ${id} done!`)

        if (response?.status == 200) {            
        document.location.reload(true)
        }
    }

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
                                    <td>{item.id}</td>
                                    <td>{item.nameOrder}</td>
                                    <td>{item.addressOrder}</td>
                                    <td>{item.postCodeOrder}</td>
                                    <td className='text-primary'>{item.totalAmount}</td>
                                    {item.status === 'Waiting Approve' ?
                                    <>
                                        <td className='text-warning'>{item.status}</td>
                                        <td className='d-flex justify-content-center'>
                                        <Button onClick={()=>{handleCancel(item.id)}} className='px-3 py-0 mx-2' variant="danger">Cancel</Button>
                                        <Button onClick={()=>{handleApprove(item.id)}} className='px-2 py-0 mx-2' variant="success">Approve</Button>
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
                                                    <img onClick={()=>{handleSuccess(item.id)}} style={{cursor:"pointer"}} src={Success} alt="" />
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
