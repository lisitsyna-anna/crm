'use client';

import Button from './components/Button';

interface GlobalErrorProps {
  error: Error;
  reset: () => void;
}

const GlobalError: React.FC<GlobalErrorProps> = ({ error, reset }) => (
  <html>
    <body>
      <div className="p-4 flex flex-col gap-3">
        <h2 className="text-center">Something went wrong. {error.message}</h2>
        <Button onClick={() => reset()}>Try Again</Button>
      </div>
    </body>
  </html>
);

export default GlobalError;
