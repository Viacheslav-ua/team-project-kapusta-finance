import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import s from '../../../components/BalancePageComponents/ConfirmButton/ConfirmButton.module.css';

export default function ConfirmButton() {
    const clickOnBtn = e => {
    e.preventDefault();
      const valueInput = e.target.value;
    if (!valueInput) {
      toast.error('Пожалуйста, введите правильное значение!');
    }
  };
    return (
        <button
            className={`${s.confirm} ${s.btn}`}
            type="submit"
            onClick={clickOnBtn}
        >
            ПОДТВЕРДИТЬ
        </button>
    );
}