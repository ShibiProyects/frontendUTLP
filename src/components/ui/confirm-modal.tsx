import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface ConfirmModalProps {
  title: string;
  description?: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onConfirm: () => void;
  confirmText?: string;
  cancelText?: string;
}

export function ConfirmModal({
  title,
  description,
  open,
  onOpenChange,
  onConfirm,
  confirmText = "Confirm",
  cancelText = "Cancel",
}: ConfirmModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          {description && <DialogDescription>{description}</DialogDescription>}
        </DialogHeader>
        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            {cancelText}
          </Button>
          <Button
            onClick={() => {
              onConfirm();
              onOpenChange(false);
            }}
          >
            {confirmText}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
