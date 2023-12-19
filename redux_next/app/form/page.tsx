'use client'

import React, { useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { updateFormData } from '../redux/features/formSlice';

const Page = () => {
  const [val, setVal] = useState()
  type Inputs = {
    name: string;
    fName: string;
    mName: string;
  };

  const dispatch = useAppDispatch();
  const formData = useAppSelector((state) => state.formReducer);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
  } = useForm<Inputs>();

  const submit: SubmitHandler<Inputs> = (data) => {
    console.log('data', data);
    dispatch(updateFormData(data));
    localStorage.setItem('formValues', JSON.stringify(data));
    let storedValues = localStorage.getItem('formValues') + "";
    let obj = JSON.parse(storedValues);
    setVal(obj);
    obj = {...obj, village: "dhanger"};
    localStorage.setItem('formValues', JSON.stringify(obj));
    // localStorage.setItem('formValues', JSON.stringify(storedValues));

    console.log("local storage", localStorage.getItem('formValues'))
  };

  // useEffect(() => {
  //   const storedValues = localStorage.getItem('formValues');
  //   if (storedValues) {
  //     const parsedValues = JSON.parse(storedValues);
  //     for (const key in parsedValues) {
  //       setValue(key as keyof Inputs, parsedValues[key]);
  //     }
  //   }
  // }, [setValue]);

  console.log('formdata is here-> ', formData);

  return (
    <>
      <form
        onSubmit={handleSubmit(submit)}
        className="text-2xl flex justify-center items-center my-44 flex-col gap-7"
      >
        <label htmlFor="">Enter name</label>
        <input
          type="text"
          placeholder="enter your name"
          {...register('name', {
            required: true,
            pattern: /^[A-Za-z]+$/i,
          })}
          className="ml-3 border border-black"
        />
        {errors.name?.type === 'pattern' && <span>enter valid values</span>}
        <input
          type="text"
          placeholder="enter father name"
          {...register('fName', {
            required: true,
          })}
          className="ml-3 border border-black"
        />
        {errors.fName && <span>This field is required</span>}
        <input
          type="text"
          placeholder="enter mother name"
          {...register('mName', {})}
          className="ml-3 border border-black"
        />
        {errors.mName && <span>This field is required</span>}

        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Page;
