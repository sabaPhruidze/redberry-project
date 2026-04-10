export type ProfileStatus = "complete" | "incomplete" | "error";

export const getProfileStatusText = (status: ProfileStatus) =>
  status === "complete" ? "Complete Profile" : "Incomplete Profile";

export const getProfileStatusTextClassName = (status: ProfileStatus) =>
  status === "complete" ? "text-[#1DC31D]" : "text-[#B48500]";
