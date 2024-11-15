class ValueHolder<TypeForValueProperty> {
    value: TypeForValueProperty;
}

const numberHolder = new ValueHolder<number>();
numberHolder.value; // TS knows now that the value prop is of type number

// function generics

const valueWrapper = <T>(value: T): T[] => {
    return [value];
}

valueWrapper<number>(10);