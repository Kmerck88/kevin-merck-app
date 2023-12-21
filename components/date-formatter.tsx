import { parseISO, format } from "date-fns";

type Props = {
  dateString: string;
};

const DateFormatter = ({ dateString }: Props) => {
  let currentdate = new Date();
  let datetime =
    "Current Date and Time: " +
    currentdate.getDate() +
    "/" +
    (currentdate.getMonth() + 1) +
    "/" +
    currentdate.getFullYear() +
    " @ " +
    currentdate.getHours() +
    ":" +
    currentdate.getMinutes() +
    ":" +
    currentdate.getSeconds();

  return (
    <time dateTime={dateString}>{format(currentdate, "LLLL	d, yyyy")}</time>
  );
};

export default DateFormatter;
