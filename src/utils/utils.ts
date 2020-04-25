export function getSize(size: string): string {
  return (size !== undefined) ? size : '1em';
}

export function getClasses(name: string): string {
  return (name !== undefined) ? `feather feather-${name}` : 'feather';
}

export function getStroke(stroke: string): string {
  return (stroke !== undefined) ? stroke : '2';
}

export function getSpriteIcon(path: string, name: string): string {
  return `${path}#${name}`;
}