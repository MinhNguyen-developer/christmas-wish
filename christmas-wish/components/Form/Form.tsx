import {FC, useRef} from "react";
import {FormProvider, useForm, Controller} from "react-hook-form";
import InputGroup from "../InputGroup/InputGroup";
import Button from "../Button/Button";
import TextAreaGroup from "../TextAreaGroup/TextAreaGroup";
import {useRouter} from "next/router";

const Form:FC = () => {
    const methods = useForm()
    const router = useRouter()
    const resetRef = useRef<HTMLInputElement>(null)

    const handleSubmit = (formData: any) => {
        console.log(formData);
        methods.reset()
        resetRef.current?.click()
        return router.push('/')
    }
    return <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(handleSubmit)}>
            <Controller render={({   field: {onChange, value}, formState: {errors}}) => {
                return <InputGroup value={value} onChange={onChange} required={true} inputFieldText={'Your name'} error={errors['userName']}  />
            }} name={'userName'} />
            <Controller render={({   field: {onChange, value}, formState: {errors}}) => {
                return <TextAreaGroup value={value} onChange={onChange} required={true} textAreaFieldText={'Your wish'} />
            }} name={'wish'} />
            <Button type='submit' full>Send to Santa</Button>
            <input className='hidden' type='reset'  ref={resetRef}/>
        </form>
    </FormProvider>
}

export default Form