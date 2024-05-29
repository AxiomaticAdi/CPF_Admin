export type Event = {
	id: string;
	name: string;
	description: string;
	imageUrl: string;
	startTime: Date;
	endTime: Date;
	capacity: number;
	sold: number;
	price: number;
};

export type Customer = {
	id: string;
	name: string;
	email: string;
};

export type Sale = {
	id: string;
	eventId: string;
	ticketQuantity: number;
	customerId: string;
};

export type EventCustomer = {
	customerId: string;
	eventId: string;
	saleId: string;
	name: string;
	email: string;
	ticketQuantity: number;
};
