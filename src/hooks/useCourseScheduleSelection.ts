import { useMemo, useState } from "react";
import useCourseSessionTypes from "../api/hooks/useCourseSessionTypes";
import useCourseTimeSlots from "../api/hooks/useCourseTimeSlots";
import type { WeeklyScheduleOption } from "../types/courseDetail";

interface UseCourseScheduleSelectionParams {
  courseId: number;
  courseBasePrice: number;
  weeklySchedules: WeeklyScheduleOption[];
}

const toSafeNumber = (value: unknown) => {
  const amount = Number(value);
  return Number.isFinite(amount) ? amount : 0;
};

const useCourseScheduleSelection = ({
  courseId,
  courseBasePrice,
  weeklySchedules,
}: UseCourseScheduleSelectionParams) => {
  const [selectedWeeklyScheduleId, setSelectedWeeklyScheduleId] = useState<
    number | null
  >(null);
  const [selectedTimeSlotId, setSelectedTimeSlotId] = useState<number | null>(
    null,
  );
  const [selectedSessionTypeId, setSelectedSessionTypeId] = useState<
    number | null
  >(null);

  const { data: timeSlotsResponse, isLoading: isTimeSlotsLoading } =
    useCourseTimeSlots(courseId, selectedWeeklyScheduleId ?? undefined);
  const timeSlots = useMemo(
    () => timeSlotsResponse?.data ?? [],
    [timeSlotsResponse],
  );

  const { data: sessionTypesResponse, isLoading: isSessionTypesLoading } =
    useCourseSessionTypes(
      courseId,
      selectedWeeklyScheduleId ?? undefined,
      selectedTimeSlotId ?? undefined,
    );
  const sessionTypes = useMemo(
    () => sessionTypesResponse?.data ?? [],
    [sessionTypesResponse],
  );

  const handleWeeklyScheduleChange = (weeklyScheduleId: number) => {
    if (weeklyScheduleId === selectedWeeklyScheduleId) {
      return;
    }

    setSelectedWeeklyScheduleId(weeklyScheduleId);
    setSelectedTimeSlotId(null);
    setSelectedSessionTypeId(null);
  };

  const handleTimeSlotChange = (timeSlotId: number) => {
    if (timeSlotId === selectedTimeSlotId) {
      return;
    }

    setSelectedTimeSlotId(timeSlotId);
    setSelectedSessionTypeId(null);
  };

  const handleSessionTypeChange = (sessionTypeId: number) => {
    setSelectedSessionTypeId(sessionTypeId);
  };

  const selectedWeeklySchedule = useMemo(
    () =>
      weeklySchedules.find(
        (weeklySchedule) => weeklySchedule.id === selectedWeeklyScheduleId,
      ),
    [weeklySchedules, selectedWeeklyScheduleId],
  );

  const selectedTimeSlot = useMemo(
    () => timeSlots.find((timeSlot) => timeSlot.id === selectedTimeSlotId),
    [timeSlots, selectedTimeSlotId],
  );

  const selectedSessionType = useMemo(
    () =>
      sessionTypes.find(
        (sessionType) => sessionType.id === selectedSessionTypeId,
      ),
    [sessionTypes, selectedSessionTypeId],
  );

  const sessionTypeModifier = toSafeNumber(
    selectedSessionType?.priceModifier ?? 0,
  );
  const totalPrice = toSafeNumber(courseBasePrice) + sessionTypeModifier;

  return {
    selectedWeeklyScheduleId,
    selectedTimeSlotId,
    selectedSessionTypeId,
    selectedWeeklySchedule,
    selectedTimeSlot,
    selectedSessionType,
    timeSlots,
    sessionTypes,
    isTimeSlotsLoading,
    isSessionTypesLoading,
    sessionTypeModifier,
    totalPrice,
    handleWeeklyScheduleChange,
    handleTimeSlotChange,
    handleSessionTypeChange,
  };
};

export default useCourseScheduleSelection;
