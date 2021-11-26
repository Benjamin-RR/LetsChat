import '../styles/auth.css';
import '../styles/chats.css';
import '../styles/index.css';

import { ContextProvider } from '../context';

export default function App({ Componet, pageProps }) {
    return (
        <ContextProvider>
            <Componet {...pageProps} />
        </ContextProvider>
    );
}