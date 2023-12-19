'use client'
import React, { FC } from 'react'
import { useAppSelector } from "../redux/hooks";

const PageTwo: FC = () => {
  const form = useAppSelector(state => state.formReducer.name)
  return (
    <div>PageTwo
      <div>
        {form}
      </div>
    </div>
  )
}

export default PageTwo