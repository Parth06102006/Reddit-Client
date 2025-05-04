import React, { ReactElement } from 'react'

interface ButtonProps{
    variant:'primary'|'secondary';
    size:'sm'|'md'|'lg';
    text?:string;
    onClick?:()=>void;
    change?:()=>void;
    startIcon?:ReactElement;
    endIcon?:ReactElement;
    loading?:boolean;
}

type VariantStyling = {
    primary:string,
    secondary:string,
}

type SizeStyling = {
    sm:string,
    md:string,
    lg:string
}

const styling:VariantStyling = {
    primary:'bg-linear-to-r from-red-400 to-orange-500 text-zinc-200 hover:text-gray-600',
    secondary:'bg-linear-to-br from-red-200 to-orange-200 text-gray-600 hover:bg-blue-300 hover:text-white'
}

const sizeButton:SizeStyling = {
    sm:'px-4 py-2 text-1xl',
    md:'px-6 py-4 text-2xl',
    lg:'px-8 py-6 text-3xl'
}

const defaultStyling = 'rounded font-bold cursor-pointer shadow-[0px_3px_8px_rgba(0,0,0,0.5)]'

export const Button = (props: ButtonProps) => {
  return (
    <div className={`${styling[props.variant]} ${sizeButton[props.size]} ${defaultStyling}`} onClick={props.onClick||props.change
        
    }>
        {props.startIcon && <div className='flex items-center'>{props.startIcon}</div>}
        {props.text}
        {props.endIcon ? <div className='pr-3'>{props.endIcon}</div> : null}
    </div>
  )
}