import { useController } from "react-hook-form"
import './index.css';

export const TextField = ({children, fieldName, control, error, ...props}) => {
    const { field } = useController({
        name: fieldName,
        control: control
    });

    return (
        <div className="form-group">
            <label className="form-label">{children}</label>
            <input
                onChange={field.onChange}
                onBlur={field.onBlur}
                value={field.value}
                name={field.name}
                ref={field.ref} 
                className="form-control" 
                {...props}
            />
            {
                error && <div className="form-error">{error}</div>
            }
        </div>
    )
}