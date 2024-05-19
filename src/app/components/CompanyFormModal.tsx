import Modal, { ModalProps } from './Modal';
import CompanyForm from './CompanyForm';

const CompanyFormModal: React.FC<ModalProps> = ({ onClose, ...rest }) => (
  <Modal onClose={onClose} {...rest}>
    <CompanyForm onSubmit={() => onClose()} />
  </Modal>
);

export default CompanyFormModal;
