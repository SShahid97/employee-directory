import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';

import { ConfirmDialogProps } from './types';

// ----------------------------------------------------------------------

export default function FormDialog({
  title,
  content,
  open,
  onClose,
  maxWidth,
  ...other
}: ConfirmDialogProps) {
  return (
    <Dialog fullWidth maxWidth={maxWidth} open={open} onClose={onClose} {...other}>
      <DialogTitle sx={{ pb: 2 }}>{title}</DialogTitle>
      {content && <DialogContent sx={{ typography: 'body2' }}> {content} </DialogContent>}
    </Dialog>
  );
}
