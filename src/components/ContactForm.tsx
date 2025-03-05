import React, { useEffect, useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import Button from './Button';
import { toast } from 'react-toastify';

const ContactForm = () => {
    const [state, handleSubmit] = useForm(
        process.env.NEXT_PUBLIC_FORMSPREE_ID || 'mvgzvjjz'
    );
    const [errorMessage, setErrorMessage] = useState('');

    const validateForm = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('Form submission triggered');

        const form = event.currentTarget;
        const subjectInput = form.subject as HTMLInputElement;
        const subjectValue = subjectInput.value;

        if (subjectValue.length < 20) {
            setErrorMessage('Subject must be at least 20 characters long');
        } else {
            setErrorMessage('');
            try {
                await handleSubmit(event);
            } catch (error) {
                console.error('Error submitting form:', error);
                setErrorMessage('An error occurred. Please try again later.');
            }
        }
    };

    useEffect(() => {
        console.log('Form state:', state);
        if (state.succeeded) {
            const form = document.querySelector('form') as HTMLFormElement;
            if (form) form.reset();
            toast.success('Message sent successfully!', {
                toastId: 'form-success',
                position: 'top-right',
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
        } else if (
            state.errors &&
            Array.isArray(state.errors) &&
            state.errors.length > 0
        ) {
            setErrorMessage('Failed to send message. Please try again.');
        }
    }, [state]);

    return (
        <div>
            <form
                onSubmit={validateForm}
                method="POST"
                className="middle:mt-[60px] mt-[30px]"
            >
                <div className="flex flex-col middle:gap-[20px] middle:px-0 phone:px-[30px] gap-[15px]">
                    <p>Let&apos;s do to talk about our future collaboration.</p>
                    <div className="flex lg:flex-row flex-col justify-between items-center gap-6 w-[100%] mt-4">
                        <div className="flex flex-col lg:w-[50%] w-[100%]">
                            <input
                                type="text"
                                name="fullname"
                                id="fullname"
                                required
                                className="contacts-field bg-transparent py-[10px] pl-2 border-b border-b-white30 text-base leading-5 font-light text-white placeholder-borderColor focus:outline-none"
                                placeholder="Enter your full name"
                            />
                            <ValidationError
                                prefix="Full Name"
                                field="fullname"
                                errors={state.errors}
                            />
                        </div>

                        <div className="flex flex-col lg:w-[50%] w-[100%]">
                            <input
                                type="email"
                                name="email"
                                id="email"
                                required
                                className="contacts-field bg-transparent py-[10px] pl-2 border-b border-b-white30 text-base leading-5 font-light text-white placeholder-borderColor focus:outline-none"
                                placeholder="example@email.com"
                                onChange={(
                                    event: React.ChangeEvent<HTMLInputElement>
                                ) => {
                                    if (event.target.value.length < 20) {
                                        console.log(
                                            'Message must be at least 20 characters long'
                                        );
                                    }
                                }}
                            />
                            <ValidationError
                                prefix="Email"
                                field="email"
                                errors={state.errors}
                            />
                        </div>
                    </div>
                </div>

                <div className="w-full flex flex-col middle:mt-[30px] mt-[20px] mb-5 middle:px-0 phone:px-[30px]">
                    <textarea
                        rows={2}
                        id="subject"
                        name="subject"
                        required
                        className="contacts-field bg-transparent py-[10px] pl-2 border-b border-b-white30 desktop:text-base  leading-5 font-light text-white placeholder-borderColor focus:outline-none"
                        placeholder="Tell me about your future project."
                    />
                    {errorMessage && (
                        <span className="text-red-500 text-sm mt-2">
                            {errorMessage}
                        </span>
                    )}
                    <ValidationError
                        prefix="Subject"
                        field="subject"
                        errors={state.errors}
                    />
                </div>
                <div className="w-full flex middle:justify-start justify-center mt-4">
                    <Button type="submit" disabled={state.submitting}>
                        Send message
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;
