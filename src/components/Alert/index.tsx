import {AlertDialog, Button} from 'native-base';
import React from 'react';

interface alertProps {
  title: string;
  cancelLabel: string;
  confirmLabel: string;
  isOpen?: boolean;
  onClose?: () => void;
  cancelRef?: any;
  onConfirm?: () => void;
  children: React.ReactNode;
}

export function Alert({
  title,
  cancelLabel,
  confirmLabel,
  isOpen,
  onClose,
  cancelRef,
  onConfirm,
  children,
}: alertProps) {
  return (
    <AlertDialog
      leastDestructiveRef={cancelRef}
      isOpen={isOpen}
      onClose={onClose}>
      <AlertDialog.Content>
        <AlertDialog.CloseButton />
        <AlertDialog.Header>{title}</AlertDialog.Header>
        <AlertDialog.Body>{children}</AlertDialog.Body>
        <AlertDialog.Footer>
          <Button.Group space={2}>
            <Button
              variant="unstyled"
              colorScheme="coolGray"
              onPress={onClose}
              ref={cancelRef}>
              {cancelLabel}
            </Button>
            <Button colorScheme="danger" onPress={onConfirm}>
              {confirmLabel}
            </Button>
          </Button.Group>
        </AlertDialog.Footer>
      </AlertDialog.Content>
    </AlertDialog>
  );
}
