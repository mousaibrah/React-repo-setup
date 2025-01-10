import { resources } from './resources';

type DefaultLocale = typeof resources.en.translation;

export type TxKeyPath = RecursiveKeyOf<DefaultLocale>;

type RecursiveKeyOf<TObj extends object> = {
  [TKey in keyof TObj & (string | number)]: RecursiveKeyOfHandleValue<TObj[TKey], `${TKey}`, true>;
}[keyof TObj & (string | number)];

type RecursiveKeyOfInner<TObj extends object> = {
  [TKey in keyof TObj & (string | number)]: RecursiveKeyOfHandleValue<TObj[TKey], `${TKey}`, false>;
}[keyof TObj & (string | number)];

type RecursiveKeyOfHandleValue<TValue, Text extends string, IsFirstLevel extends boolean> =
  TValue extends Array<unknown> ? Text : TValue extends object ? (IsFirstLevel extends true ? Text | `${Text}:${RecursiveKeyOfInner<TValue>}` : Text | `${Text}.${RecursiveKeyOfInner<TValue>}`) : Text;

export function isValidKey(key: string): key is TxKeyPath {
  return key in resources.en.translation;
}
