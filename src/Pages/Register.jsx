// Register.jsx
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Input } from '@heroui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { registerSchema } from './Schemas/RegisterSchema';

import { signUp } from '../Services/AuthServices';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState(null);
  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
  });

  async function sendData(userData) {
    try {
      setLoading(true);
      setApiError(null);

      const res = await signUp(userData);
      console.log('Response from API:', res);

      if (res.message === 'success') {
        alert('✅ Registration successful!');
        navigate('/login');
      } else {
        setApiError(res.error || 'Something went wrong');
      }
    } catch (err) {
      console.error(err);
      setApiError('❌ Something went wrong!');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-white">
      <h4 className="text-4xl font-bold text-gray-900 mb-10">
        Register now and Join US
      </h4>

      <div className="bg-white border rounded-2xl shadow-xl py-10 px-8 w-full max-w-md">
        {apiError && (
          <div className="bg-red-100 text-red-600 p-3 rounded-lg mb-4 text-center text-sm">
            {apiError}
          </div>
        )}

        <form onSubmit={handleSubmit(sendData)} className="flex flex-col gap-5">
          <Input
            label="Name"
            isInvalid={!!errors.name}
            errorMessage={errors.name?.message}
            {...register('name')}
            variant="bordered"
          />

          <Input
            label="Email"
            isInvalid={!!errors.email}
            errorMessage={errors.email?.message}
            {...register('email')}
            variant="bordered"
          />

          <Input
            label="Password"
            type="password"
            isInvalid={!!errors.password}
            errorMessage={errors.password?.message}
            {...register('password')}
            variant="bordered"
          />

          <Input
            label="RePassword"
            type="password"
            isInvalid={!!errors.rePassword}
            errorMessage={errors.rePassword?.message}
            {...register('rePassword')}
            variant="bordered"
          />

          <Input
            label="Date of Birth"
            type="date"
            isInvalid={!!errors.dateOfBirth}
            errorMessage={errors.dateOfBirth?.message}
            {...register('dateOfBirth')}
            variant="bordered"
          />

          <div className="flex flex-col">
            <select
              {...register('gender')}
              className={`border rounded-lg p-2 w-full ${
                errors.gender ? 'border-red-500' : 'border-gray-300'
              }`}
            >
              <option value="">Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            {errors.gender && (
              <p className="text-red-500 text-sm mt-1">{errors.gender.message}</p>
            )}
          </div>

          <Button
            isLoading={loading}
            disabled={loading}
            type="submit"
            className={`mt-4 bg-black text-white rounded-xl py-3 text-lg hover:bg-gray-800 transition-all duration-200 ${
              loading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {loading ? 'Submitting...' : 'Submit'}
          </Button>
        </form>
      </div>
    </div>
  );
}
