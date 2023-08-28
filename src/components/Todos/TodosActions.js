import { MdDeleteOutline } from 'react-icons/md';
import styles from './TodosActions.module.css';
import Button from '../UI/Button';

function TodosActions({ deleteCompletedTodos }) {
  return (
    <div className={styles.btn}>
      <Button onClick={deleteCompletedTodos}>
        <MdDeleteOutline />
        <span className={styles.buttonText}>delete all</span>
      </Button>
    </div>
  );
}

export default TodosActions;
