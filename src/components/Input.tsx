interface InputProps{
    placeholder:string,
    variant:'primary'|'secondary',
    size:'sm'|'md'|'lg',
    onChange?:(e:React.ChangeEvent<HTMLInputElement>)=>void
}

type VariantStyling = {
    primary:string,
    secondary:string
}

const styling:VariantStyling = {
    primary:'bg-linear-to-br from-orange-100 to-red-400 placeholder-gray-500 text-white',
    secondary:'bg-linear-to-br from-orange-500 to-red-600 placeholder-white'
}

type SizeStyling = {
    sm:string,
    md:string,
    lg:string
}

const sizeInput:SizeStyling = {
    sm:'px-4 py-2 text-1xl',
    md:'px-6 py-4 text-2xl',
    lg:'px-8 py-6 text-3xl'
}

const defaultStyling = 'text-center rounded shadow-[0px_5px_15px_rgba(0,0,0,0.6)] focus:text-white focus:border-none'

const Input = (props: InputProps) => {
  return (
    <input type="text" className={`${defaultStyling} ${sizeInput[props.size]} ${styling[props.variant]}`} placeholder={props.placeholder} onChange={props.onChange}/>
  )
}

export {Input}