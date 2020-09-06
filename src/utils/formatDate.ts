import { parseISO, format } from "date-fns";

const formatDate = (date: Date): string => {
  return new Date(date).toLocaleDateString('pt-br')
}

export default formatDate;
