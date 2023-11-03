export default function Input({label, id, tag, ...props}) {
  const FormTag = tag;

  return (
    <>
      <label htmlFor={id}>
        {label}
      </label>
      <FormTag id={id} {...props}></FormTag>
    </>
  )
}
