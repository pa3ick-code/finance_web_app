import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Control, FieldPath, useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  FormControl,
  FormField,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input";
import { authFormSchema } from "@/lib/utils"

const formSchema = authFormSchema('sign-up');

interface CustomInputProps{
  name: FieldPath<z.infer<typeof formSchema>>
  label: string;
  placeholder: string;
  type?: string;
<<<<<<< HEAD
  control: Control<z.infer<typeof formSchema>>;
  disabled: boolean;
}

export default function CustomInput({name, type, label, placeholder, control, disabled}: CustomInputProps) {
=======
  control: Control<z.infer<typeof formSchema>>
}

export default function CustomInput({name, type, label, placeholder, control}: CustomInputProps) {
>>>>>>> origin/main
  return (
    <div>
       <FormField
        control={control}
        name={name}
        render={({ field }) => (
          <div className="form-item">
            <FormLabel className="form-label"> {label} </FormLabel>
            <div className="flex w-full flex-col">
              <FormControl>
                <Input 
                  placeholder={placeholder}
                  className="input-class"
                  type={type}
<<<<<<< HEAD
                  disabled = {disabled}
=======
>>>>>>> origin/main
                  {...field}
                /> 
              </FormControl>
              <FormMessage className="form-message  mt-2" />
            </div>
          </div>
        )}
        />
    </div>
  );
}
