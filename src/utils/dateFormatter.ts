export const dateFormatter = (
  date: string | Date,
  options?: Intl.DateTimeFormatOptions
) => {
  const dateObj = typeof date === "string" ? new Date(date) : date
  return new Intl.DateTimeFormat(
    "es-CO",
    options
      ? options
      : {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit"
        }
  ).format(dateObj)
}
