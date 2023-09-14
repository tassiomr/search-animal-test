import { ResultModel } from '../../../models/result.model';
import './styles.css';

type Props = {
  item: ResultModel;
  testId?: string;
};

export const Item: React.FC<Props> = ({ item, testId }) => {
  return (
    <div className="result-item-container" data-testid={testId}>
      <h3>{item.url}</h3>
      <h1>{item.title}</h1>
      <p>{item.description}</p>
    </div>
  );
};
