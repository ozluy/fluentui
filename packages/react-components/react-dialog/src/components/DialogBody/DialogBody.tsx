import * as React from 'react';
import { useDialogBody_unstable } from './useDialogBody';
import { renderDialogBody_unstable } from './renderDialogBody';
import { useDialogBodyStyles_unstable } from './useDialogBodyStyles';
import type { DialogBodyProps } from './DialogBody.types';
import type { ForwardRefComponent } from '@fluentui/react-utilities';
import { useCustomStyleHooks_unstable } from '@fluentui/react-shared-contexts';

/**
 * The `DialogBody` is a container where the content of the dialog is rendered.
 * Apart from styling, this component does not have other behavior.
 */
export const DialogBody: ForwardRefComponent<DialogBodyProps> = React.forwardRef((props, ref) => {
  const state = useDialogBody_unstable(props, ref);

  useDialogBodyStyles_unstable(state);

  const { useDialogBodyStyles_unstable: useCustomStyles } = useCustomStyleHooks_unstable();
  useCustomStyles(state);

  return renderDialogBody_unstable(state);
});

DialogBody.displayName = 'DialogBody';
