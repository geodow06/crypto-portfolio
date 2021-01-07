import React from 'react';
import Price from '../class/Price';
function AssetRow(props,service) {
    if (props.type === 'fiat' || parseFloat(props.balance.amount) === 0) return <div/>;
    return (
        <table>
            <tbody>
                <tr>
                    <td>
                        <h5>{props.currency.code}</h5>
                    </td>
                    <td>
                        <h5>{props.balance.amount}</h5>
                    </td>
                    <td>
                        <h5><Price service={service} ticker={props.currency.code}/></h5>
                    </td>
                </tr>
            </tbody>
        </table>
    );
}

export default AssetRow;