import { useCallback, useState } from "react";
import FullCalendar, {
  DateSelectArg,
  EventApi,
  EventClickArg
} from "@fullcalendar/react";
import timeGridWeekPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

function App() {
  const [currentEvents, setCurrentEvents] = useState([]);
  const handleEvents = useCallback(
    (events) => setCurrentEvents(events),
    []
  );
  const handleDateSelect = useCallback((selectInfo) => {
    let title = prompt("Veuillez entrer le titre de l'événement")?.trim();
    let calendarApi = selectInfo.view.calendar;
    calendarApi.unselect();
    if (title) {
      calendarApi.addEvent({
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay
      });
    }
  }, []);
  const handleEventClick = useCallback((clickInfo) => {
    if (
      window.confirm(`Voulez-vous supprimer "${clickInfo.event.title}" ?`)
    ) {
      clickInfo.event.remove();
    }
  }, []);
  return (
        <FullCalendar
          plugins={[timeGridWeekPlugin, interactionPlugin]}
          initialView="timeGridWeek"
          selectable={true}
          editable={true}
          weekends={false}
          businessHours={true}
          slotMinTime={'6:00:00'}
          slotMaxTime={'20:00:00'}
          locale="fr"
          eventsSet={handleEvents}
          select={handleDateSelect}
          eventClick={handleEventClick}
          eventColor= "#fcb045"
          eventBorderColor='#fd1d1d'
          />
          
  );

}

export default App;
