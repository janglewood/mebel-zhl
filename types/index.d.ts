export type FieldErrors<TFieldValues extends FieldValues = FieldValues> =
  DeepMap<TFieldValues, FieldError>;
