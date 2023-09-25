import React from 'react'
import { WaitingForApprovalTable } from '../../components/WaitingForApprovalTable'
import { RejectedTable } from '../../components/RejectedTable'

function RejectedWrapper() {
  return (
    <div>
      <RejectedTable className='' title={'Visa Rejected'} />
    </div>
  )
}

export default RejectedWrapper