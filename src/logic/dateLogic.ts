export function compareDates(date1: Date, date2: Date): boolean {
	// Extract the year, month, and day from the first date
	const year1 = date1.getFullYear();
	const month1 = date1.getMonth();
	const day1 = date1.getDate();

	// Extract the year, month, and day from the second date
	const year2 = date2.getFullYear();
	const month2 = date2.getMonth();
	const day2 = date2.getDate();

	// Compare the year, month, and day parts of the dates
	return year1 === year2 && month1 === month2 && day1 === day2;
}
