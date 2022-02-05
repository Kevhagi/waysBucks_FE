import React from 'react';
import Button from 'react-bootstrap/esm/Button';
import Failed from './img/failed.svg'
import Success from './img/success.svg'

function TransactionsBody() {
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
                <tr>
                    <td>1</td>
                    <td>Sugeng No Pants</td>
                    <td>Cileungsi</td>
                    <td>16820</td>
                    <td className='text-primary'>69.000</td>
                    <td className='text-warning'>Waiting Approve</td>
                    <td className='d-flex justify-content-center'>
                        <Button value="cancel" className='px-3 py-0 mx-2' variant="danger">Cancel</Button>
                        <Button value="cancel" className='px-2 py-0 mx-2' variant="success">Approve</Button>
                    </td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Haris Gams</td>
                    <td>Serang</td>
                    <td>42111</td>
                    <td className='text-primary'>30.000</td>
                    <td className='text-success'>Success</td>
                    <td className='d-flex justify-content-center'>
                        <img src={Success} alt="" />
                    </td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Aziz Union</td>
                    <td>Bekasi</td>
                    <td>13450</td>
                    <td className='text-primary'>28.000</td>
                    <td className='text-danger'>Cancel</td>
                    <td className='d-flex justify-content-center'>
                    <img src={Failed} alt="" />
                    </td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Lae Tanjung Balai</td>
                    <td>Tanjung Balai</td>
                    <td>21331</td>
                    <td className='text-primary'>30.000</td>
                    <td className='text-info'>On The Way</td>
                    <td className='d-flex justify-content-center'>
                    <img src={Success} alt="" />
                    </td>
                </tr>
            </tbody>
        </table>

    </div>
  )
}

export default TransactionsBody;
