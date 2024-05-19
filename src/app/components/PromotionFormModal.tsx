'use client';

import PromotionForm from './PromotionForm';
import Modal, { ModalProps } from './Modal';

export interface PromotionFormModalProps extends ModalProps {
  companyId: string;
}

const PromotionFormModal: React.FC<PromotionFormModalProps> = ({
  companyId,
  onClose,
  ...rest
}) => (
  <Modal {...rest} onClose={onClose}>
    <PromotionForm companyId={companyId} onSubmit={() => onClose()} />
  </Modal>
);

export default PromotionFormModal;
