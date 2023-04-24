interface Props{
    name: string,
    register(name: string):{},
    errors:Error,
    type?: string
}
const Input = ({name,register,errors,type="text"}:Props) => {
    return (
        <>
        <div className="mb-3">
        <label htmlFor={name} className="form-label">
          {name.toUpperCase()}
        </label>
        <input
          {...register(name)}
          id={name}
          type={type}
          className="form-control"
        />
        {errors[name] && <p className="text-danger">{errors[name].message}</p>}
      </div>
      </>
    );
}

export default Input;