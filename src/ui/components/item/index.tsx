import { ResultModel } from '@domain/models/result.model';
import './styles.css';

type Props = {
  item: ResultModel;
  testId?: string;
  onClick?: () => void;
  id?: number;
};

export const Item: React.FC<Props> = ({ item, id = 0, testId, onClick }) => {
  return (
    <div key={item.id} className="result-item-container" data-testid={testId}>
      <h3 data-testid="item-url">{item.url}</h3>
      <h1 onClick={onClick} data-testid={`item-title-${id}`}>
        {item.title}
      </h1>
      <p data-testid="item-description">{item.description}</p>
    </div>
  );
};
