const formato = new Intl.DateTimeFormat('es', { dateStyle: 'long', timeZone: 'UTC' });

export function fecha(d: Date): string {
  return formato.format(d);
}

export function fechaISO(d: Date): string {
  return d.toISOString().slice(0, 10);
}
