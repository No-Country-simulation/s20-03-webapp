'use client'
// Este componente solo existe para probar ReactHookForm; por favor, eliminarlo

import { useForm } from 'react-hook-form'

interface Form {
  test: string
}

export const TestForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Form>()
  const onSubmit = handleSubmit(data => {
    console.log(data)
  })
  return (
    <>
      <h2>{`</Formulario con ReactHookForm>`}</h2>
      <form
        onSubmit={onSubmit}
        className="flex max-w-sm flex-col gap-2 bg-red-200 p-4"
      >
        <label htmlFor="test">Texto</label>
        <input
          type="text"
          {...register('test', {
            required: 'El campo es requerido',
            minLength: {
              value: 3,
              message: 'El campo debe tener al menos 3 caracteres',
            },
          })}
          id="test"
        />
        {errors.test && (
          <span className="text-sm font-semibold text-red-500">
            {errors.test.message}
          </span>
        )}
        <div className="flex w-full gap-2">
          <button
            type="button"
            onClick={() => reset()}
            className="w-full bg-red-400"
          >
            Limpiar
          </button>
          <button type="submit" className="w-full bg-red-400">
            Enviar
          </button>
        </div>
      </form>
    </>
  )
}
