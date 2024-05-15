import Modal, { ModalProps } from './Modal';
import CompanyForm, { CompanyFormProps } from './CompanyForm';

interface CompanyFormModalProps extends ModalProps {
  onSubmit: CompanyFormProps['onSubmit'];
}

const CompanyFormModal: React.FC<CompanyFormModalProps> = ({
  onSubmit,
  ...rest
}) => (
  <Modal {...rest}>
    <CompanyForm onSubmit={onSubmit} />
  </Modal>
);

export default CompanyFormModal;
