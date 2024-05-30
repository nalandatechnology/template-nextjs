/** Utils for using Aceternity UI
 *  https://ui.aceternity.com/docs/add-utilities
 */
import { ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
