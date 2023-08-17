import { useRouter } from 'next/router'
import React, { useReducer } from 'react'

const history = () => {
  const router = useRouter()
  const { pid } = router.query;
  return (
    <div>history {pid}</div>
  )
}

export default history