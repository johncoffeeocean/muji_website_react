import 'antd/dist/antd.min.css';
import { Layout, Notice } from './components';
import { notice } from './data';

import './App.css';

function App() {
  return (
    <Layout>
      <Notice data={notice} />
      <div style={{ height: 1000 }}></div>
    </Layout>
  );
}

export default App;
