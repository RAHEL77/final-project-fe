import React from 'react'

export default function CaseItem(props) {
    const {case1}=props;
        return (
        <div>
            <div>{case1.description}</div>
            <div>{case1.isDone}</div>
            <div>{case1.maintenanceSupplier}</div>
            <div>{case1.costOfFix}</div>
            <div>{case1.user}</div>
        </div>
    )
}
