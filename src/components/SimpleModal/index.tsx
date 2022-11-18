import React, { memo } from 'react';
import { useTranslation } from 'next-i18next';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Divider, Stack, styled } from '@mui/material';

import { H1 } from '@/components';

const Container = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  // @ts-ignore
  backgroundColor: theme.palette.background.paper,
  borderRadius: 6,
  overflowY: 'auto',
  maxHeight: '80vh',
  [theme.breakpoints.down('lg')]: {
    width: '95% !important',
  },
}));

type SimpleModalProps = {
  isOpen: boolean;
  title?: string;
  onClose: () => void;
  onOpen?: () => void;
  onConfirm?: () => void;
  onCancel?: () => void;
  children: any;
  width: number;
};

const SimpleModal = ({
  children,
  title,
  isOpen,
  onClose,
  onOpen,
  width,
  onCancel,
  onConfirm,
}: SimpleModalProps) => {
  const { t } = useTranslation('common');

  return (
    <Modal open={isOpen} onClose={onClose}>
      <Container sx={{ width: `${width || 400}px` }}>
        <Box sx={{ padding: '30px 30px 0 30px' }}>
          {title && (
            <H1 marginTop={0} marginBottom="25px" fontSize="16px !important">
              {title}
            </H1>
          )}
          {children}
        </Box>
        {(onCancel || onConfirm) && (
          <>
            <Divider sx={{ marginY: '24px' }} />
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'flex-end',
                padding: '0 30px 30px 30px',
              }}
            >
              <Stack direction={{ xs: 'row' }} spacing={{ xs: 1, sm: 2 }}>
                <Button
                  sx={{ borderColor: 'black', color: 'black' }}
                  variant="outlined"
                  onClick={onClose}
                >
                  {t('cancel')}
                </Button>
                <Button variant="contained" onClick={onConfirm}>
                  {t('confirm')}
                </Button>
              </Stack>
            </Box>
          </>
        )}
      </Container>
    </Modal>
  );
};

export default memo(SimpleModal);
