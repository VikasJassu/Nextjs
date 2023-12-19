import { Inter } from '@next/font/google'
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form'
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { updateFormData } from '../redux/features/formSlice';


const inter = Inter({ subsets: ['latin'] })

type Inputs = {
  name: string,
  fName: string,
  mName: string,
}

export default function Form() {
  const dispatch = useAppDispatch();
  const formData = useAppSelector((state) => state)
  const{register, handleSubmit, reset, resetField, formState: {errors},} = useForm<Inputs>();

  const submit: SubmitHandler<Inputs> = (data) => {
    console.log("data", data);
    dispatch(updateFormData(data));
  }
  console.log("formdata is here-> ", formData)


  return (
    <>
     <form onSubmit={handleSubmit(submit)} className='text-2xl flex justify-center items-center my-44 flex-col gap-7'>
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
    </>
  )
}
