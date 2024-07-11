import { createContext } from "@/lib/context/create-context";
import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";


const RADIO_GROUP_NAME = 'RadioGroup';
const ITEM_NAME = 'RadioGroupItem';
const INDICATOR_NAME = 'RadioGroupIndicator';

type RadioGroupContextValue = {
    name?: string;
    disabled: boolean;
    value?: string;
    onValueChange(val: string): void;
};

type RadioGroupItemContextValue = {
    checked: boolean;
    disabled: boolean
}

const [RadioGroupProvider, useRadioGroupContext] =
    createContext<RadioGroupContextValue>(RADIO_GROUP_NAME);

interface RadioGroupProps {
    name?: RadioGroupContextValue['name'];
    disabled?: RadioGroupContextValue['disabled'];
    defaultValue?: string;
    value: RadioGroupContextValue['value'];
    onValueChange: RadioGroupContextValue['onValueChange'];
    className?: string;
    children: React.ReactNode
}

const RadioGroup = (props: RadioGroupProps) => {
    const {
        name,
        defaultValue,
        value,
        disabled = false,
        onValueChange,
        className,
        children
    } = props;

    return (
        <RadioGroupProvider
            name={name}
            disabled={disabled}
            value={value ?? defaultValue}
            onValueChange={onValueChange}
        >
            <div className={className} role='radiogroup'>
                {children}
            </div>
        </RadioGroupProvider>

    );
}


RadioGroup.displayName = RADIO_GROUP_NAME;


type RadioItemProps = React.ComponentPropsWithoutRef<'input'>;
interface RadioGroupItemProps extends Omit<RadioItemProps, 'value'> {
    value: string;
    disabled?: boolean;
    children: ReactNode | string
}

const RadioGroupItem = (props: RadioGroupItemProps) => {
    const context = useRadioGroupContext(ITEM_NAME);
    const isDisabled = context.disabled || props.disabled
    const checked = context.value === props.value;

    return (
        <label className={cn("flex gap-2 items-center cursor-pointer", isDisabled && 'cursor-not-allowed', props.className)}>
            <input
                type='radio'
                disabled={isDisabled}
                name={context.name}
                aria-checked={checked}
                aria-disabled={isDisabled}
                aria-label={props.value}
                className={'w-0 h-0'}
                onClick={() => { context.onValueChange(props.value) }}
            />
            <RadioGroupIndicator checked={checked} />
            {props.children}
        </label>
    );
}

RadioGroupItem.displayName = ITEM_NAME;


interface RadioGroupIndicatorProps {
    checked: boolean
}

const RadioGroupIndicator =
    (props: RadioGroupIndicatorProps) => <div className={cn("relative rounded-full border-2 w-8 h-8 bg-white", props.checked && 'border-primary')} >
        {props.checked && <div className="absolute rounded-full border-8 border-primary top-0 left-0 w-7 h-7 " />}
    </div>


RadioGroupIndicator.displayName = INDICATOR_NAME;


export {
    RadioGroup, RadioGroupItem
};

