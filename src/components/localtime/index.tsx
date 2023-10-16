import * as S from './styles'
import CalendarImg from '@/assets/calendar.svg'

type Props = {
	locale: string;
  };
  
  function formatDate(date: Date, locale: string): string 
  {
	const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric' };
	return date.toLocaleDateString(locale, options);
  }
  
  function CurrentDate({ locale }: Props) {
	const currentDate = new Date();
	const formattedDate = formatDate(currentDate, locale);
  
	return (
	  <S.Body>
		<img src={CalendarImg}></img>
		<p>{formattedDate}</p>
	  </S.Body>
	);
  }

export default CurrentDate