import { render } from '@testing-library/react';
import TodaysPlan from './03/TodaysPlan';

function SFCTodaysPlanApp(props) {
  const { onButtonClick, hasPlan } = props;
  render(
    <div className="body">
      {hasPlan ? <TodaysPlan /> : null}
      <button onClick={onButtonClick}>ęłíěě</button>
    </div>,
  );
}
