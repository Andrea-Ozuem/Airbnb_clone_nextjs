import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function on<T extends Event>(
  eventType: string,
  selector: string,
  callback: (event: T) => void,
  options?: AddEventListenerOptions
) {
  document.addEventListener(
    eventType,
    (e) => {
      if (e.target instanceof Element) {
        const target = e.target.closest(selector);
        if (target) {
          callback(e as unknown as T);
        }
      }
    },
    options
  );
}