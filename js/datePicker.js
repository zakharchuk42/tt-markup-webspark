export const initDatePicker = () => {
	flatpickr('.flatpickr', {
		dateFormat: "Y-m-d",
		wrap: true
	});
}