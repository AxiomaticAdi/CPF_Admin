import { createContext } from "react";
import { Event } from "../types";

interface EventsContextType {
	events: Event[];
	isLoading: boolean;
}

// Initial state
const initialState: EventsContextType = {
	events: [],
	isLoading: true,
};

// Create the context
const EventsContext = createContext<EventsContextType>(initialState);

export default EventsContext;
