import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HooksApp }               from './HooksApp.JSX';
import { CounterApp }             from './01-useState/CounterApp';
import { CounterAppV2 }           from './01-useState/CounterAppV2';
import { CounterWithCustomHook }  from './01-useState/CounterWithCustomHook';
import { SimpleForm }             from './02-useEffect/SimpleForm';
import { FormWithCustomHook }     from './02-useEffect/FormWithCustomHook';
import { MultipleCustomHooks }    from './03-examples/MultipleCustomHooks';

import './index.css';


createRoot(document.getElementById('root')).render(
    //  <CounterApp />
    //  <CounterAppV2 />
    //  <CounterWithCustomHook/>
    //  <SimpleForm/>
    //<FormWithCustomHook/>
  <StrictMode>
    <MultipleCustomHooks/>
  </StrictMode>,
)
    