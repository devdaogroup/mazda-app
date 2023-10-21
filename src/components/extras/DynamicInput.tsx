import { Controller, useForm } from "react-hook-form";

export type Field = {
  name: string;
  label: string;
  type: string;
  validationRule: Record<string, string | Record<string, string>>;
  isRequired: boolean;
};

type FormFields = Field[];

type FormData = Record<string, string>;

export default function App({ control, handleSubmit, fields }: any) {
  const {
    formState: { errors },
  } = useForm();

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 rounded-lg shadow-md max-w-md w-full"
      >
        {fields.map((field, index: number) => (
          <div key={index} className="mb-4">
            <label
              htmlFor={field.name}
              className="block text-sm font-medium text-gray-700"
            >
              {field.label}
            </label>
            <Controller
              name={field.name}
              control={control}
              defaultValue=""
              rules={field.validationRule}
              render={({ field }) => (
                <div>
                  <input
                    {...field}
                    type={field.type}
                    className="text-black w-full mt-1 p-2 rounded-md border border-gray-300 focus:ring focus:ring-indigo-500 focus:border-indigo-500"
                    required={field.isRequired}
                  />
                  {errors[field.name] && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors[field.name].message}
                    </p>
                  )}
                </div>
              )}
            />
          </div>
        ))}

        <div>
          <button
            type="submit"
            className="w-full bg-indigo-500 text-white font-semibold py-2 px-4 rounded-md"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
