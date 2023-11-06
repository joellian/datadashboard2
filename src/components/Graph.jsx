import Trend from 'react-trend';

const Graph = ({ data, title }) => {
  if (!data || data.length === 0) {
    return <div>No data available</div>;
  }

  return (
    <div>
      {title && <h1>{title}</h1>}
      <Trend
        data={data}
        gradient={['#0ff', '#f0f', '#ff0']}
        radius={10}
        strokeWidth={2}
        strokeLinecap={'butt'}
      />
    </div>
  );
};

export default Graph;


