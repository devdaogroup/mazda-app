import DynamicFormGenerator from "@/components/extras/DynamicInput";
import { Field, useForm } from "react-hook-form";

const formFields = [
  {
    name: "email",
    label: "Email",
    type: "text",
    validationRule: {
      required: "Please don't leave this field empty",
      pattern: {
        value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
        message: "Please enter a valid email address",
      },
    },
    isRequired: true,
  },
  {
    name: "password",
    label: "Password",
    type: "password",
    validationRule: {
      required: "Please don't leave this field empty",
      minLength: {
        value: 8,
        message: "Password must be at least 8 characters",
      },
    },
    isRequired: true,
  },
  // Add more fields as needed
];
export default function App() {
  const { control, handleSubmit } = useForm<Field>();

  return (
    <>
      <div className="p-4">
        <DynamicFormGenerator
          fields={formFields}
          control={control}
          handleSubmit={handleSubmit}
        />
      </div>
    </>
  );
}
