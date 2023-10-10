import { ProcessedTable } from '../../components/ProcessedTable'
import React, { useState, useEffect } from 'react';
import axiosInstance from '../../helpers/axiosInstance';
import { WalletTable } from '../../components/WalletTable';

function WalletWrapper() {

  return (
    <div>
      <WalletTable className='' title={'Wallet'}/>
    </div>
  )
}

export default WalletWrapper;