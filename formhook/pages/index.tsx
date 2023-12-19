import { Inter } from '@next/font/google'
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form'
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { updateFormData } from '../redux/features/formSlice';
import Form from './form';


const inter = Inter({ subsets: ['latin'] })

type Inputs = {
  name: string,
  fName: string,
  mName: string,
}

export default function Home() {
  const dispatch = useAppDispatch();
  const formData = useAppSelector((state) => state.formReducer)
  const{register, handleSubmit, reset, resetField, formState: {errors},} = useForm<Inputs>();

  const submit: SubmitHandler<Inputs> = (data) => {
    console.log("data", data);
    dispatch(updateFormData(data));
  }
  console.log("formdata is here-> ", formData)


  return (
    <>
     <form onSubmit={handleSubmit(submit)} className='text-2xl flex justify-center items-center my-44 flex-col gap-7'>
        <label htmlFor="">Enter name</label>
        <input 
          type="text"
          placeholder='enter your name'
          {...register("name", {
            required: true,
            pattern: /^[A-Za-z]+$/i,
          })}
          className='ml-3 border border-black'
        />
        {errors.name?.type === 'pattern' && <span>enter valid values</span>}
        <input 
          type="text"
          placeholder='enter father name'
          {...register("fName", {
            required: true,
          })}
          className='ml-3 border border-black'
        />
        {errors.fName && <span>This field is required</span>}
        <input 
          type="text"
          placeholder='enter mother name'
          {...register("mName", {
            
          })}
          className='ml-3 border border-black'
        />
        {errors.mName && <span>This field is required</span>}

        <button type='submit'>Submit</button>
     </form>
     <Form/>
    </>
  )
}
