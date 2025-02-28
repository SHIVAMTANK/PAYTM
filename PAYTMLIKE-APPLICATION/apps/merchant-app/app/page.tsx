"use client"

import {useBalance} from "@repo/store/balance"

export default function(){
  const balance = useBalance();
  return (
    <div>
      <h1>Balance: {balance}</h1>
    </div>
  )
}