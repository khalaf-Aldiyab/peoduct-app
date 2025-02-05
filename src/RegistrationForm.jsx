import React from 'react';
import { useForm } from 'react-hook-form';
import './RegistrationForm.css'; 

const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log('تم إرسال البيانات:', data);
  };

  const password = watch('password'); 

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name">الاسم</label>
        <input
          id="name"
          {...register('name', { required: 'الاسم مطلوب' })}
        />
        {errors.name && <p>{errors.name.message}</p>}
      </div>

      <div>
        <label htmlFor="email">البريد الإلكتروني</label>
        <input
          id="email"
          type="email"
          {...register('email', {
            required: 'البريد الإلكتروني مطلوب',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'عنوان بريد إلكتروني غير صالح',
            },
          })}
        />
        {errors.email && <p>{errors.email.message}</p>}
      </div>

      <div>
        <label htmlFor="password">كلمة المرور</label>
        <input
          id="password"
          type="password"
          {...register('password', {
            required: 'كلمة المرور مطلوبة',
            minLength: {
              value: 8,
              message: 'يجب أن تكون كلمة المرور 8 أحرف على الأقل',
            },
          })}
        />
        {errors.password && <p>{errors.password.message}</p>}
      </div>

      <div>
        <label htmlFor="confirmPassword">تأكيد كلمة المرور</label>
        <input
          id="confirmPassword"
          type="password"
          {...register('confirmPassword', {
            required: 'تأكيد كلمة المرور مطلوب',
            validate: (value) =>
              value === password || 'كلمة المرور غير متطابقة',
          })}
        />
        {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
      </div>

      <button type="submit">تسجيل</button>
    </form>
  );
};

export default RegistrationForm;