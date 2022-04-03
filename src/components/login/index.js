import React from "react";
import { InputText } from "../../components/ui/form/inputText";
import { useForm } from "../../hooks/useForm";
import { Button } from "../ui/button";
import styles from './styles.module.scss';
import { useValidation } from "./useValidation";


export const Login = props => {
    const { values, setFieldValue, error, setIsSubmitting, isSubmitting } = useForm();
    const { setDirty, isValid } = error;

    useValidation({ values, error });

    const handleSubmit = async e => {
        e.preventDefault();
        setDirty();
        if (!isValid) return;
        setIsSubmitting(true);
        setTimeout(() => {
            setIsSubmitting(false);
            alert(JSON.stringify(values));
        }, 3000);
    }

    return (
        <div className={styles.root}>
            <form onSubmit={handleSubmit} autoComplete="off" className={styles.form}>
                <div className={styles.field}>
                    <InputText
                        placeholder="Email"
                        name="email"
                        value={values.email}
                        onChange={e => setFieldValue('email', e.target.value)}
                        error={error}
                    />
                </div>
                <div className={styles.field}>
                    <InputText
                        placeholder="Password"
                        type="password"
                        name="password"
                        value={values.password}
                        onChange={e => setFieldValue('password', e.target.value)}
                        error={error}
                    />
                </div>
                
                    <Button
                        className={styles.btn}
                        type="submit"
                        label={isSubmitting ? 'Logging...' : 'Login'}
                    />
         
            </form>
        </div>
    )
}