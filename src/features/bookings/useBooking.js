import { useQuery } from "@tanstack/react-query";
import { getBooking } from "../../services/apiBookings";
import { useParams } from "react-router-dom";

export function useBooking() {
  const { bookingId } = useParams();
  const {
    isLoading,
    data: booking,
    error,
    // isError,
  } = {
    isLoading: true,
    data: { status: "helo", bookingId: 240 },
    error: "null",
  };

  return { isLoading, error, booking };
}
