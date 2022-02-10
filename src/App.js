import './App.css';
import { InitSwAuth } from '@skill-wallet/auth';


function App() {
  return (
    <div>
      <sw-auth partner-key="14a064bf84f70ddb06a560be5351298b3bff4a0c"></sw-auth>
    </div>
  );
}

InitSwAuth();
export default App;
