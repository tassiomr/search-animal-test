import { ResultModel } from '@domain/models/result.model';
import './styles.css';

type Props = {
  item: ResultModel;
  testId?: string;
  onClick?: () => void;
};

export const Item: React.FC<Props> = ({ item, testId, onClick }) => {
  return (
    <div key={item.id} className="result-item-container" data-testid={testId}>
      <h3>{item.url}</h3>
      <h1 onClick={onClick}>{item.title}</h1>
      <p>{item.description}</p>
    </div>
  );
};
