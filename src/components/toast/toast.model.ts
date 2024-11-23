export type ToastType = {
  title: "Success" | "Error" | "Warning";
  message: string;
  onClose: () => void;
};
