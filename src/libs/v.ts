export const is_undefined = (value: unknown): value is undefined => typeof value === 'undefined';
export const is_string = (value: unknown): value is string => typeof value === 'string';
export const is_number = (value: unknown): value is number => typeof value === 'number';
export const is_boolean = (value: unknown): value is boolean => typeof value === 'boolean';
export const is_object = (value: unknown): value is object => typeof value === 'object' && value != null;
export const is_string_nullable = (value: unknown): value is string | null => value === null || typeof value === 'string';
export const is_number_nullable = (value: unknown): value is number | null => value === null || typeof value === 'number';
export const is_boolean_nullable = (value: unknown): value is boolean | null => value === null || typeof value === 'boolean';
export const is_object_nullable = (value: unknown): value is object | null => value === null || typeof value === 'object';
export const is_in_object_and_type = <K extends string, T>(key: K, target: object, fn: (value: unknown) => value is T): target is object & { [key in K]: T } =>
  key in target && fn(target[key as keyof typeof target]);

export const is_optional_in_object_and_type = <K extends string, T>(key: K, target: object, fn: (value: unknown) => value is T): target is object & { [key in K]: T | undefined } =>
  key in target ? fn(target[key as keyof typeof target]) : true;
