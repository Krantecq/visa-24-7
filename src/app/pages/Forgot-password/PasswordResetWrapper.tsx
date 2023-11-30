import React from 'react';
import PasswordResetForm from './PasswordResetForm';

const PasswordPage: React.FC = () => {
  const handlePasswordReset = (newPassword: string) => {
    // API call yaha or cheeze apne according change krlena
    
  };

  return (
    <div>
      <PasswordResetForm onSubmit={handlePasswordReset} />
    </div>
  );
};

export default PasswordPage;