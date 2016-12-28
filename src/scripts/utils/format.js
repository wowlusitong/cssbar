/* @flow */

export function toSnakecase(camel: string): string {
  return camel.replace(/[A-Z]/g, (v, i) => (i > 0 ? '-' : '') + v.toLowerCase());
}

export function toCamelcase(snake: string): string {
  return snake.replace(/(^|-)(\w)/g, (v, $1, $2) => $2.toUpperCase());
}
